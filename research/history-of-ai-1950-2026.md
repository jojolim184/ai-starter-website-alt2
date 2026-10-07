# The history of AI, 1950 to 2026.

## The argument

Seventy-six years, two funding collapses, one idea that keeps winning. AI has advanced when machines were left to work out their own representations from data, and stalled when people tried to write intelligence down by hand.

That reading changes what the AI winters mean. They weren't proof the field's ideas were wrong. They were the stretch where the better approach was already understood in principle and nobody could yet afford to run it.

The years since Turing proposed the imitation game split into three phases, and the boundaries sit where the dominant method changed rather than on a round decade. 1986, when a workable procedure for training multi-layer networks was published. 2017, when a single architecture arrived and absorbed nearly everything after it.

---

## 1. The symbolic programme, 1950 to 1986

For its first three and a half decades the field treated intelligence as a problem of representation and search. It built systems that worked and made money. It did not build the general capability its founders had promised.

### 1.1 The founding claim was two research programmes, not one

Turing's 1950 paper set the terms by refusing to define thinking at all. He substituted an operational test, then attached a forecast with numbers on it: within roughly fifty years, a machine holding about 10 billion bits of storage would play the imitation game well enough that an average interrogator would identify it correctly no more than 70% of the time after five minutes of questioning [11]. Philosophical caution, quantitative optimism. The field has run on that combination ever since [12].

The name and the institutional form came five years later. McCarthy, Minsky, Rochester and Shannon submitted a seventeen-page proposal in August 1955, and copies still sit in the archives at Dartmouth College and Stanford University [13]. The workshop ran from 18 June to 17 August 1956 [14]. McCarthy coined "artificial intelligence" at the event itself, Newell, Shaw and Simon presented the Logic Theorist there [4], [15], and several attendees left expecting human-level machines within a generation. Substantial United States government funding followed on the strength of that expectation [1].

A different programme was running the whole time. Rosenblatt's perceptron, published in 1958, proposed a probabilistic model of information storage in the brain, and he expanded it into a fuller theory of brain mechanisms four years later [16], [17]. One camp worked downwards from symbols and logic. The other worked upwards from units that behaved something like neurones. They competed for attention and money for three decades, and that tension explains most of the field's swings in fortune [5].

### 1.2 The symbolic programme built narrow systems that actually worked

ELIZA, written by Weizenbaum at MIT and published in 1966, held conversations by identifying keywords in the input, applying decomposition rules and generating replies from the reassembly rules attached to them [19]. He built it to demonstrate how thin the exchange really was. What unsettled him was how readily users attributed feeling to it anyway [3], a concern he spent a book on ten years later [20] and one scholars are still picking at [21].

The knowledge-based systems that followed mattered more commercially. DENDRAL, begun at Stanford in 1965 and reported in its applications form in 1978, is generally regarded as the first expert system, because it automated the hypothesis-formation work of organic chemists interpreting mass spectrometry data [3], [22]. Its authors published a full case study of the project later [23]. MYCIN took the same rule-based approach to diagnosing bacterial infection and recommending antibiotic therapy [24], with a scheme of certainty factors for reasoning under incomplete information [25]. It never reached clinical practice, and the blockers were ethical and legal rather than technical [3]. The Stanford group's retrospective volume remains the standard account of what the experiments established [26].

The pattern repeats across all of them. Each performed well inside a narrow domain whose rules a human expert could articulate. Each was costly to maintain and brittle the moment conditions moved outside those rules.

### 1.3 The money left when the gap between forecast and delivery became visible

The Science Research Council asked Lighthill, an applied mathematician from outside the field, to review British work. His 1973 report concluded that in no part of the field had the discoveries made so far produced the impact that had been promised [27]. It wasn't a blanket dismissal, since he supported work directed at automation and at the computer simulation of neurophysiological processes, but he was hard on basic research in robotics and language, and United Kingdom government support dropped sharply afterwards [3]. McCarthy published a detailed rebuttal [28], Michie had already argued the other side in *Nature* [30], and the Royal Institution hosted a televised debate in June 1973. Archival work since argues that the report's causal role has been flattened in the retelling, and that Lighthill's position rested on a broader conviction about what scientific research owes practical problems [29].

