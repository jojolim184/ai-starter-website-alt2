/**
 * The glossary: 115 terms, and the matcher that finds them in the prose.
 *
 * The 50 terms and definitions from `research/ai_terms_list.md` are transcribed
 * verbatim. Terms 51 to 77 are jargon the essay used before it was rebuilt
 * around `research/updated_base_research.md`, grouped under Early AI, Practice
 * and Field. Terms 78 onward came with that rebuild: Concepts and Policy holds
 * jargon the new essay introduces, and Organisations & People holds the
 * companies, products and people it names.
 *
 * `aliases` is the load-bearing field. The essay is set in Australian English
 * and the research list in American (`regularisation` against `Regularization`),
 * and the essay usually names a thing descriptively rather than by its acronym:
 * "long short-term memory", not LSTM; "adversarial training", not GAN. Without
 * the aliases the highlight pass finds perhaps half of what is actually there.
 *
 * No DOM in this file. The matching is pure and tested in `glossary.test.ts`;
 * `src/scripts/glossary.ts` does the walking.
 *
 * ponytail: string matching, so a term that is also an ordinary English word is
 * occasionally marked in its ordinary sense. "A perceptron cannot compute" gets
 * the Compute entry. Word-sense disambiguation is not worth building for a
 * hover glossary: the mark is a soft tint and the definition still teaches
 * something. Drop the offending alias if a particular one starts to grate.
 */

export interface Term {
  /** Slug, derived from the name. Used as the dedupe key during the pass. */
  id: string;
  /** Display name. */
  term: string;
  /** Acronym or second name, shown after the term in the panel. */
  short?: string;
  /** Spellings and phrasings the essay actually uses. */
  aliases: string[];
  /** The research file's own headings, plus three new ones. */
  category: string;
  /** Which chip in the panel the term sits under. Derived, see `PEOPLE`. */
  kind: Kind;
  definition: string;
}

/** The panel's filter chips, minus "All". */
export type Kind = 'person' | 'company' | 'term';

type TermSeed = Omit<Term, 'id' | 'kind'>;

