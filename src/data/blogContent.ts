import {
  BlogPostMeta,
  SectionItem,
  ComparisonRow,
  AcademicReference,
  VisualDiagramSpec,
} from '../types/blog';

export const BLOG_META: BlogPostMeta = {
  title: 'Sentiment Analysis: How Machines Understand Human Emotions Through Text',
  subtitle: 'A Rigorous, Student-Centric Guide to Natural Language Processing, Machine Learning Classifiers, and Deep Contextual Transformers',
  author: 'Vaibhav Padhiyar',
  authorRole: 'Natural Language Processing & Data Science',
  department: 'Artificial Intelligence & Data Science',
  readTime: '10 min read',
  publishDate: '2026',
  wordCount: 1980,
  academicLevel: 'Undergraduate B.Tech Level (Semester VI / VII)',
  abstract:
    'Every single day, humans generate over 500 million tweets, billions of social media comments, and millions of detailed e-commerce product reviews. Hidden inside this staggering mountain of raw text are human sentiments—joy, anger, disappointment, and trust. But how does a computer, which fundamentally operates solely on binary numbers (0s and 1s), decipher whether a customer is delighted or furious? This comprehensive academic blog introduces the science and engineering of Sentiment Analysis (Opinion Mining). Designed specifically for B.Tech Artificial Intelligence and Data Science students studying Natural Language Processing (NLP), this guide examines the complete end-to-end pipeline: from tokenization and text preprocessing to classical machine learning classifiers (Naive Bayes, SVM) and modern deep learning architectures (LSTMs, Transformers). Packed with step-by-step real-world traces, comparison tables, structural diagrams, and ethical evaluations, this work bridges theoretical concepts with engineering practice.'
};

export const SECTIONS: SectionItem[] = [
  { id: 'introduction', number: '01', title: 'Introduction: The Data Deluge and Human Emotion', shortTitle: 'Introduction' },
  { id: 'definition', number: '02', title: 'What is Sentiment Analysis?', shortTitle: 'Definition & Polarities' },
  { id: 'pipeline', number: '03', title: 'How Does Sentiment Analysis Work? The NLP Pipeline', shortTitle: 'NLP Pipeline' },
  { id: 'techniques', number: '04', title: 'Techniques: Lexicon, Machine Learning, and Deep Learning', shortTitle: 'Techniques' },
  { id: 'walkthrough', number: '05', title: 'Real-World Processing Walkthrough: Amazon Review Trace', shortTitle: 'Walkthrough' },
  { id: 'types', number: '06', title: 'Granularity: Document, Sentence, and Aspect-Based Analysis', shortTitle: 'Analysis Types' },
  { id: 'applications', number: '07', title: 'Real-World Industrial and Societal Applications', shortTitle: 'Applications' },
  { id: 'deep-learning', number: '08', title: 'The Role of AI, Embeddings, and Deep Learning', shortTitle: 'Deep Learning & AI' },
  { id: 'comparison', number: '09', title: 'Architectural Comparison: Lexicon vs ML vs Deep Learning', shortTitle: 'Comparison Table' },
  { id: 'advantages', number: '10', title: 'Key Strategic Advantages of Automated Sentiment Analysis', shortTitle: 'Advantages' },
  { id: 'challenges', number: '11', title: 'Core Linguistic Challenges and Edge Cases', shortTitle: 'Challenges & Edge Cases' },
  { id: 'future', number: '12', title: 'Future Scope: LLMs, Multimodal AI, and Affective Computing', shortTitle: 'Future Scope' },
  { id: 'ethics', number: '13', title: 'Ethics, Privacy, and Responsible AI Governance', shortTitle: 'Ethics & Privacy' },
  { id: 'conclusion', number: '14', title: 'Conclusion and Summary', shortTitle: 'Conclusion' },
  { id: 'references', number: '15', title: 'Academic References and Further Reading', shortTitle: 'References' },
];