The connectionists got their own reversal. Minsky and Papert's 1969 analysis of what a perceptron cannot compute is widely credited with cooling enthusiasm for neural approaches for most of the following decade [18]. A second retrenchment landed in the late 1980s, driven this time by the collapse of the commercial expert-systems market rather than by an academic verdict [31], and the people inside the field had seen it coming [5], [8].

---

## 2. The ascendancy of learning, 1986 to 2017

From the mid-1980s the centre of gravity moved to systems that derived their own representations from examples. That took one algorithmic advance, then roughly fifteen years of waiting on data and hardware, then a demonstration loud enough to knock hand-engineered baselines off the board.

### 2.1 The algorithm arrived in 1986

Backpropagation, published by Rumelhart, Hinton and Williams in *Nature*, adjusted connection weights to shrink the difference between what a network produced and what it should have produced. The consequence was the interesting part: hidden units came to represent features of the task domain that nobody had specified in advance [32]. The authors named that capacity to construct useful new features as the thing separating the method from the perceptron convergence procedure, and the accompanying volumes set out the wider agenda [33].

Two more pieces completed the technical base. LeCun and colleagues applied convolutional networks to document recognition, giving spatially structured input an architecture that suited it [34]. Hochreiter and Schmidhuber introduced long short-term memory to stop information dissolving across long sequences [35]. Schmidhuber's later survey traces how the threads came together [36].

### 2.2 The resources arrived between 2009 and 2012

A large, hierarchically organised image database built in 2009 supplied training data at a scale the earlier work had never had [41], and the competition attached to it gave everyone a common yardstick [43]. In 2012 a deep convolutional network with 60 million parameters, five convolutional layers, rectified linear units, dropout regularisation and an efficient GPU implementation of convolution cut top-one and top-five error rates to 37.5% and 17.0%, well past the previous state of the art [42]. The review Hinton, Bengio and LeCun published in 2015 consolidated the position [44].

The gap between 1986 and 2012 is the point worth sitting with. Those years weren't spent waiting on a conceptual insight. They were spent waiting for computation to get affordable and labelled data to get big.

### 2.3 Learned systems then beat engineered ones on their own benchmarks

1997 offers a neat coincidence. Deep Blue beat the reigning world chess champion using heavily engineered search and evaluation [37], [38], and long short-term memory was published inside the same twelve months [35]. The first was the older method at its peak. The second was a component of its successor. Watson's *Jeopardy!* win in 2011 belonged to the older tradition too, stitching many separately tuned components into the DeepQA architecture [39], and the public read it as a landmark [40].

Board games made the transition unambiguous. Deep reinforcement learning had already produced control policies learned directly from pixels [50]. AlphaGo then combined value and policy networks, trained by supervised learning from expert games and then by self-play, with Monte Carlo search, winning 99.8% of games against other Go programs and beating the European champion 5–0 [51]. A year later a version trained with no human game records at all surpassed it [52], and the Lee Sedol match was covered everywhere [53].

Language processing went the same way. Distributed word representations learned from unlabelled text [45], the sequence-to-sequence framework [46] and the alignment mechanism that let a decoder attend selectively across an input sequence [47] together retired hand-built translation pipelines. Generative modelling advanced through adversarial training [48], then through the diffusion formulation that would come to dominate image synthesis [49].

---

## 3. Scaling the learned model, 2017 to 2026

Since 2017 the gains have come from enlarging one architecture, teaching the result to follow instructions, and then distributing it widely enough that governance stopped being hypothetical.

### 3.1 One architecture took over

The transformer dropped recurrence and convolution and kept attention [54]. Informal expositions did a lot of the work getting practitioners onto it [55], as did a large literature on efficiency variants [56]. Pre-training on large corpora followed quickly in two forms: a generative decoder [57] and a bidirectional encoder better suited to interpretative tasks [58], with a larger generative model the year after [59].

