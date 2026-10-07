import { test } from 'node:test';
import assert from 'node:assert/strict';

import { glossary, termPattern, resolveTerm, haystack, PEOPLE, COMPANIES } from './glossary.ts';

/** What the highlight pass does to one string, minus the DOM. */
const found = (text: string) =>
  [...text.matchAll(termPattern())].map((match) => resolveTerm(match[0])?.id);

test('the longest term wins over one nested inside it', () => {
  // First-match alternation would let `neural network` claim the tail here.
  assert.deepEqual(found('a deep convolutional neural network'), [
    'convolutional-neural-network',
  ]);
  assert.deepEqual(found('reinforcement learning from human feedback'), ['rlhf']);
});

test('a fragment of a term is not a term', () => {
  assert.deepEqual(found('the network held'), []);
  assert.deepEqual(found('a short memory'), []);
});

test('Australian spellings in the prose resolve to the American entries', () => {
  assert.deepEqual(found('dropout regularisation'), ['dropout', 'regularization']);
  assert.deepEqual(found('quantisation'), ['quantization']);
});

test('plurals resolve without a second entry', () => {
  assert.deepEqual(found('parameters and tokens'), ['parameters', 'token']);
  assert.deepEqual(found('two expert systems'), ['expert-system']);
});

test('a term is not matched inside a longer word', () => {
  // `token` sits at the front of `tokenisation`, and `model` of `modelling`.
  assert.deepEqual(found('tokenisation'), ['tokenization']);
  assert.deepEqual(found('generative modelling advanced'), []);
});

test('the essay names things descriptively, and those resolve too', () => {
  assert.deepEqual(found('long short-term memory'), ['lstm']);
  assert.deepEqual(found('adversarial training'), ['generative-adversarial-network']);
  assert.deepEqual(found('the imitation game'), ['turing-test']);
});

test('every term resolves from its own name and carries a definition', () => {
  for (const term of glossary) {
    assert.equal(resolveTerm(term.term)?.id, term.id, `${term.term} does not resolve`);
    assert.ok(term.definition.length > 20, `${term.term} has no real definition`);
  }
});

test('ids are unique', () => {
  const ids = glossary.map((term) => term.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('every listed person and company is a real entry', () => {
  const names = new Set(glossary.map((term) => term.term));
  for (const name of [...PEOPLE, ...COMPANIES]) assert.ok(names.has(name), `${name} is not a term`);
});

test('kinds split people, companies and terms', () => {
  const kind = (name: string) => glossary.find((term) => term.term === name)?.kind;
  assert.equal(kind('Alan Turing'), 'person');
  assert.equal(kind('Anthropic'), 'company');
  // Products are terms, not companies.
  assert.equal(kind('Claude'), 'term');
  assert.equal(kind('Neural Network'), 'term');
  assert.equal(glossary.filter((term) => term.kind === 'person').length, PEOPLE.length);
  assert.equal(glossary.filter((term) => term.kind === 'company').length, COMPANIES.length);
});

test('search reads definitions, not just names', () => {
  const hits = glossary.filter((term) => haystack(term).includes('reward'));
  assert.deepEqual(
    hits.map((term) => term.id).sort(),
    ['reinforcement-learning', 'rlhf'],
  );
});