export const COMPARISON_TABLE_DATA: ComparisonRow[] = [
  {
    parameter: 'Core Working Mechanism',
    lexiconBased: 'Pre-compiled sentiment dictionaries (VADER, SentiWordNet) matching words to hardcoded valence scores.',
    machineLearning: 'Supervised classifiers (Naive Bayes, SVM, Logistic Regression) trained on n-gram feature matrices (TF-IDF).',
    deepLearning: 'End-to-end neural networks (LSTM, BERT, RoBERTa) learning contextual semantic embeddings with self-attention.'
  },
  {
    parameter: 'Requirement for Labeled Data',
    lexiconBased: 'Zero labeled training samples required (unsupervised / heuristic).',
    machineLearning: 'Requires moderately sized labeled dataset (thousands of annotated samples).',
    deepLearning: 'Pre-trained on billions of unsupervised tokens; fine-tuned on task-specific labeled corpora.'
  },
  {
    parameter: 'Context & Word Order Awareness',
    lexiconBased: 'Extremely weak; assumes words are independent (Bag-of-Words), with rudimentary heuristics for nearby negations.',
    machineLearning: 'Limited; n-grams capture short local word pairs (e.g., "not good"), but cannot capture distant context.',
    deepLearning: 'Exceptional; bidirectional self-attention mechanisms capture dependencies across full paragraphs.'
  },
  {
    parameter: 'Handling of Sarcasm & Irony',
    lexiconBased: 'Very poor; regularly fails because sarcastic phrases rely on positive words used in negative contexts.',
    machineLearning: 'Poor to mediocre; requires explicit engineered sarcasm cues or sentiment contrast features.',
    deepLearning: 'Moderate to high; captures dissonance between surface tone and situational context.'
  },
  {
    parameter: 'Interpretability & Explainability',
    lexiconBased: 'High; individual word valence scores can be directly audited and summed.',
    machineLearning: 'Moderate; linear weights or log-probabilities highlight influential keywords.',
    deepLearning: 'Low to moderate; complex black-box neural representations (requires attention heatmaps or SHAP).'
  },
  {
    parameter: 'Computational & Training Cost',
    lexiconBased: 'Negligible; runs instantaneously on standard CPUs with minimal memory overhead.',
    machineLearning: 'Low to moderate; trains in seconds to minutes on basic workstation hardware.',
    deepLearning: 'High; requires GPU accelerators for fine-tuning and inference latency optimization.'
  },
  {
    parameter: 'Best Suited For',
    lexiconBased: 'Rapid prototyping, clean social media feeds, resource-constrained edge devices.',
    machineLearning: 'Baseline enterprise spam/sentiment filters, domain-specific text with limited training budgets.',
    deepLearning: 'State-of-the-art production systems, complex multi-aspect sentiment, nuanced long-form essays.'
  }
];

export const VISUAL_DIAGRAMS: VisualDiagramSpec[] = [
  {
    id: 1,
    title: 'Visual 1: End-to-End Sentiment Analysis Pipeline',
    description: 'A linear dataflow schematic illustrating how unstructured raw text progresses through preprocessing, vectorization, algorithmic classification, and categorical output.',
    keyComponents: ['Raw Text Ingestion', 'Text Preprocessing Engine', 'Vector Feature Extraction', 'Classification Model', 'Polarity & Aspect Output']
  },
  {
    id: 2,
    title: 'Visual 2: Sentiment Polarity Spectrum and Valence Gauge',
    description: 'A continuous valence scale spanning from -1.0 (Strongly Negative) through 0.0 (Objective / Neutral) to +1.0 (Strongly Positive), with sample sentence anchors.',
    keyComponents: ['Negative Zone (-1.0 to -0.15)', 'Neutral / Objective Zone (-0.15 to +0.15)', 'Positive Zone (+0.15 to +1.0)', 'Threshold Boundary Markers']
  },
  {
    id: 3,
    title: 'Visual 3: NLP Text Preprocessing Workflow Sequence',
    description: 'A step-by-step transformation diagram demonstrating data cleansing: punctuation stripping, lowercasing, tokenization, stopword removal, and lemmatization.',
    keyComponents: ['Raw String', 'Case Folding & Regex Clean', 'Token Array', 'Stopword Filter', 'Lemmatized Base Forms']
  },
  {
    id: 4,
    title: 'Visual 4: Evolution of Sentiment Techniques (Lexicon → ML → Deep Learning)',
    description: 'A progressive technical hierarchy contrasting rule-based dictionaries, statistical classifiers, and modern transformer-based attention networks.',
    keyComponents: ['Lexicon Rules (VADER)', 'Statistical ML (Naive Bayes / SVM)', 'Deep Learning (LSTMs & Transformers / BERT)']
  },
  {
    id: 5,
    title: 'Visual 5: Aspect-Based Sentiment Analysis (ABSA) Decomposition',
    description: 'A multi-branch architectural breakdown showing how a single compound sentence ("The camera is excellent, but the battery life is disappointing") maps to distinct aspect polarities.',
    keyComponents: ['Input Sentence', 'Aspect Extraction Head', 'Aspect 1: Camera (+0.90)', 'Aspect 2: Battery Life (-0.82)']
  },
  {
    id: 6,
    title: 'Visual 6: Cross-Industry Application Matrix',
    description: 'A multi-sector taxonomy showing practical real-world deployments in E-commerce, FinTech, Healthcare, Entertainment, and Customer Support.',
    keyComponents: ['E-Commerce Review Mining', 'FinTech Market Sentiment', 'Healthcare Patient Experience', 'Social Media PR Triage']
  },
  {
    id: 7,
    title: 'Visual 7: Core Linguistic Challenges & Edge Cases',
    description: 'A taxonomy of computational hurdles in NLP sentiment classification, highlighting sarcasm, polysemy, negation inversion, and code-mixing.',
    keyComponents: ['Sarcasm & Irony', 'Negation Scope', 'Polysemous Ambiguity', 'Informal Slang & Emojis', 'Multilingual Code-Mixing']
  }
];