Scale then became the primary research variable. The 2020 demonstration that a 175-billion-parameter model could perform tasks from a handful of examples in its prompt [60] came with empirical relationships between model size, data volume, compute and loss [61], later corrected to put more weight on training data [62]. Claims that certain capabilities switch on abruptly past a threshold drew attention [63] and then pushback, since the apparent discontinuity may be an artefact of the metrics chosen. The framing of these systems as general-purpose foundations for downstream applications was set out in 2021 [64], and the survey literature now sorts the whole development into four generations of language model, starting from the Turing Test itself [7].

### 3.2 Alignment work made the models usable by everyone else

Reinforcement learning from human feedback grew out of summarisation [67] into a general procedure for instruction following [65], alongside work on training assistants to be helpful and harmless [66]. The public release of November 2022 applied it to a model in the GPT-3.5 series, and the announcement was upfront about the system's habit of producing plausible-sounding answers that are wrong [69]. The reaction was immediate and widely reported [70], [71].

Capability kept widening. The 2023 technical report described a multimodal model accepting image and text input and performing at human level across professional and academic assessments, including a simulated bar examination in the top 10% of candidates [72]. That result set off contested claims about how general the thing really was [73], and it built on earlier visual language work [74]. Attention then moved to reasoning at inference time, first through prompting that draws out intermediate steps [79], then through models trained specifically to reason before answering [80]. The best documented of them showed reasoning behaviour can be induced by reinforcement learning alone, with no human-annotated reasoning traces, and that self-reflection and verification emerge during training [81], [82].

### 3.3 Wide distribution brought the regulators

Open-weight releases pushed capability outside the frontier laboratories from 2023 [75], [76], with multilingual open-access work ahead of them [77]. By 2024 open-weight models were closing on frontier performance, though the licensing attached to the largest of them sits outside a strict definition of open source [78]. The critical scholarship on the risks of scale predates most of these releases and applies to them just as well [68].

Then came the rules. The European Union's Artificial Intelligence Act, adopted in 2024, established a risk-based framework that prohibits certain applications outright, loads substantial obligations onto high-risk uses and requires transparency for generative systems [83], [84], and the Council of Europe keeps a parallel account of the field's development for policy readers [85]. On measurement: performance on a widely used software engineering benchmark went from around 60% to close to 100% inside a single year, organisational adoption reached 88%, and models from the United States and China have traded the lead repeatedly since early 2025 [10], [86]. Releases now come fast enough that current capability is tracked continuously rather than written up once a year [87], [88], [89].

---

## What it adds up to

The three phases are different lengths, but one relationship governs all of them. Specify intelligent behaviour in advance and you get systems that work inside the boundary you drew and fail outside it. Supply a learning procedure, enough data and enough computation and you get systems whose behaviour their builders did not fully anticipate, for better and for worse.

So reading the winters as evidence that the field's ambitions were misplaced would be a mistake. They are evidence that the timing of an ambition matters as much as its content. That is worth holding onto when assessing the present, because what limits capability now looks like the cost of computation and the quality of measurement, not any shortage of promising ideas [10].

---

## Note on sources

Three of the general histories below shaped the framing throughout rather than any single claim within it, so they are credited here together. Copeland's encyclopaedia treatment supplied the chronology of the early period [2], Nilsson's book-length account gave the participant's view of the symbolic era [6], and Thompson's timeline supplied the parameter and token figures behind the discussion of scale [9]. Note that [1] and [6] both begin well before 1950, so only the sections from the Dartmouth workshop onwards fall inside the period covered here.

---

## References

[1] "History of artificial intelligence," *Wikipedia*. [Online]. Available: https://en.wikipedia.org/wiki/History_of_artificial_intelligence

[2] B. J. Copeland, "History of artificial intelligence," *Encyclopaedia Britannica*. [Online]. Available: https://www.britannica.com/science/history-of-artificial-intelligence

[3] IBM, "The history of artificial intelligence," *IBM Think*. [Online]. Available: https://www.ibm.com/think/topics/history-of-artificial-intelligence