const seeds: TermSeed[] = [
  /* ---------- Foundations ---------- */
  {
    term: 'Artificial Intelligence',
    short: 'AI',
    aliases: ['AI'],
    category: 'Foundations',
    definition:
      'The broad field of building systems that perform tasks normally requiring human intelligence, such as recognizing images, understanding language, or making decisions.',
  },
  {
    term: 'Machine Learning',
    short: 'ML',
    aliases: ['ML'],
    category: 'Foundations',
    definition:
      'A subset of AI in which systems learn patterns from data rather than following explicitly programmed rules.',
  },
  {
    term: 'Deep Learning',
    aliases: ['deep neural network'],
    category: 'Foundations',
    definition:
      'ML that uses neural networks with many layers, allowing the system to learn increasingly abstract features from raw data.',
  },
  {
    term: 'Neural Network',
    aliases: ['neural net', 'neural approaches'],
    category: 'Foundations',
    definition:
      'A model made of interconnected "neurons" arranged in layers, loosely inspired by the brain, that transforms inputs into outputs through weighted connections.',
  },
  {
    term: 'Model',
    aliases: [],
    category: 'Foundations',
    definition:
      'The trained artifact itself: a set of learned numerical values plus an architecture that together map inputs to outputs.',
  },
  {
    term: 'Parameters',
    short: 'Weights',
    aliases: ['weights', 'parameter', 'connection weights', 'parameter update'],
    category: 'Foundations',
    definition:
      'The adjustable numbers inside a model that get tuned during training. Model size is often quoted in parameters (e.g. "70B parameters").',
  },
  {
    term: 'Training',
    aliases: ['trained', 'undertrained'],
    category: 'Foundations',
    definition:
      'The process of feeding data to a model and adjusting its parameters so its predictions improve.',
  },
  {
    term: 'Inference',
    aliases: ['inference time'],
    category: 'Foundations',
    definition:
      'Running a trained model to produce an output. This is what happens every time you send a prompt.',
  },

  /* ---------- Learning Approaches ---------- */
  {
    term: 'Supervised Learning',
    aliases: ['supervised'],
    category: 'Learning Approaches',
    definition:
      'Training on labeled examples, where each input comes paired with the correct answer.',
  },
  {
    term: 'Unsupervised Learning',
    aliases: ['unsupervised'],
    category: 'Learning Approaches',
    definition:
      'Finding structure in unlabeled data, e.g. clustering customers into groups without being told what the groups are.',
  },
  {
    term: 'Reinforcement Learning',
    short: 'RL',
    aliases: ['RL', 'deep reinforcement learning'],
    category: 'Learning Approaches',
    definition:
      'Learning by trial and error, where an agent takes actions in an environment and receives rewards or penalties.',
  },
  {
    term: 'Self-Supervised Learning',
    aliases: ['self-supervised'],
    category: 'Learning Approaches',
    definition:
      'Training where labels are generated automatically from the data itself, such as predicting the next word in a sentence. This is how most LLMs are pretrained.',
  },
  {
    term: 'Transfer Learning',
    aliases: [],
    category: 'Learning Approaches',
    definition:
      'Reusing a model trained on one task as the starting point for a different but related task.',
  },
  {
    term: 'Fine-Tuning',
    aliases: ['fine-tune', 'fine-tuned', 'finetuning', 'fine tuning'],
    category: 'Learning Approaches',
    definition:
      'Further training a pretrained model on a smaller, specialized dataset to adapt it to a particular domain or style.',
  },
  {
    term: 'RLHF',
    short: 'Reinforcement Learning from Human Feedback',
    aliases: ['reinforcement learning from human feedback', 'human feedback', 'human preference'],
    category: 'Learning Approaches',
    definition:
      "A technique where human preference ratings train a reward signal, which is then used to make a model's outputs more helpful and appropriate.",
  },
  {
    term: 'Zero-Shot Learning',
    aliases: ['zero-shot'],
    category: 'Learning Approaches',
    definition:
      'Asking a model to perform a task it was never explicitly trained on, with no examples provided.',
  },
  {
    term: 'Few-Shot Learning',
    aliases: ['few-shot'],
    category: 'Learning Approaches',
    definition:
      'Giving a model a handful of examples in the prompt to demonstrate the desired task or format.',
  },

  /* ---------- Training Mechanics ---------- */
  {
    term: 'Loss Function',
    aliases: ['loss'],
    category: 'Training Mechanics',
    definition:
      "A formula measuring how wrong a model's predictions are. Training works by minimizing it.",
  },
  {
    term: 'Gradient Descent',
    aliases: ['gradient'],
    category: 'Training Mechanics',
    definition:
      'The optimization method that nudges parameters in the direction that most reduces loss, step by step.',
  },
  {
    term: 'Backpropagation',
    aliases: ['backprop', 'back-propagation'],
    category: 'Training Mechanics',
    definition:
      'The algorithm that computes how much each parameter contributed to the error, working backward through the network.',
  },
  {
    term: 'Learning Rate',
    aliases: [],
    category: 'Training Mechanics',
    definition:
      'How large each parameter update step is. Too high and training destabilizes; too low and it crawls.',
  },
  {
    term: 'Epoch',
    aliases: [],
    category: 'Training Mechanics',
    definition: 'One complete pass through the entire training dataset.',
  },
  {
    term: 'Batch Size',
    aliases: ['batch'],
    category: 'Training Mechanics',
    definition:
      'How many training examples are processed together before parameters are updated.',
  },
  {
    term: 'Overfitting',
    aliases: ['overfit'],
    category: 'Training Mechanics',
    definition:
      'When a model memorizes its training data, including noise, and performs poorly on new data.',
  },
  {
    term: 'Underfitting',
    aliases: ['underfit'],
    category: 'Training Mechanics',
    definition:
      'When a model is too simple or undertrained to capture the real patterns in the data.',
  },
  {
    term: 'Regularization',
    aliases: ['regularisation', 'regularise', 'regularize', 'weight decay', 'early stopping'],
    category: 'Training Mechanics',
    definition:
      'Techniques (dropout, weight decay, early stopping) that discourage overfitting and improve generalization.',
  },

  /* ---------- Architectures ---------- */
  {
    term: 'Transformer',
    aliases: [],
    category: 'Architectures',
    definition:
      'The neural network architecture behind most modern language models, built around attention rather than sequential processing.',
  },
  {
    term: 'Attention Mechanism',
    aliases: ['attention', 'alignment mechanism', 'attend'],
    category: 'Architectures',
    definition:
      'A method letting a model weigh which parts of the input matter most for each part of the output.',
  },
  {
    term: 'Convolutional Neural Network',
    short: 'CNN',
    aliases: [
      'CNN',
      'convolutional network',
      'convolutional layer',
      'convolutional',
      'convolution',
    ],
    category: 'Architectures',
    definition:
      'An architecture using sliding filters to detect local patterns, dominant in image processing.',
  },
  {
    term: 'Recurrent Neural Network',
    short: 'RNN',
    aliases: ['RNN', 'recurrent', 'recurrence'],
    category: 'Architectures',
    definition:
      'An architecture that processes sequences one step at a time while carrying forward a hidden state.',
  },
  {
    term: 'LSTM',
    short: 'Long Short-Term Memory',
    aliases: ['long short-term memory'],
    category: 'Architectures',
    definition:
      'An RNN variant with gating mechanisms that help it retain information over longer sequences.',
  },
  {
    term: 'Generative Adversarial Network',
    short: 'GAN',
    aliases: ['GAN', 'adversarial training', 'adversarial', 'generator', 'discriminator'],
    category: 'Architectures',
    definition:
      'Two networks trained in competition: a generator producing fakes and a discriminator trying to detect them.',
  },
  {
    term: 'Diffusion Model',
    aliases: ['diffusion', 'diffusion formulation'],
    category: 'Architectures',
    definition:
      'A generative approach that learns to reverse a noising process, widely used in image and video generation.',
  },
  {
    term: 'Mixture of Experts',
    short: 'MoE',
    aliases: ['MoE'],
    category: 'Architectures',
    definition:
      'An architecture with many specialized sub-networks where only a few activate per input, giving large capacity at lower compute cost.',
  },
  {
    term: 'Embedding',
    aliases: ['distributed word representations', 'word representations', 'word embedding'],
    category: 'Architectures',
    definition:
      'A representation of text, images, or other data as a vector of numbers, where similar items sit close together in that space.',
  },

  /* ---------- Language Models and Prompting ---------- */
  {
    term: 'Large Language Model',
    short: 'LLM',
    aliases: ['LLM', 'language model'],
    category: 'Language Models and Prompting',
    definition:
      'A very large model trained on vast text corpora to predict and generate language.',
  },
  {
    term: 'Foundation Model',
    aliases: ['general-purpose foundations'],
    category: 'Language Models and Prompting',
    definition:
      'A large general-purpose model trained broadly, then adapted to many downstream applications.',
  },
  {
    term: 'Token',
    aliases: [],
    category: 'Language Models and Prompting',
    definition:
      'The basic unit a language model reads and writes, typically a word fragment. Roughly 0.75 words in English.',
  },
  {
    term: 'Tokenization',
    aliases: ['tokenisation'],
    category: 'Language Models and Prompting',
    definition: 'The process of splitting text into tokens before a model can process it.',
  },
  {
    term: 'Context Window',
    aliases: [],
    category: 'Language Models and Prompting',
    definition:
      'The maximum amount of text (in tokens) a model can consider at once, covering both input and output.',
  },
  {
    term: 'Prompt Engineering',
    aliases: ['prompting'],
    category: 'Language Models and Prompting',
    definition:
      'The practice of crafting inputs, instructions, examples and structure, to get better model outputs.',
  },
  {
    term: 'System Prompt',
    aliases: [],
    category: 'Language Models and Prompting',
    definition:
      "Background instructions that set a model's role, constraints, and behavior for a conversation, separate from the user's messages.",
  },
  {
    term: 'Temperature',
    aliases: [],
    category: 'Language Models and Prompting',
    definition:
      'A setting controlling randomness in generation. Low values give predictable output; high values give more varied, creative output.',
  },
  {
    term: 'Chain-of-Thought',
    short: 'CoT',
    aliases: ['CoT', 'chain of thought', 'intermediate reasoning steps', 'intermediate steps'],
    category: 'Language Models and Prompting',
    definition:
      'Prompting or training a model to work through intermediate reasoning steps before answering, which improves accuracy on complex problems.',
  },
  {
    term: 'Retrieval-Augmented Generation',
    short: 'RAG',
    aliases: ['RAG', 'retrieval-augmented'],
    category: 'Language Models and Prompting',
    definition:
      'Fetching relevant documents from an external source and inserting them into the prompt so the model answers from current, specific information.',
  },
  {
    term: 'Hallucination',
    aliases: ['hallucinate', 'hallucinating'],
    category: 'Language Models and Prompting',
    definition:
      'When a model produces fluent, confident output that is factually wrong or fabricated.',
  },

  /* ---------- Deployment and Safety ---------- */
  {
    term: 'Alignment',
    aliases: ['aligned'],
    category: 'Deployment and Safety',
    definition:
      'The problem of making AI systems pursue goals and behave in ways consistent with human intentions and values.',
  },
  {
    term: 'Quantization',
    aliases: ['quantisation', 'quantised', 'quantized'],
    category: 'Deployment and Safety',
    definition:
      "Reducing the numerical precision of a model's parameters (e.g. 16-bit to 4-bit) to shrink memory use and speed up inference, usually with modest quality loss.",
  },
  {
    term: 'Knowledge Distillation',
    aliases: ['distillation', 'distilled'],
    category: 'Deployment and Safety',
    definition:
      'Training a smaller "student" model to reproduce the behavior of a larger "teacher" model.',
  },
  {
    term: 'AI Agent',
    aliases: ['agent', 'agentic'],
    category: 'Deployment and Safety',
    definition:
      'A system that uses a model to plan and take multi-step actions toward a goal, typically by calling tools, APIs, or code.',
  },

  /* ---------- Early AI ----------
     Present in the essay, absent from the research list. */
  {
    term: 'Turing Test',
    short: 'Imitation Game',
    aliases: ['imitation game'],
    category: 'Early AI',
    definition:
      "Turing's 1950 proposal to replace the question of whether a machine thinks with an operational one: whether an interrogator can tell it apart from a person in conversation.",
  },
  {
    term: 'Symbolic AI',
    aliases: ['symbolic', 'symbolic programme', 'symbolic program', 'representation and search'],
    category: 'Early AI',
    definition:
      'The approach that treats intelligence as the manipulation of explicit symbols and logical rules written by hand, dominant from the 1950s to the mid-1980s.',
  },
  {
    term: 'Connectionism',
    aliases: ['connectionist', 'connectionists'],
    category: 'Early AI',
    definition:
      'The rival approach that builds intelligence upward from large numbers of simple interconnected units rather than downward from symbols. Modern neural networks are its descendants.',
  },
  {
    term: 'Perceptron',
    aliases: [],
    category: 'Early AI',
    definition:
      "Rosenblatt's 1958 model of a single learning unit that adjusts weights on its inputs to classify patterns. The direct ancestor of the neuron in a modern network.",
  },
  {
    term: 'Expert System',
    aliases: ['expert systems', 'knowledge-based system', 'rule-based', 'production rule'],
    category: 'Early AI',
    definition:
      "A program that encodes a human specialist's rules and applies them to a narrow problem, such as interpreting mass spectrometry data. Commercially successful, and brittle outside its rules.",
  },
  {
    term: 'AI Winter',
    aliases: ['winter'],
    category: 'Early AI',
    definition:
      'A stretch where funding and interest collapse after results fall short of forecasts. The field has had two, following the Lighthill report in 1973 and the expert-systems market in the late 1980s.',
  },

  /* ---------- Practice ---------- */
  {
    term: 'Hidden Layer',
    aliases: ['hidden unit', 'hidden state'],
    category: 'Practice',
    definition:
      'A layer between a network\'s input and output. What makes the layers interesting is that nobody specifies what they represent; the features they settle on are learned.',
  },
  {
    term: 'Pre-training',
    aliases: ['pre-trained', 'pretrained', 'pretraining', 'pretrain'],
    category: 'Practice',
    definition:
      'The first and largest training run, on broad general data, before any task-specific adaptation. Everything after it is comparatively cheap.',
  },
  {
    term: 'Dropout',
    aliases: [],
    category: 'Practice',
    definition:
      'A regularization trick that randomly switches off units during training so the network cannot lean on any single one.',
  },
  {
    term: 'Rectified Linear Unit',
    short: 'ReLU',
    aliases: ['ReLU', 'rectified linear'],
    category: 'Practice',
    definition:
      'The activation function that passes positive values through unchanged and zeroes everything else. Cheap to compute, and it made deep networks practical to train.',
  },
  {
    term: 'Sequence-to-Sequence',
    short: 'seq2seq',
    aliases: ['seq2seq'],
    category: 'Practice',
    definition:
      'A framework where one network reads an input sequence into a representation and another writes an output sequence from it. The basis of neural machine translation.',
  },
  {
    term: 'Self-Play',
    aliases: ['self play'],
    category: 'Practice',
    definition:
      'Training a system by having it compete against copies of itself, which generates unlimited training data and needs no human examples.',
  },
  {
    term: 'Monte Carlo Tree Search',
    short: 'MCTS',
    aliases: ['MCTS', 'Monte Carlo search'],
    category: 'Practice',
    definition:
      'A search method that estimates the value of a move by sampling many random continuations rather than examining every branch.',
  },
  {
    term: 'Instruction Following',
    aliases: ['instruction-following', 'instruction tuning', 'follow instructions'],
    category: 'Practice',
    definition:
      'Training a model to do what a written request asks rather than simply continuing the text. The step that turned language models into assistants.',
  },
  {
    term: 'Reasoning Model',
    aliases: ['reasoning'],
    category: 'Practice',
    definition:
      'A model trained to spend computation working through a problem before it answers, rather than replying in one pass.',
  },
  {
    term: 'Prompt',
    aliases: [],
    category: 'Practice',
    definition:
      'The input given to a model at inference time: the instruction, any examples, and whatever context comes with them.',
  },
  {
    term: 'Multimodal',
    aliases: ['multi-modal'],
    category: 'Practice',
    definition:
      'Handling more than one kind of input or output, typically text alongside images, audio or video.',
  },
  {
    term: 'Generalization',
    aliases: ['generalisation', 'generalise', 'generalize'],
    category: 'Practice',
    definition:
      "How well a model performs on data it has never seen. It is the only measure of training that matters, and it is not the same as accuracy on the training set.",
  },

  /* ---------- Field ---------- */
  {
    term: 'Compute',
    aliases: ['computation', 'computational'],
    category: 'Field',
    definition:
      'The processing work a training run or a query consumes, usually the binding constraint on what is possible at a given moment.',
  },
  {
    term: 'GPU',
    short: 'Graphics Processing Unit',
    aliases: ['graphics processing unit'],
    category: 'Field',
    definition:
      'A chip built for many parallel arithmetic operations at once. Designed for graphics, and the reason deep learning became affordable around 2012.',
  },
  {
    term: 'Benchmark',
    aliases: ['yardstick'],
    category: 'Field',
    definition:
      'A fixed task and dataset that different systems are scored against, which is how the field decides something has improved.',
  },
  {
    term: 'State of the Art',
    short: 'SOTA',
    aliases: ['SOTA', 'state-of-the-art'],
    category: 'Field',
    definition: 'The best published result on a given benchmark at a given time.',
  },
  {
    term: 'Scaling Laws',
    aliases: ['scaling law', 'scaling'],
    category: 'Field',
    definition:
      'The empirical relationships between model size, training data, compute and error. They hold across many orders of magnitude, which is why scale became a research strategy.',
  },
  {
    term: 'Emergent Capabilities',
    aliases: ['emergent', 'emergence'],
    category: 'Field',
    definition:
      'Abilities that appear abruptly past a certain scale rather than improving smoothly. Contested, since the discontinuity may be an artefact of the metric chosen.',
  },
  {
    term: 'Frontier Model',
    aliases: ['frontier'],
    category: 'Field',
    definition:
      'One of the largest and most capable models available at a given moment, and the ones regulation tends to be written about.',
  },
  {
    term: 'Open-Weight Model',
    aliases: ['open-weight', 'open weights', 'open-weight release'],
    category: 'Field',
    definition:
      'A model whose trained parameters are published for anyone to download and run. Distinct from open source, since the licence and the training data may both be restricted.',
  },
  {
    term: 'Open Source',
    aliases: ['open-source'],
    category: 'Field',
    definition:
      'Software released under a licence permitting anyone to use, study, modify and redistribute it. Several large open-weight models fall outside a strict reading of it.',
  },

  /* ---------- Concepts and Policy ----------
     New in the essay rebuilt from research/updated_base_research.md. */
  {
    term: 'Constitutional AI',
    aliases: [],
    category: 'Concepts and Policy',
    definition:
      "A training method developed by Anthropic that has a model critique and revise its own responses against a written set of principles, rather than relying solely on human feedback to shape its behaviour.",
  },
  {
    term: 'AI Bubble',
    aliases: ['bubble'],
    category: 'Concepts and Policy',
    definition:
      'The worry that the AI industry is spending far faster than it is earning, inside a web of deals where the same companies invest in each other and buy each other\'s products.',
  },
  {
    term: 'Export Controls',
    aliases: ['chip restrictions'],
    category: 'Concepts and Policy',
    definition:
      "Government restrictions on selling advanced chips and chip-making equipment to specific countries, intended to slow a rival's ability to build frontier AI systems.",
  },

  /* ---------- Organisations & People ----------
     Companies, products and people the rebuilt essay names. */
  {
    term: 'OpenAI',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'The research lab behind the GPT model family and ChatGPT, founded in 2015 with backing from figures including Elon Musk and Sam Altman.',
  },
  {
    term: 'ChatGPT',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "OpenAI's conversational assistant, released on 30 November 2022, which put a plain chat interface on top of GPT and brought AI into everyday use for hundreds of millions of people within months.",
  },
  {
    term: 'GPT',
    short: 'Generative Pre-trained Transformer',
    aliases: ['generative pre-trained transformer'],
    category: 'Organisations & People',
    definition:
      "OpenAI's line of language models, trained to predict the next word in text at increasing scale, from a 2018 proof of concept through GPT-3, GPT-4 and GPT-5.",
  },
  {
    term: 'Google',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'The company whose researchers introduced the transformer architecture and the BERT language model, and which later built the Gemini family to compete with OpenAI and Anthropic.',
  },
  {
    term: 'BERT',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "A language model Google built in 2018 to better understand what people mean when they search, applying the transformer to interpretation rather than generation.",
  },
  {
    term: 'Gemini',
    aliases: ['Bard'],
    category: 'Organisations & People',
    definition:
      "Google's family of AI models, launched under that name in late 2023 after an earlier chatbot called Bard, built to compete directly with GPT and Claude.",
  },
  {
    term: 'Anthropic',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'An AI safety-focused lab founded in 2021 by former senior OpenAI staff, including siblings Dario and Daniela Amodei, and the maker of the Claude assistant family.',
  },
  {
    term: 'Claude',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "Anthropic's family of AI assistants, launched in March 2023 and pitched as a more careful, steerable alternative to its competitors, with safety built into training via constitutional AI.",
  },
  {
    term: 'DALL-E',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'OpenAI\'s image-generation system, announced in January 2021, which turns a written description into an original picture.',
  },
  {
    term: 'Stable Diffusion',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'An open image-generation model that reached the public in 2022, part of the first wave of text-to-image tools that let anyone produce pictures from a sentence.',
  },
  {
    term: 'Midjourney',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'A text-to-image generation service that reached the public in 2022 alongside Stable Diffusion, known for the distinctive, painterly style of its output.',
  },
  {
    term: 'Meta',
    aliases: ['Facebook'],
    category: 'Organisations & People',
    definition:
      "Facebook's parent company, which took an open approach to AI by releasing its LLaMA models as open source in 2023, helping start the wider open-weights movement.",
  },
  {
    term: 'LLaMA',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'Meta\'s family of open-source language models, first released in February 2023, which anyone could download and build on for free.',
  },
  {
    term: 'xAI',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "Elon Musk's AI company, started in July 2023 and tied closely to his social network X, and the maker of the Grok chatbot.",
  },
  {
    term: 'Grok',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "xAI's chatbot, launched in November 2023 and pitched as cheekier and less filtered than its rivals, with direct access to posts on X.",
  },
  {
    term: 'Microsoft',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "OpenAI's largest investor and infrastructure partner, which has built OpenAI's models into its own products under a multibillion-dollar partnership.",
  },
  {
    term: 'Nvidia',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "The company whose chips run most AI systems, and whose market value dropped by an estimated $593 billion in the market reaction to DeepSeek's R1 release in January 2025.",
  },
  {
    term: 'Deep Blue',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'The IBM chess machine that beat reigning world champion Garry Kasparov, marking AI\'s return to public view after the first AI Winter.',
  },
  {
    term: 'DeepSeek',
    aliases: ['R1'],
    category: 'Organisations & People',
    definition:
      'A Chinese AI startup whose R1 reasoning model, released free as open source in January 2025, matched leading American systems at a fraction of the reported cost and rattled global markets.',
  },
  {
    term: 'Alibaba',
    short: 'Qwen',
    aliases: ['Qwen'],
    category: 'Organisations & People',
    definition:
      'The Chinese technology company behind the Qwen family of models, among the most downloaded open-source AI systems in the world.',
  },
  {
    term: 'Moonshot AI',
    short: 'Kimi',
    aliases: ['Moonshot', 'Kimi', 'Kimi K3'],
    category: 'Organisations & People',
    definition:
      'A Chinese AI startup behind the Kimi model family, which released Kimi K3 in July 2026 and billed it as the largest open-source model in the world.',
  },
  {
    term: 'ByteDance',
    short: 'Doubao',
    aliases: ['Doubao'],
    category: 'Organisations & People',
    definition:
      'The Chinese technology company, owner of TikTok, that develops the Doubao family of AI models.',
  },
  {
    term: 'Zhipu',
    short: 'GLM',
    aliases: ['GLM'],
    category: 'Organisations & People',
    definition: 'A Chinese AI company that develops the GLM family of language models.',
  },
  {
    term: 'Baidu',
    short: 'ERNIE',
    aliases: ['ERNIE'],
    category: 'Organisations & People',
    definition: 'The Chinese technology company behind the ERNIE family of language models.',
  },
  {
    term: 'SoftBank',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "The Japanese investment firm that partnered with OpenAI and Oracle in January 2025 to announce Stargate, a plan to put up to $500 billion into American AI infrastructure.",
  },
  {
    term: 'Oracle',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'A partner in the Stargate infrastructure project alongside OpenAI and SoftBank, and one of the five largest American cloud companies driving 2026\'s AI infrastructure spending.',
  },
  {
    term: 'Stargate',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'A plan announced in January 2025 by OpenAI, SoftBank and Oracle to invest up to $500 billion in American AI data centres and infrastructure.',
  },
  {
    term: 'Alan Turing',
    aliases: ['Turing'],
    category: 'Organisations & People',
    definition:
      'The mathematician who cracked the Enigma cipher during the Second World War, helped design some of the earliest computers, and in 1950 proposed the Turing Test.',
  },
  {
    term: 'Sam Altman',
    aliases: [],
    category: 'Organisations & People',
    definition: "An early backer of OpenAI and now its public face, associated with the company since its 2015 founding.",
  },
  {
    term: 'Elon Musk',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'A co-founder of OpenAI who later left the company, and the founder of xAI, the AI company behind the Grok chatbot.',
  },
  {
    term: 'Dario and Daniela Amodei',
    aliases: ['Dario Amodei', 'Daniela Amodei'],
    category: 'Organisations & People',
    definition:
      'The siblings who led a group of senior OpenAI staff to found Anthropic in 2021, with a focus on AI safety.',
  },
  {
    term: 'Garry Kasparov',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "The reigning world chess champion beaten by IBM's Deep Blue, a match that returned AI to public view after the first AI Winter.",
  },
  {
    term: 'Sundar Pichai',
    aliases: [],
    category: 'Organisations & People',
    definition:
      "The CEO of Google, who has led the company's push to catch up in the AI race with the Gemini model family after its early Bard chatbot fell behind ChatGPT.",
  },
  {
    term: 'Mark Zuckerberg',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'The CEO of Meta, whose decision to release the LLaMA models as open source in 2023 helped kick off the wider open-weights movement.',
  },
  {
    term: 'Amazon',
    aliases: [],
    category: 'Organisations & People',
    definition:
      'A major investor in Anthropic, and one of the cloud providers whose data centres the leading AI labs train and run their models on.',
  },
];