export const ACADEMIC_REFERENCES: AcademicReference[] = [
  {
    id: 1,
    authors: 'Pang, B., & Lee, L.',
    year: 2008,
    title: 'Opinion Mining and Sentiment Analysis',
    source: 'Foundations and Trends in Information Retrieval, 2(1–2), 1–135',
    doiOrUrl: 'https://doi.org/10.1561/1500000011',
    annotation: 'The foundational seminal survey introducing the formal problem formulation, document-level and sentence-level sentiment classification, and subjectivity detection in computational linguistics.'
  },
  {
    id: 2,
    authors: 'Liu, B.',
    year: 2012,
    title: 'Sentiment Analysis and Opinion Mining',
    source: 'Synthesis Lectures on Human Language Technologies, Morgan & Claypool Publishers',
    doiOrUrl: 'https://doi.org/10.2200/S00416ED1V01Y201204HLT016',
    annotation: 'A comprehensive academic textbook covering Aspect-Based Sentiment Analysis (ABSA), sentiment lexicon construction, opinion summarization, and comparative sentence mining.'
  },
  {
    id: 3,
    authors: 'Devlin, J., Chang, M. W., Lee, K., & Toutanova, K.',
    year: 2018,
    title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
    source: 'Proceedings of NAACL-HLT 2019, 4171–4186',
    doiOrUrl: 'https://arxiv.org/abs/1810.04805',
    annotation: 'Introduced bidirectional transformer representations that revolutionized transfer learning in NLP, achieving breakthrough state-of-the-art accuracy on GLUE and SST-2 sentiment benchmarks.'
  },
  {
    id: 4,
    authors: 'Hutto, C. J., & Gilbert, E.',
    year: 2014,
    title: 'VADER: A Parsimonious Rule-based Model for Sentiment Analysis of Social Media Text',
    source: 'Eighth International AAAI Conference on Weblogs and Social Media (ICWSM-14)',
    doiOrUrl: 'https://doi.org/10.1609/icwsm.v8i1.14250',
    annotation: 'Engineered a gold-standard rule-based sentiment tool specifically calibrated for social media text, incorporating punctuation intensity, ALL-CAPS amplification, and negation word shifts.'
  },
  {
    id: 5,
    authors: 'Mikolov, T., Chen, K., Corrado, G., & Dean, J.',
    year: 2013,
    title: 'Efficient Estimation of Word Representations in Vector Space (Word2Vec)',
    source: 'arXiv preprint arXiv:1301.3781',
    doiOrUrl: 'https://arxiv.org/abs/1301.3781',
    annotation: 'Pioneered Continuous Bag-of-Words (CBOW) and Skip-gram neural architectures for generating dense semantic vector embeddings where geometric distance reflects conceptual similarity.'
  },
  {
    id: 6,
    authors: 'Socher, R., Perelygin, A., Wu, J., Chuang, J., Manning, C. D., Ng, A. Y., & Potts, C.',
    year: 2013,
    title: 'Recursive Deep Models for Semantic Compositionality Over a Sentiment Treebank',
    source: 'Proceedings of EMNLP 2013, 1631–1642',
    doiOrUrl: 'https://aclanthology.org/D13-1170/',
    annotation: 'Created the Stanford Sentiment Treebank (SST) and demonstrated how parse trees enable neural models to compute compositional sentiment across complex syntactical dependencies.'
  },
  {
    id: 7,
    authors: 'Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I.',
    year: 2017,
    title: 'Attention Is All You Need',
    source: 'Advances in Neural Information Processing Systems (NeurIPS 2017), 5998–6008',
    doiOrUrl: 'https://arxiv.org/abs/1706.03762',
    annotation: 'Proposed the Transformer architecture eliminating recurrent and convolutional connections in favor of multi-head self-attention mechanisms, serving as the architectural bedrock for modern LLMs.'
  }
];