[4] R. Anyoha, "The history of artificial intelligence," *Science in the News*, Harvard Univ. Graduate School of Arts and Sciences, Aug. 28, 2017. [Online]. Available: https://sitn.hms.harvard.edu/flash/2017/history-artificial-intelligence/

[5] E. Strickland, "The turbulent past and uncertain future of artificial intelligence," *IEEE Spectrum*, Oct. 2021. [Online]. Available: https://spectrum.ieee.org/history-of-ai

[6] N. J. Nilsson, *The Quest for Artificial Intelligence: A History of Ideas and Achievements*. Cambridge, U.K.: Cambridge Univ. Press, 2009.

[7] W. X. Zhao *et al.*, "A survey of large language models," *arXiv:2303.18223*, Mar. 2023 (rev. Mar. 2026). [Online]. Available: https://arxiv.org/abs/2303.18223

[8] "The history of artificial intelligence: Complete AI timeline," *TechTarget SearchEnterpriseAI*. [Online]. Available: https://www.techtarget.com/searchenterpriseai/tip/The-history-of-artificial-intelligence-Complete-AI-timeline

[9] A. D. Thompson, "Timeline of AI and language models," *LifeArchitect.ai*. [Online]. Available: https://lifearchitect.ai/timeline/

[10] Stanford Institute for Human-Centered Artificial Intelligence, *The 2026 AI Index Report*. Stanford, CA: Stanford HAI, 2026. [Online]. Available: https://hai.stanford.edu/ai-index/2026-ai-index-report

[11] A. M. Turing, "Computing machinery and intelligence," *Mind*, vol. LIX, no. 236, pp. 433–460, Oct. 1950, doi: 10.1093/mind/LIX.236.433.

[12] IEEE Spectrum, "Commemorating 70 years of artificial intelligence," Jun. 2026. [Online]. Available: https://spectrum.ieee.org/70-years-of-artificial-intelligence

[13] J. McCarthy, M. L. Minsky, N. Rochester, and C. E. Shannon, "A proposal for the Dartmouth summer research project on artificial intelligence, August 31, 1955," *AI Magazine*, vol. 27, no. 4, pp. 12–14, 2006, doi: 10.1609/aimag.v27i4.1904.

[14] A. Kumar and A. Bhardwaj, "The meeting of the minds that launched AI," *IEEE Spectrum*, May 2023. [Online]. Available: https://spectrum.ieee.org/dartmouth-ai-workshop

[15] "Dartmouth workshop," *Wikipedia*. [Online]. Available: https://en.wikipedia.org/wiki/Dartmouth_workshop

[16] F. Rosenblatt, "The perceptron: A probabilistic model for information storage and organization in the brain," *Psychological Review*, vol. 65, no. 6, pp. 386–408, Nov. 1958, doi: 10.1037/h0042519.

[17] F. Rosenblatt, *Principles of Neurodynamics: Perceptrons and the Theory of Brain Mechanisms*. Washington, DC: Spartan Books, 1962.

[18] M. Minsky and S. Papert, *Perceptrons: An Introduction to Computational Geometry*. Cambridge, MA: MIT Press, 1969.

[19] J. Weizenbaum, "ELIZA—A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, vol. 9, no. 1, pp. 36–45, Jan. 1966, doi: 10.1145/365153.365168.

[20] J. Weizenbaum, *Computer Power and Human Reason: From Judgment to Calculation*. San Francisco, CA: W. H. Freeman, 1976.

[21] C. Bassett, "The computational therapeutic: Exploring Weizenbaum's ELIZA as a history of the present," *AI & Society*, vol. 34, no. 4, pp. 803–812, 2018.

[22] B. G. Buchanan and E. A. Feigenbaum, "DENDRAL and Meta-DENDRAL: Their applications dimension," *Artificial Intelligence*, vol. 11, no. 1–2, pp. 5–24, Feb. 1978, doi: 10.1016/0004-3702(78)90010-3.

[23] R. K. Lindsay, B. G. Buchanan, E. A. Feigenbaum, and J. Lederberg, "DENDRAL: A case study of the first expert system for scientific hypothesis formation," *Artificial Intelligence*, vol. 61, no. 2, pp. 209–261, 1993.

