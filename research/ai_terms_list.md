# AI Terminology: 115 Key Terms

A reference glossary of common artificial intelligence terms and jargon.

Terms 1 to 50 are the original list. Terms 51 to 77 were added when the glossary
was built into the site, and are jargon the essay itself uses that the first
fifty did not cover. Terms 78 to 112 were added when the essay was rebuilt around
`research/updated_base_research.md`: three concepts and policy terms the new
essay introduces, and the companies, products and people it names. The shipped
copy lives in `src/data/glossary.ts`, which adds the spelling variants and
alternative phrasings the essay uses for each term.

---

## Foundations

**1. Artificial Intelligence (AI)**
The broad field of building systems that perform tasks normally requiring human intelligence, such as recognizing images, understanding language, or making decisions.

**2. Machine Learning (ML)**
A subset of AI in which systems learn patterns from data rather than following explicitly programmed rules.

**3. Deep Learning**
ML that uses neural networks with many layers, allowing the system to learn increasingly abstract features from raw data.

**4. Neural Network**
A model made of interconnected "neurons" arranged in layers, loosely inspired by the brain, that transforms inputs into outputs through weighted connections.

**5. Model**
The trained artifact itself: a set of learned numerical values plus an architecture that together map inputs to outputs.

**6. Parameters (Weights)**
The adjustable numbers inside a model that get tuned during training. Model size is often quoted in parameters (e.g. "70B parameters").

**7. Training**
The process of feeding data to a model and adjusting its parameters so its predictions improve.

**8. Inference**
Running a trained model to produce an output. This is what happens every time you send a prompt.

---

## Learning Approaches

**9. Supervised Learning**
Training on labeled examples, where each input comes paired with the correct answer.

**10. Unsupervised Learning**
Finding structure in unlabeled data, e.g. clustering customers into groups without being told what the groups are.

**11. Reinforcement Learning (RL)**
Learning by trial and error, where an agent takes actions in an environment and receives rewards or penalties.

**12. Self-Supervised Learning**
Training where labels are generated automatically from the data itself, such as predicting the next word in a sentence. This is how most LLMs are pretrained.

**13. Transfer Learning**
Reusing a model trained on one task as the starting point for a different but related task.

**14. Fine-Tuning**
Further training a pretrained model on a smaller, specialized dataset to adapt it to a particular domain or style.

**15. RLHF (Reinforcement Learning from Human Feedback)**
A technique where human preference ratings train a reward signal, which is then used to make a model's outputs more helpful and appropriate.

**16. Zero-Shot Learning**
Asking a model to perform a task it was never explicitly trained on, with no examples provided.

**17. Few-Shot Learning**
Giving a model a handful of examples in the prompt to demonstrate the desired task or format.

---

## Training Mechanics

**18. Loss Function**
A formula measuring how wrong a model's predictions are. Training works by minimizing it.

**19. Gradient Descent**
The optimization method that nudges parameters in the direction that most reduces loss, step by step.

**20. Backpropagation**
The algorithm that computes how much each parameter contributed to the error, working backward through the network.

**21. Learning Rate**
How large each parameter update step is. Too high and training destabilizes; too low and it crawls.

**22. Epoch**
One complete pass through the entire training dataset.

**23. Batch Size**
How many training examples are processed together before parameters are updated.

**24. Overfitting**
When a model memorizes its training data, including noise, and performs poorly on new data.

**25. Underfitting**
When a model is too simple or undertrained to capture the real patterns in the data.

**26. Regularization**
Techniques (dropout, weight decay, early stopping) that discourage overfitting and improve generalization.

---

## Architectures

**27. Transformer**
The neural network architecture behind most modern language models, built around attention rather than sequential processing.

**28. Attention Mechanism**
A method letting a model weigh which parts of the input matter most for each part of the output.

**29. Convolutional Neural Network (CNN)**
An architecture using sliding filters to detect local patterns, dominant in image processing.