/** Slug from the display name: `Chain-of-Thought` becomes `chain-of-thought`. */
const slug = (term: string) =>
  term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

/**
 * The panel filters by who or what a term is, which is coarser than the
 * research file's `category`. Everything not listed here is a term, including
 * products and models (ChatGPT, Claude, DALL-E): they are things you can name,
 * not organisations. Listed by display name; `glossary.test.ts` fails if one
 * stops matching a seed.
 */
export const PEOPLE = [
  'Alan Turing',
  'Sam Altman',
  'Elon Musk',
  'Dario and Daniela Amodei',
  'Garry Kasparov',
  'Sundar Pichai',
  'Mark Zuckerberg',
];

export const COMPANIES = [
  'OpenAI',
  'Google',
  'Anthropic',
  'Meta',
  'xAI',
  'Microsoft',
  'Nvidia',
  'DeepSeek',
  'Alibaba',
  'Moonshot AI',
  'ByteDance',
  'Zhipu',
  'Baidu',
  'SoftBank',
  'Oracle',
  'Amazon',
];

const kindOf = (term: string): Kind =>
  PEOPLE.includes(term) ? 'person' : COMPANIES.includes(term) ? 'company' : 'term';

export const glossary: Term[] = seeds.map((seed) => ({
  ...seed,
  id: slug(seed.term),
  kind: kindOf(seed.term),
}));