export const VIVA_EXAM_TIPS = [
  {
    question: 'What is the fundamental difference between Subjectivity Detection and Sentiment Polarity Classification?',
    answer: 'Subjectivity Detection is a binary classification task that determines whether a given text is factual/objective ("The battery capacity is 5000mAh") or opinionated/subjective ("The battery capacity is astonishing"). Sentiment Classification only evaluates the emotional valence (positive, negative, neutral) of subjective text.'
  },
  {
    question: 'Why does Stemming differ from Lemmatization, and which is preferred in Sentiment Analysis?',
    answer: 'Stemming (e.g., Porter Stemmer) applies crude heuristic rule-based suffix chopping (e.g., "caring" → "car"), often producing non-words. Lemmatization (e.g., WordNet Lemmatizer) uses morphological analysis and vocabularies to return the valid dictionary base form (lemma: "caring" → "care"). Lemmatization is strongly preferred in sentiment analysis because stemmers can inadvertently collapse distinct sentiment words.'
  },
  {
    question: 'How does Naive Bayes calculate sentiment, and what is its "Naive" independence assumption?',
    answer: 'Naive Bayes applies Bayes\' Theorem: P(Class|Words) ∝ P(Class) × ∏ P(Word_i|Class). The "naive" assumption is conditional independence: it presumes every word occurs independently of all other words given the class label. While linguistically false (words depend heavily on neighbors), Naive Bayes performs surprisingly well on bag-of-words text classification.'
  },
  {
    question: 'Why do LSTMs outperform standard Recurrent Neural Networks (RNNs) in sentiment classification?',
    answer: 'Standard RNNs suffer from vanishing and exploding gradients when processing long sequences, preventing them from learning long-range dependencies (e.g., remembering a negation word at the start of a long review). LSTMs introduce an internal constant error carousel (cell state) governed by three gates (Input Gate, Forget Gate, and Output Gate) that preserve gradient highway flow over hundreds of timesteps.'
  },
  {
    question: 'What is Aspect-Based Sentiment Analysis (ABSA) and why is it critical in real-world engineering?',
    answer: 'ABSA breaks down compound customer opinions into specific entities/features (aspects) and computes sentiment for each aspect individually. For example, in "The screen is vibrant, but customer support was unhelpful," a document-level classifier outputs an ambiguous neutral score, whereas ABSA correctly identifies Aspect:Screen → Positive and Aspect:Support → Negative, providing actionable product feedback.'
  }
];

export const PRESET_EXAMPLES = [
  {
    label: 'Amazon Product Review (Positive)',
    category: 'E-Commerce',
    text: 'The phone has an amazing camera and excellent battery life.'
  },
  {
    label: 'Aspect-Based Review (Mixed)',
    category: 'Electronics',
    text: 'The camera is excellent, but the battery life is disappointing.'
  },
  {
    label: 'Negative Customer Experience',
    category: 'Hospitality',
    text: 'The food was stale and service was unacceptably slow.'
  },
  {
    label: 'Neutral Objective Status',
    category: 'Logistics',
    text: 'The package arrived on Tuesday as scheduled.'
  },
  {
    label: 'Subtle Rhetorical Sarcasm',
    category: 'Edge Case',
    text: 'Oh great, another flat tire on Monday morning! Just what I needed.'
  },
  {
    label: 'Negation Inversion',
    category: 'Syntax Test',
    text: 'The battery is not bad, and the customer support was not disappointing.'
  }
];