**30. Recurrent Neural Network (RNN)**
An architecture that processes sequences one step at a time while carrying forward a hidden state.

**31. LSTM (Long Short-Term Memory)**
An RNN variant with gating mechanisms that help it retain information over longer sequences.

**32. Generative Adversarial Network (GAN)**
Two networks trained in competition: a generator producing fakes and a discriminator trying to detect them.

**33. Diffusion Model**
A generative approach that learns to reverse a noising process, widely used in image and video generation.

**34. Mixture of Experts (MoE)**
An architecture with many specialized sub-networks where only a few activate per input, giving large capacity at lower compute cost.

**35. Embedding**
A representation of text, images, or other data as a vector of numbers, where similar items sit close together in that space.

---

## Language Models and Prompting

**36. Large Language Model (LLM)**
A very large model trained on vast text corpora to predict and generate language.

**37. Foundation Model**
A large general-purpose model trained broadly, then adapted to many downstream applications.

**38. Token**
The basic unit a language model reads and writes, typically a word fragment. Roughly 0.75 words in English.

**39. Tokenization**
The process of splitting text into tokens before a model can process it.

**40. Context Window**
The maximum amount of text (in tokens) a model can consider at once, covering both input and output.

**41. Prompt Engineering**
The practice of crafting inputs — instructions, examples, structure — to get better model outputs.

**42. System Prompt**
Background instructions that set a model's role, constraints, and behavior for a conversation, separate from the user's messages.

**43. Temperature**
A setting controlling randomness in generation. Low values give predictable output; high values give more varied, creative output.

**44. Chain-of-Thought (CoT)**
Prompting or training a model to work through intermediate reasoning steps before answering, which improves accuracy on complex problems.

**45. Retrieval-Augmented Generation (RAG)**
Fetching relevant documents from an external source and inserting them into the prompt so the model answers from current, specific information.

**46. Hallucination**
When a model produces fluent, confident output that is factually wrong or fabricated.

---

## Deployment and Safety

**47. Alignment**
The problem of making AI systems pursue goals and behave in ways consistent with human intentions and values.

**48. Quantization**
Reducing the numerical precision of a model's parameters (e.g. 16-bit to 4-bit) to shrink memory use and speed up inference, usually with modest quality loss.

**49. Knowledge Distillation**
Training a smaller "student" model to reproduce the behavior of a larger "teacher" model.

**50. AI Agent**
A system that uses a model to plan and take multi-step actions toward a goal, typically by calling tools, APIs, or code.

---

## Early AI

**51. Turing Test (Imitation Game)**
Turing's 1950 proposal to replace the question of whether a machine thinks with an operational one: whether an interrogator can tell it apart from a person in conversation.

**52. Symbolic AI**
The approach that treats intelligence as the manipulation of explicit symbols and logical rules written by hand, dominant from the 1950s to the mid-1980s.

**53. Connectionism**
The rival approach that builds intelligence upward from large numbers of simple interconnected units rather than downward from symbols. Modern neural networks are its descendants.

**54. Perceptron**
Rosenblatt's 1958 model of a single learning unit that adjusts weights on its inputs to classify patterns. The direct ancestor of the neuron in a modern network.

**55. Expert System**
A program that encodes a human specialist's rules and applies them to a narrow problem, such as interpreting mass spectrometry data. Commercially successful, and brittle outside its rules.

**56. AI Winter**
A stretch where funding and interest collapse after results fall short of forecasts. The field has had two, following the Lighthill report in 1973 and the expert-systems market in the late 1980s.

---

## Practice

**57. Hidden Layer**
A layer between a network's input and output. What makes the layers interesting is that nobody specifies what they represent; the features they settle on are learned.

**58. Pre-training**
The first and largest training run, on broad general data, before any task-specific adaptation. Everything after it is comparatively cheap.

**59. Dropout**
A regularization trick that randomly switches off units during training so the network cannot lean on any single one.