[24] E. H. Shortliffe, *Computer-Based Medical Consultations: MYCIN*. New York, NY: Elsevier, 1976.

[25] E. H. Shortliffe and B. G. Buchanan, "A model of inexact reasoning in medicine," *Mathematical Biosciences*, vol. 23, no. 3–4, pp. 351–379, 1975.

[26] B. G. Buchanan and E. H. Shortliffe, Eds., *Rule-Based Expert Systems: The MYCIN Experiments of the Stanford Heuristic Programming Project*. Reading, MA: Addison-Wesley, 1984.

[27] J. Lighthill, "Artificial intelligence: A general survey," in *Artificial Intelligence: A Paper Symposium*, London, U.K.: Science Research Council, 1973, pp. 1–21. [Online]. Available: https://www.chilton-computing.org.uk/inf/literature/reports/lighthill_report/p001.htm

[28] J. McCarthy, "Review of 'Artificial Intelligence: A General Survey'," Stanford Univ., 1974. [Online]. Available: https://www-formal.stanford.edu/jmc/reviews/lighthill/lighthill.html

[29] J. Agar, "What is science for? The Lighthill report on artificial intelligence reinterpreted," *British Journal for the History of Science*, vol. 53, no. 3, pp. 289–310, 2020.

[30] D. Michie, "Machines and the theory of intelligence," *Nature*, vol. 241, pp. 507–512, Feb. 23, 1973.

[31] "AI winter," *Wikipedia*. [Online]. Available: https://en.wikipedia.org/wiki/AI_winter

[32] D. E. Rumelhart, G. E. Hinton, and R. J. Williams, "Learning representations by back-propagating errors," *Nature*, vol. 323, no. 6088, pp. 533–536, Oct. 1986, doi: 10.1038/323533a0.

[33] D. E. Rumelhart, J. L. McClelland, and the PDP Research Group, *Parallel Distributed Processing: Explorations in the Microstructure of Cognition, Vol. 1: Foundations*. Cambridge, MA: MIT Press, 1986.

[34] Y. LeCun, L. Bottou, Y. Bengio, and P. Haffner, "Gradient-based learning applied to document recognition," *Proceedings of the IEEE*, vol. 86, no. 11, pp. 2278–2324, Nov. 1998.

[35] S. Hochreiter and J. Schmidhuber, "Long short-term memory," *Neural Computation*, vol. 9, no. 8, pp. 1735–1780, Nov. 1997.

[36] J. Schmidhuber, "Deep learning in neural networks: An overview," *Neural Networks*, vol. 61, pp. 85–117, Jan. 2015.

[37] M. Campbell, A. J. Hoane, Jr., and F.-h. Hsu, "Deep Blue," *Artificial Intelligence*, vol. 134, no. 1–2, pp. 57–83, Jan. 2002, doi: 10.1016/S0004-3702(01)00129-1.

[38] F.-h. Hsu, *Behind Deep Blue: Building the Computer That Defeated the World Chess Champion*. Princeton, NJ: Princeton Univ. Press, 2002.

[39] D. Ferrucci *et al.*, "Building Watson: An overview of the DeepQA project," *AI Magazine*, vol. 31, no. 3, pp. 59–79, 2010.

[40] K. Jennings, "My puny human brain," *Slate*, Feb. 17, 2011. [Online]. Available: https://slate.com/culture/2011/02/watson-jeopardy-computer-ken-jennings-describes-what-it-s-like-to-play-against-a-machine.html

[41] J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li, and L. Fei-Fei, "ImageNet: A large-scale hierarchical image database," in *Proc. IEEE Conf. Computer Vision and Pattern Recognition (CVPR)*, 2009, pp. 248–255.

[42] A. Krizhevsky, I. Sutskever, and G. E. Hinton, "ImageNet classification with deep convolutional neural networks," in *Advances in Neural Information Processing Systems 25 (NIPS)*, 2012, pp. 1097–1105.