/** Every string that should resolve to a term, lowercased. */
const lookup = new Map<string, Term>();

for (const term of glossary) {
  for (const name of [term.term, ...term.aliases]) {
    // First declaration wins, so an alias never displaces a term's own name.
    if (!lookup.has(name.toLowerCase())) lookup.set(name.toLowerCase(), term);
  }
}

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * One alternation over every name and alias, longest first.
 *
 * The ordering is the whole trick: JavaScript alternation is first-match, not
 * longest-match, so without the sort `neural network` would claim the tail of
 * `convolutional neural network` and the specific term would never be seen.
 *
 * The trailing `s?` covers plurals without a second pass, and sits inside the
 * closing `\b` so `token` does not match the start of `tokenisation`.
 */
export const termPattern = (): RegExp =>
  new RegExp(
    `\\b(?:${[...lookup.keys()]
      .sort((a, b) => b.length - a.length)
      .map(escape)
      .join('|')})s?\\b`,
    'gi',
  );

/** Resolve matched prose back to its term, tolerating case and the plural `s`. */
export const resolveTerm = (matched: string): Term | undefined => {
  const key = matched.toLowerCase();
  return lookup.get(key) ?? (key.endsWith('s') ? lookup.get(key.slice(0, -1)) : undefined);
};

/** Lowercased term, aliases and definition, for the panel's search filter. */
export const haystack = (term: Term): string =>
  [term.term, term.short ?? '', ...term.aliases, term.definition].join(' ').toLowerCase();