**60. Rectified Linear Unit (ReLU)**
The activation function that passes positive values through unchanged and zeroes everything else. Cheap to compute, and it made deep networks practical to train.

**61. Sequence-to-Sequence (seq2seq)**
A framework where one network reads an input sequence into a representation and another writes an output sequence from it. The basis of neural machine translation.

**62. Self-Play**
Training a system by having it compete against copies of itself, which generates unlimited training data and needs no human examples.

**63. Monte Carlo Tree Search (MCTS)**
A search method that estimates the value of a move by sampling many random continuations rather than examining every branch.

**64. Instruction Following**
Training a model to do what a written request asks rather than simply continuing the text. The step that turned language models into assistants.

**65. Reasoning Model**
A model trained to spend computation working through a problem before it answers, rather than replying in one pass.

**66. Prompt**
The input given to a model at inference time: the instruction, any examples, and whatever context comes with them.

**67. Multimodal**
Handling more than one kind of input or output, typically text alongside images, audio or video.

**68. Generalization**
How well a model performs on data it has never seen. It is the only measure of training that matters, and it is not the same as accuracy on the training set.

---

## Field

**69. Compute**
The processing work a training run or a query consumes, usually the binding constraint on what is possible at a given moment.

**70. GPU (Graphics Processing Unit)**
A chip built for many parallel arithmetic operations at once. Designed for graphics, and the reason deep learning became affordable around 2012.

**71. Benchmark**
A fixed task and dataset that different systems are scored against, which is how the field decides something has improved.

**72. State of the Art (SOTA)**
The best published result on a given benchmark at a given time.

**73. Scaling Laws**
The empirical relationships between model size, training data, compute and error. They hold across many orders of magnitude, which is why scale became a research strategy.

**74. Emergent Capabilities**
Abilities that appear abruptly past a certain scale rather than improving smoothly. Contested, since the discontinuity may be an artefact of the metric chosen.

**75. Frontier Model**
One of the largest and most capable models available at a given moment, and the ones regulation tends to be written about.

**76. Open-Weight Model**
A model whose trained parameters are published for anyone to download and run. Distinct from open source, since the licence and the training data may both be restricted.

**77. Open Source**
Software released under a licence permitting anyone to use, study, modify and redistribute it. Several large open-weight models fall outside a strict reading of it.

---

## Concepts and Policy

**78. Constitutional AI**
A training method developed by Anthropic that has a model critique and revise its own responses against a written set of principles, rather than relying solely on human feedback to shape its behaviour.

**79. AI Bubble**
The worry that the AI industry is spending far faster than it is earning, inside a web of deals where the same companies invest in each other and buy each other's products.

**80. Export Controls**
Government restrictions on selling advanced chips and chip-making equipment to specific countries, intended to slow a rival's ability to build frontier AI systems.

---

## Organisations & People

**81. OpenAI**
The research lab behind the GPT model family and ChatGPT, founded in 2015 with backing from figures including Elon Musk and Sam Altman.

**82. ChatGPT**
OpenAI's conversational assistant, released on 30 November 2022, which put a plain chat interface on top of GPT and brought AI into everyday use for hundreds of millions of people within months.

**83. GPT (Generative Pre-trained Transformer)**
OpenAI's line of language models, trained to predict the next word in text at increasing scale, from a 2018 proof of concept through GPT-3, GPT-4 and GPT-5.

**84. Google**
The company whose researchers introduced the transformer architecture and the BERT language model, and which later built the Gemini family to compete with OpenAI and Anthropic.

**85. BERT**
A language model Google built in 2018 to better understand what people mean when they search, applying the transformer to interpretation rather than generation.

**86. Gemini**
Google's family of AI models, launched under that name in late 2023 after an earlier chatbot called Bard, built to compete directly with GPT and Claude.

**87. Anthropic**
An AI safety-focused lab founded in 2021 by former senior OpenAI staff, including siblings Dario and Daniela Amodei, and the maker of the Claude assistant family.