[43] O. Russakovsky *et al.*, "ImageNet large scale visual recognition challenge," *International Journal of Computer Vision*, vol. 115, no. 3, pp. 211–252, 2015.

[44] Y. LeCun, Y. Bengio, and G. Hinton, "Deep learning," *Nature*, vol. 521, no. 7553, pp. 436–444, May 2015, doi: 10.1038/nature14539.

[45] T. Mikolov, K. Chen, G. Corrado, and J. Dean, "Efficient estimation of word representations in vector space," *arXiv:1301.3781*, 2013.

[46] I. Sutskever, O. Vinyals, and Q. V. Le, "Sequence to sequence learning with neural networks," in *Advances in Neural Information Processing Systems 27 (NIPS)*, 2014, pp. 3104–3112.

[47] D. Bahdanau, K. Cho, and Y. Bengio, "Neural machine translation by jointly learning to align and translate," in *Proc. Int. Conf. Learning Representations (ICLR)*, 2015. *arXiv:1409.0473*.

[48] I. J. Goodfellow *et al.*, "Generative adversarial nets," in *Advances in Neural Information Processing Systems 27 (NIPS)*, 2014, pp. 2672–2680.

[49] J. Sohl-Dickstein, E. Weiss, N. Maheswaranathan, and S. Ganguli, "Deep unsupervised learning using nonequilibrium thermodynamics," in *Proc. Int. Conf. Machine Learning (ICML)*, 2015.

[50] V. Mnih *et al.*, "Human-level control through deep reinforcement learning," *Nature*, vol. 518, no. 7540, pp. 529–533, Feb. 2015, doi: 10.1038/nature14236.

[51] D. Silver *et al.*, "Mastering the game of Go with deep neural networks and tree search," *Nature*, vol. 529, no. 7587, pp. 484–489, Jan. 2016, doi: 10.1038/nature16961.

[52] D. Silver *et al.*, "Mastering the game of Go without human knowledge," *Nature*, vol. 550, no. 7676, pp. 354–359, Oct. 2017.

[53] P. Mozur, "Google's AlphaGo defeats Chinese Go master in win for A.I.," *The New York Times*, May 23, 2017.

[54] A. Vaswani *et al.*, "Attention is all you need," in *Advances in Neural Information Processing Systems 30 (NIPS)*, Long Beach, CA, Dec. 2017, pp. 5998–6008. *arXiv:1706.03762*.

[55] J. Alammar, "The illustrated transformer," 2018. [Online]. Available: https://jalammar.github.io/illustrated-transformer/

[56] Y. Tay, M. Dehghani, D. Bahri, and D. Metzler, "Efficient transformers: A survey," *ACM Computing Surveys*, vol. 55, no. 6, pp. 1–28, 2022.

[57] A. Radford, K. Narasimhan, T. Salimans, and I. Sutskever, "Improving language understanding by generative pre-training," OpenAI, tech. rep., 2018.

[58] J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova, "BERT: Pre-training of deep bidirectional transformers for language understanding," in *Proc. 2019 Conf. North American Chapter of the ACL: Human Language Technologies (NAACL-HLT)*, Minneapolis, MN, Jun. 2019, pp. 4171–4186. [Online]. Available: https://aclanthology.org/N19-1423

[59] A. Radford, J. Wu, R. Child, D. Luan, D. Amodei, and I. Sutskever, "Language models are unsupervised multitask learners," OpenAI, tech. rep., 2019.

[60] T. B. Brown *et al.*, "Language models are few-shot learners," in *Advances in Neural Information Processing Systems 33 (NeurIPS)*, 2020, pp. 1877–1901. *arXiv:2005.14165*.

[61] J. Kaplan *et al.*, "Scaling laws for neural language models," *arXiv:2001.08361*, 2020.

[62] J. Hoffmann *et al.*, "Training compute-optimal large language models," *arXiv:2203.15556*, 2022.

[63] J. Wei *et al.*, "Emergent abilities of large language models," *Transactions on Machine Learning Research*, 2022. *arXiv:2206.07682*.

[64] R. Bommasani *et al.*, "On the opportunities and risks of foundation models," Stanford CRFM, *arXiv:2108.07258*, 2021.

