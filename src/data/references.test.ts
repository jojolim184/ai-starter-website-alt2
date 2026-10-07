import { test } from 'node:test';
import assert from 'node:assert/strict';

import { references, sourceUrl, type Reference } from './references.ts';

const stub = (text: string, url?: string): Reference => ({ n: 0, text, url });

test('an explicit url wins over anything in the text', () => {
  assert.equal(
    sourceUrl(stub('X, doi: 10.1000/abc.', 'https://example.com/x')),
    'https://example.com/x',
  );
});

test('a trailing DOI resolves through doi.org without the full stop', () => {
  assert.equal(
    sourceUrl(stub('A. M. Turing, "Computing machinery and intelligence," doi: 10.1093/mind/LIX.236.433.')),
    'https://doi.org/10.1093/mind/LIX.236.433',
  );
});

test('a DOI containing brackets survives intact', () => {
  assert.equal(
    sourceUrl(stub('B. G. Buchanan, "DENDRAL and Meta-DENDRAL," doi: 10.1016/0004-3702(78)90010-3.')),
    'https://doi.org/10.1016/0004-3702(78)90010-3',
  );
});

test('an arXiv number resolves to its abstract page', () => {
  assert.equal(
    sourceUrl(stub('A. Vaswani et al., "Attention is all you need," arXiv:1706.03762.')),
    'https://arxiv.org/abs/1706.03762',
  );
});

test('an entry with neither identifier resolves to nothing', () => {
  assert.equal(sourceUrl(stub('N. J. Nilsson, The Quest for Artificial Intelligence.')), undefined);
  assert.equal(sourceUrl(undefined), undefined);
});

test('the list is contiguous from 1, so the prose cites what it thinks it does', () => {
  references.forEach((reference, index) => assert.equal(reference.n, index + 1));
});