**88. Claude**
Anthropic's family of AI assistants, launched in March 2023 and pitched as a more careful, steerable alternative to its competitors, with safety built into training via constitutional AI.

**89. DALL-E**
OpenAI's image-generation system, announced in January 2021, which turns a written description into an original picture.

**90. Stable Diffusion**
An open image-generation model that reached the public in 2022, part of the first wave of text-to-image tools that let anyone produce pictures from a sentence.

**91. Midjourney**
A text-to-image generation service that reached the public in 2022 alongside Stable Diffusion, known for the distinctive, painterly style of its output.

**92. Meta**
Facebook's parent company, which took an open approach to AI by releasing its LLaMA models as open source in 2023, helping start the wider open-weights movement.

**93. LLaMA**
Meta's family of open-source language models, first released in February 2023, which anyone could download and build on for free.

**94. xAI**
Elon Musk's AI company, started in July 2023 and tied closely to his social network X, and the maker of the Grok chatbot.

**95. Grok**
xAI's chatbot, launched in November 2023 and pitched as cheekier and less filtered than its rivals, with direct access to posts on X.

**96. Microsoft**
OpenAI's largest investor and infrastructure partner, which has built OpenAI's models into its own products under a multibillion-dollar partnership.

**97. Nvidia**
The company whose chips run most AI systems, and whose market value dropped by an estimated $593 billion in the market reaction to DeepSeek's R1 release in January 2025.

**98. Deep Blue**
The IBM chess machine that beat reigning world champion Garry Kasparov, marking AI's return to public view after the first AI Winter.

**99. DeepSeek**
A Chinese AI startup whose R1 reasoning model, released free as open source in January 2025, matched leading American systems at a fraction of the reported cost and rattled global markets.

**100. Alibaba (Qwen)**
The Chinese technology company behind the Qwen family of models, among the most downloaded open-source AI systems in the world.

**101. Moonshot AI (Kimi)**
A Chinese AI startup behind the Kimi model family, which released Kimi K3 in July 2026 and billed it as the largest open-source model in the world.

**102. ByteDance (Doubao)**
The Chinese technology company, owner of TikTok, that develops the Doubao family of AI models.

**103. Zhipu (GLM)**
A Chinese AI company that develops the GLM family of language models.

**104. Baidu (ERNIE)**
The Chinese technology company behind the ERNIE family of language models.

**105. SoftBank**
The Japanese investment firm that partnered with OpenAI and Oracle in January 2025 to announce Stargate, a plan to put up to $500 billion into American AI infrastructure.

**106. Oracle**
A partner in the Stargate infrastructure project alongside OpenAI and SoftBank, and one of the five largest American cloud companies driving 2026's AI infrastructure spending.

**107. Stargate**
A plan announced in January 2025 by OpenAI, SoftBank and Oracle to invest up to $500 billion in American AI data centres and infrastructure.

**108. Alan Turing**
The mathematician who cracked the Enigma cipher during the Second World War, helped design some of the earliest computers, and in 1950 proposed the Turing Test.

**109. Sam Altman**
An early backer of OpenAI and now its public face, associated with the company since its 2015 founding.

**110. Elon Musk**
A co-founder of OpenAI who later left the company, and the founder of xAI, the AI company behind the Grok chatbot.

**111. Dario and Daniela Amodei**
The siblings who led a group of senior OpenAI staff to found Anthropic in 2021, with a focus on AI safety.

**112. Garry Kasparov**
The reigning world chess champion beaten by IBM's Deep Blue, a match that returned AI to public view after the first AI Winter.

**113. Sundar Pichai**
The CEO of Google, who has led the company's push to catch up in the AI race with the Gemini model family after its early Bard chatbot fell behind ChatGPT.

**114. Mark Zuckerberg**
The CEO of Meta, whose decision to release the LLaMA models as open source in 2023 helped kick off the wider open-weights movement.

**115. Amazon**
A major investor in Anthropic, and one of the cloud providers whose data centres the leading AI labs train and run their models on.