[65] L. Ouyang *et al.*, "Training language models to follow instructions with human feedback," in *Advances in Neural Information Processing Systems 35 (NeurIPS)*, 2022. *arXiv:2203.02155*.

[66] Y. Bai *et al.*, "Training a helpful and harmless assistant with reinforcement learning from human feedback," *arXiv:2204.05862*, 2022.

[67] N. Stiennon *et al.*, "Learning to summarize with human feedback," in *Advances in Neural Information Processing Systems 33*, 2020, pp. 3008–3021.

[68] E. M. Bender, T. Gebru, A. McMillan-Major, and S. Shmitchell, "On the dangers of stochastic parrots: Can language models be too big?," in *Proc. ACM Conf. Fairness, Accountability, and Transparency (FAccT)*, 2021, pp. 610–623.

[69] OpenAI, "Introducing ChatGPT," Nov. 30, 2022. [Online]. Available: https://openai.com/index/chatgpt/

[70] K. Roose, "The brilliance and weirdness of ChatGPT," *The New York Times*, Dec. 5, 2022.

[71] "ChatGPT," *Wikipedia*. [Online]. Available: https://en.wikipedia.org/wiki/ChatGPT

[72] OpenAI, "GPT-4 technical report," *arXiv:2303.08774*, Mar. 2023. [Online]. Available: https://arxiv.org/abs/2303.08774

[73] S. Bubeck *et al.*, "Sparks of artificial general intelligence: Early experiments with GPT-4," *arXiv:2303.12712*, 2023.

[74] J.-B. Alayrac *et al.*, "Flamingo: A visual language model for few-shot learning," in *Advances in Neural Information Processing Systems 35*, 2022.

[75] H. Touvron *et al.*, "LLaMA: Open and efficient foundation language models," *arXiv:2302.13971*, 2023.

[76] H. Touvron *et al.*, "Llama 2: Open foundation and fine-tuned chat models," *arXiv:2307.09288*, 2023.

[77] T. Le Scao *et al.*, "BLOOM: A 176B-parameter open-access multilingual language model," *arXiv:2211.05100*, 2022.

[78] AI Timeline, "Meta releases Llama 3." [Online]. Available: https://aitimeline.world/

[79] J. Wei *et al.*, "Chain-of-thought prompting elicits reasoning in large language models," in *Advances in Neural Information Processing Systems 35*, 2022. *arXiv:2201.11903*.

[80] OpenAI, "Learning to reason with LLMs," Sep. 12, 2024. [Online]. Available: https://openai.com/index/learning-to-reason-with-llms/

[81] D. Guo *et al.*, "DeepSeek-R1 incentivizes reasoning in LLMs through reinforcement learning," *Nature*, vol. 645, no. 8081, pp. 633–638, Sep. 2025, doi: 10.1038/s41586-025-09422-z.

[82] DeepSeek-AI, "DeepSeek-R1: Incentivizing reasoning capability in LLMs via reinforcement learning," *arXiv:2501.12948*, Jan. 2025.

[83] European Parliament and Council of the European Union, "Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)," *Official Journal of the European Union*, Jul. 12, 2024.

[84] AI Timeline, "European Parliament approves the AI Act." [Online]. Available: https://aitimeline.world/

[85] Council of Europe, "History of AI." [Online]. Available: https://www.coe.int/en/web/artificial-intelligence/history-of-ai

[86] Stanford Institute for Human-Centered Artificial Intelligence, *The 2026 AI Index Report*, chapters on Technical Performance and Economy. See [10].

[87] AI Release Tracker, "Complete LLM timeline 2022–2026." [Online]. Available: https://aireleasetracker.com/

[88] PromptZone, "AI model releases 2026: Complete timeline tracker." [Online]. Available: https://www.promptzone.com/ai-model-releases

[89] ExplainX, "History of artificial intelligence: Complete timeline 1950–2026." [Online]. Available: https://explainx.ai/blog/history-of-artificial-intelligence-1950-2026

All online sources accessed 5 August 2026.
