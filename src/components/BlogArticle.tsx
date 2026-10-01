import React from 'react';
import { BLOG_META, ACADEMIC_REFERENCES } from '../data/blogContent';
import { PipelineVisualizer } from './PipelineVisualizer';
import { ComparisonTable } from './ComparisonTable';
import { DiagramShowcase } from './DiagramShowcase';
import {
  ExternalLink,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  MessageSquare
} from 'lucide-react';

// Imported generated editorial illustration assets
import heroImage from '../assets/images/hero_sentiment_nlp_1790835509743.jpg';
import pipelineImage from '../assets/images/pipeline_nlp_visual_1790835526011.jpg';
import aspectImage from '../assets/images/aspect_sentiment_visual_1790835544476.jpg';

export const BlogArticle: React.FC = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-body text-stone-800 leading-relaxed">
      {/* Editorial Header / Metadata Block */}
      <header className="pb-8 border-b border-stone-200">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.15] text-balance">
          {BLOG_META.title}
        </h1>

        <p className="font-display italic text-lg sm:text-xl text-stone-600 mt-4 leading-relaxed">
          {BLOG_META.subtitle}
        </p>

        {/* Abstract Box */}
        <div className="mt-8 p-6 bg-stone-100/80 rounded-2xl border border-stone-200/90 text-sm leading-relaxed text-stone-700">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2 font-mono">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Executive Abstract</span>
          </div>
          <p className="italic text-stone-700 font-serif">
            {BLOG_META.abstract}
          </p>
        </div>
      </header>

      {/* Featured Editorial Hero Illustration */}
      <figure className="my-10">
        <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xs">
          <img
            src={heroImage}
            alt="Conceptual visualization of Sentiment Analysis in Natural Language Processing"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[460px]"
          />
        </div>
        <figcaption className="text-xs text-stone-500 font-serif italic text-center mt-2.5">
          Figure 1.0: Computational sentiment analysis bridges continuous human linguistic expression with discrete machine mathematical representations.
        </figcaption>
      </figure>

      {/* SECTION 1: INTRODUCTION */}
      <section id="introduction" className="pt-8 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>01</span>
          <span aria-hidden="true">/</span>
          <span>Orientation</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          1. Introduction: The Data Deluge and Human Emotion
        </h2>

        <p className="text-base sm:text-lg text-stone-700 leading-relaxed mb-4">
          Imagine opening an e-commerce platform like Amazon on Black Friday. Within 24 hours, tens of thousands of buyers post reviews on a newly released flagship smartphone. Some users write enthusiastic essays praising the camera's night mode; others vent frustration about battery drain; and many submit brief, ambiguous comments like <em>"It does what it says."</em>
        </p>

        <p className="mb-4">
          Now, multiply this by the global internet. Every single day, humanity generates over <strong>500 million tweets</strong>, hundreds of millions of product evaluations, hospital patient questionnaires, Reddit discussion threads, and app store ratings. For any enterprise, government agency, or researcher, reading these text passages manually is a physical impossibility. A team of human analysts would take months just to read what users write in a single afternoon—by which time customer sentiment has already shifted.
        </p>

        <p className="mb-4">
          This introduces the central engineering bottleneck of the information age: <strong>How can we automatically, reliably, and instantaneously distill millions of subjective human opinions into structured, quantifiable intelligence?</strong>
        </p>

        <div className="p-4 bg-amber-50/60 border-l-4 border-amber-800 rounded-r-xl my-6 text-sm text-stone-800">
          <strong className="text-amber-950 block font-semibold mb-1">Formal Academic Definition:</strong>
          <strong>Sentiment Analysis</strong> (also universally known in computational linguistics as <strong>Opinion Mining</strong>) is the subfield of <strong>Natural Language Processing (NLP)</strong>, Information Retrieval, and Artificial Intelligence that builds computational algorithms to identify, extract, quantify, and categorize subjective feelings, affective states, and opinions expressed within unstructured natural language text.
        </div>

        <p>
          In the curriculum of a B.Tech in Artificial Intelligence and Data Science, Sentiment Analysis occupies a crucial crossroads. It connects classical statistical pattern recognition, linguistically motivated syntax parsing, and modern deep neural representations.
        </p>
      </section>

      {/* SECTION 2: WHAT IS SENTIMENT ANALYSIS? */}
      <section id="definition" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>02</span>
          <span aria-hidden="true">/</span>
          <span>Core Concepts</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          2. What is Sentiment Analysis?
        </h2>

        <p className="mb-4">
          At its simplest level, sentiment analysis teaches a computer to answer the question: <em>"What is the writer's attitude toward the subject they are discussing?"</em>
        </p>

        <p className="mb-4">
          While humans comprehend emotions through instinct, tone of voice, facial cues, and cultural context, computers see text merely as an arbitrary array of ASCII or UTF-8 byte sequences. To bridge this divide, sentiment analysis maps linguistic constructs to an emotional <strong>polarity spectrum</strong>.
        </p>

        <h3 className="font-display text-lg font-bold text-stone-900 mt-6 mb-3">
          The Three Fundamental Polarity Categories:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>1. Positive Sentiment</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Conveys satisfaction, admiration, delight, joy, or endorsement.
            </p>
            <div className="mt-3 p-2 bg-white rounded border border-emerald-200 text-xs font-mono text-emerald-950">
              "The processor is lightning fast and handles 4K rendering effortlessly!"
            </div>
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-100/60">
            <div className="flex items-center gap-1.5 font-bold text-stone-900 text-sm">
              <span className="w-3.5 h-3.5 rounded-full border-2 border-stone-600 inline-block" />
              <span>2. Neutral Sentiment</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Objective, factual statements that lack emotional valence or endorsement.
            </p>
            <div className="mt-3 p-2 bg-white rounded border border-stone-200 text-xs font-mono text-stone-900">
              "The laptop weighs 1.4 kilograms and comes with an 85W USB-C charger."
            </div>
          </div>

          <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/50">
            <div className="flex items-center gap-1.5 font-bold text-rose-900 text-sm">
              <AlertTriangle className="w-4 h-4 text-rose-700" />
              <span>3. Negative Sentiment</span>
            </div>
            <p className="text-xs text-stone-600 mt-2">
              Reflects frustration, grievance, disappointment, defect, or disapproval.
            </p>
            <div className="mt-3 p-2 bg-white rounded border border-rose-200 text-xs font-mono text-rose-950">
              "The hinge cracked after three days of gentle use. Terrible build quality."
            </div>
          </div>
        </div>

        <p className="text-sm text-stone-600">
          In advanced engineering setups, polarity is often extended from 3 discrete buckets into fine-grained 5-star intervals (Very Negative, Negative, Neutral, Positive, Very Positive) or continuous valence scores ranging from <code className="font-mono text-xs bg-stone-100 px-1.5 py-0.5 rounded">-1.00</code> (maximum grievance) to <code className="font-mono text-xs bg-stone-100 px-1.5 py-0.5 rounded">+1.00</code> (maximum praise).
        </p>
      </section>

      {/* SECTION 3: HOW DOES SENTIMENT ANALYSIS WORK? */}
      <section id="pipeline" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>03</span>
          <span aria-hidden="true">/</span>
          <span>Engineering Architecture</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          3. How Does Sentiment Analysis Work? The NLP Pipeline
        </h2>

        <p className="mb-4">
          How do we get from raw human text to a computed sentiment label? No machine learning algorithm can process raw strings directly. The process requires a rigorous multi-stage pipeline:
        </p>

        {/* Highlighted Flow Box */}
        <div className="p-4 bg-stone-900 text-stone-100 rounded-xl my-6 text-center font-mono text-xs sm:text-sm shadow-sm flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <span className="text-amber-300 font-bold">Text</span>
          <span className="text-stone-500">→</span>
          <span className="text-sky-300 font-bold">Preprocessing</span>
          <span className="text-stone-500">→</span>
          <span className="text-emerald-300 font-bold">Feature Extraction</span>
          <span className="text-stone-500">→</span>
          <span className="text-purple-300 font-bold">Model</span>
          <span className="text-stone-500">→</span>
          <span className="text-amber-400 font-bold">Sentiment Output</span>
        </div>

        <p className="mb-4">
          Let us examine each stage of this canonical pipeline in detail:
        </p>

        <div className="space-y-6 my-6 text-sm">
          {/* Step 1 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-800 text-white text-xs flex items-center justify-center font-mono">1</span>
              <span>Data Ingestion & Text Collection</span>
            </h4>
            <p className="text-stone-700 mt-2">
              Unstructured text is harvested from data lakes, live Twitter/X streaming firehoses, web scrapers (BeautifulSoup/Selenium), or SQL customer support logs. The text arrives riddled with HTML markup, tracking URLs, emojis, and typos.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-800 text-white text-xs flex items-center justify-center font-mono">2</span>
              <span>Text Preprocessing (Data Cleansing)</span>
            </h4>
            <p className="text-stone-700 mt-2">
              Raw text must be sanitized before passing into statistical systems:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-stone-600">
              <li><strong>Case Folding:</strong> Converting all characters to lowercase so that <code className="font-mono text-xs">"Great"</code>, <code className="font-mono text-xs">"GREAT"</code>, and <code className="font-mono text-xs">"great"</code> are recognized as the exact same vocabulary entry.</li>
              <li><strong>Noise Stripping:</strong> Removing punctuation, HTML tags (<code className="font-mono text-xs">&lt;br/&gt;</code>), hyperlinks, and non-printable control characters via regular expressions.</li>
              <li><strong>Tokenization:</strong> Segmenting the continuous string into discrete syntactic atoms (words, contractions, or subwords). For instance, <code className="font-mono text-xs">"I can't wait"</code> is parsed into <code className="font-mono text-xs">["I", "ca", "n't", "wait"]</code>.</li>
              <li><strong>Stopword Filtering:</strong> Removing high-frequency grammatical glue words (<code className="font-mono text-xs">"is", "the", "at", "which"</code>) that carry syntactic structure but little emotional valence. <em>Caveat:</em> Care must be taken not to remove negation words (<code className="font-mono text-xs">"not", "no", "never"</code>), as dropping them would completely invert the sentiment!</li>
              <li><strong>Stemming vs. Lemmatization:</strong> Stemming (e.g. Porter Stemmer) cuts off word endings using heuristic rules (<code className="font-mono text-xs">"crying" → "cri"</code>). Lemmatization (e.g. WordNet) uses dictionary morphology to return the authentic root lemma (<code className="font-mono text-xs">"better" → "good"</code>, <code className="font-mono text-xs">"crying" → "cry"</code>). In sentiment analysis, lemmatization is universally preferred.</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-800 text-white text-xs flex items-center justify-center font-mono">3</span>
              <span>Feature Extraction (Word Representations)</span>
            </h4>
            <p className="text-stone-700 mt-2">
              Mathematical algorithms cannot multiply English words; we must convert discrete tokens into dense numerical vectors:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-stone-600">
              <li><strong>Bag-of-Words (BoW):</strong> Represents text as an unordered vocabulary count frequency vector. It ignores syntax and word order.</li>
              <li><strong>TF-IDF (Term Frequency-Inverse Document Frequency):</strong> Weights words by how frequently they appear in a document while penalizing words that appear across all documents, highlighting distinctive opinion words.</li>
              <li><strong>Dense Word Embeddings (Word2Vec, GloVe):</strong> Maps words into continuous multi-hundred-dimensional coordinate space where words with similar semantic meanings cluster together geometrically (<code className="font-mono text-xs">"superb"</code> lands right next to <code className="font-mono text-xs">"excellent"</code>).</li>
            </ul>
          </div>

          {/* Step 4 & 5 */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-base text-stone-900 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-800 text-white text-xs flex items-center justify-center font-mono">4 & 5</span>
              <span>Model Classification & Final Sentiment Output</span>
            </h4>
            <p className="text-stone-700 mt-2">
              The vector representation is fed into a trained classifier (such as a Support Vector Machine or a fine-tuned BERT Transformer). The model computes class probabilities and emits a clean JSON prediction containing polarity, confidence, and aspect scores for downstream production use.
            </p>
          </div>
        </div>

        {/* Embedded Interactive Pipeline Visualizer */}
        <PipelineVisualizer />

        {/* Generated Pipeline Diagram Asset */}
        <figure className="my-8">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xs">
            <img
              src={pipelineImage}
              alt="Technical diagram of the Natural Language Processing sentiment analysis pipeline"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>
          <figcaption className="text-xs text-stone-500 font-serif italic text-center mt-2.5">
            Figure 1.1: Technical architecture of the text-to-sentiment transformation pipeline from tokenization to classification.
          </figcaption>
        </figure>
      </section>

      {/* SECTION 4: TECHNIQUES USED IN SENTIMENT ANALYSIS */}
      <section id="techniques" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>04</span>
          <span aria-hidden="true">/</span>
          <span>Methodology</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          4. Techniques Used in Sentiment Analysis
        </h2>

        <p className="mb-4">
          Over the past three decades, natural language processing researchers have engineered three distinct methodological paradigms to solve sentiment classification:
        </p>

        {/* Approach 1 */}
        <div className="my-6 p-5 bg-white rounded-xl border border-stone-200">
          <h3 className="font-display text-lg font-bold text-amber-950 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded font-mono text-xs">Method 1</span>
            <span>The Lexicon-Based Approach</span>
          </h3>
          <p className="text-sm text-stone-700 mt-2 leading-relaxed">
            The lexicon-based approach is rule-driven and does not require machine learning training data. It relies on a pre-compiled <strong>sentiment lexicon</strong> (an annotated dictionary of thousands of words with assigned polarity scores). When analyzing a sentence, the algorithm tokenizes the text, looks up each word in the dictionary, applies heuristic grammatical adjustments (such as negations and ALL-CAPS amplifiers), and calculates the sum of the valence scores.
          </p>
          <div className="mt-3 p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700">
            <strong>Prominent Lexicon Systems:</strong>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li><strong>VADER (Valence Aware Dictionary and sEntiment Reasoner):</strong> Specifically tuned for social media. VADER understands that <code className="font-mono text-xs">"GREAT!!!"</code> is more intense than <code className="font-mono text-xs">"great"</code>, and flips scores when preceded by words like <code className="font-mono text-xs">"hardly"</code> or <code className="font-mono text-xs">"not"</code>.</li>
              <li><strong>SentiWordNet:</strong> An extension of WordNet assigning objective, positive, and negative scores to synsets.</li>
            </ul>
          </div>
        </div>

        {/* Approach 2 */}
        <div className="my-6 p-5 bg-white rounded-xl border border-stone-200">
          <h3 className="font-display text-lg font-bold text-sky-950 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-sky-100 text-sky-900 rounded font-mono text-xs">Method 2</span>
            <span>Classical Machine Learning Classifiers</span>
          </h3>
          <p className="text-sm text-stone-700 mt-2 leading-relaxed">
            In supervised machine learning, instead of writing dictionary rules by hand, we train a statistical model on thousands of human-annotated reviews. The system extracts n-gram features (TF-IDF matrices) and learns mathematical decision boundaries:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-xs">
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 font-semibold mb-1">Naive Bayes (NB)</strong>
              Uses Bayes' probability theorem with an assumption of feature independence. Fast, lightweight, and surprisingly competitive on small text datasets.
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 font-semibold mb-1">Logistic Regression</strong>
              Models the log-odds of a positive sentiment outcome using a linear combination of input word frequencies squashed via a sigmoid curve.
            </div>
            <div className="p-3 bg-stone-50 rounded border border-stone-200">
              <strong className="block text-stone-900 font-semibold mb-1">Support Vector Machine (SVM)</strong>
              Finds the optimal hyperplane that maximizes the geometric margin between positive and negative document vectors in high-dimensional space.
            </div>
          </div>
        </div>

        {/* Approach 3 */}
        <div className="my-6 p-5 bg-white rounded-xl border border-stone-200">
          <h3 className="font-display text-lg font-bold text-purple-950 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-purple-100 text-purple-900 rounded font-mono text-xs">Method 3</span>
            <span>Deep Learning & Contextual Transformers</span>
          </h3>
          <p className="text-sm text-stone-700 mt-2 leading-relaxed">
            While classical machine learning treats documents as bags of words, human language is inherently sequential and context-dependent. Modern deep learning solves this by using neural networks that read sentences in context:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs text-stone-700">
            <li><strong>Recurrent Neural Networks (RNNs):</strong> Process words sequentially timestep by timestep, passing a hidden state vector forward to maintain conversational memory.</li>
            <li><strong>Long Short-Term Memory (LSTM):</strong> Overcomes the vanishing gradient problem of standard RNNs by using gating mechanisms (input, forget, output gates) to retain long-range dependencies across long sentences.</li>
            <li><strong>Transformers (BERT, RoBERTa):</strong> Employs <em>Multi-Head Self-Attention</em>. Instead of reading words strictly left-to-right, transformers process all words in a sentence simultaneously, computing cross-attention scores that dynamically adjust each word's meaning based on its surrounding context.</li>
          </ul>
        </div>
      </section>

      {/* SECTION 5: REAL-WORLD EXAMPLE & STEP-BY-STEP TRACE */}
      <section id="walkthrough" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>05</span>
          <span aria-hidden="true">/</span>
          <span>Applied Demonstration</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          5. Real-World Example: Amazon Product Review Trace
        </h2>

        <p className="mb-4">
          To understand how these concepts operate in practice, let us trace an authentic Amazon e-commerce review step by step through an NLP sentiment engine:
        </p>

        {/* Example 1 Trace */}
        <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-xs mb-6">
          <div className="text-xs font-mono uppercase text-emerald-800 font-bold mb-2">
            Case Study A: Positive Amazon Review
          </div>
          <blockquote className="p-3 bg-stone-50 border-l-4 border-emerald-600 rounded text-stone-900 font-serif italic text-base">
            “The phone has an amazing camera and excellent battery life.”
          </blockquote>

          <div className="mt-4 space-y-2.5 text-xs text-stone-700">
            <div className="flex items-start gap-2">
              <span className="font-mono text-stone-500 font-semibold w-24 shrink-0">Stage 1: Clean</span>
              <span>Lowercasing & punctuation removal: <code className="font-mono bg-stone-100 px-1">"the phone has an amazing camera and excellent battery life"</code></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-stone-500 font-semibold w-24 shrink-0">Stage 2: Tokenize</span>
              <span className="font-mono bg-stone-100 p-1 rounded">["the", "phone", "has", "an", "amazing", "camera", "and", "excellent", "battery", "life"]</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-stone-500 font-semibold w-24 shrink-0">Stage 3: Filter</span>
              <span>Drop non-opinion stopwords ("the", "has", "an", "and") → Remaining: <code className="font-mono bg-stone-100 px-1">["phone", "amazing", "camera", "excellent", "battery", "life"]</code></span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-stone-500 font-semibold w-24 shrink-0">Stage 4: Valence</span>
              <span>
                Lexicon matching: <code className="text-emerald-700 font-mono font-bold">"amazing" (+0.85)</code>, <code className="text-emerald-700 font-mono font-bold">"excellent" (+0.90)</code>, neutral nouns ("phone", "camera", "battery", "life") = 0.00.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-mono text-stone-500 font-semibold w-24 shrink-0">Stage 5: Output</span>
              <span>Normalized compound score = <strong>+0.88</strong> → Classified as <strong>Positive Sentiment (94% confidence)</strong>.</span>
            </div>
          </div>
        </div>

        {/* Negative and Neutral Traces */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-white rounded-xl border border-rose-200">
            <span className="text-xs font-mono font-bold uppercase text-rose-800 block mb-1">
              Case Study B: Negative Hospitality Review
            </span>
            <blockquote className="text-xs font-serif italic text-stone-800 mb-2">
              “The food was stale and service was unacceptably slow.”
            </blockquote>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Processing:</strong> Identifies two high-intensity negative adjectives: <code className="text-rose-700 font-mono">"stale" (-0.70)</code> and <code className="text-rose-700 font-mono">"slow" (-0.55)</code> amplified by the adverb <code className="text-rose-700 font-mono">"unacceptably" (×1.35 multiplier)</code>.
              <br />
              <strong>Classification:</strong> Negative Sentiment (<code className="font-mono text-rose-700 font-bold">-0.82</code>).
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <span className="text-xs font-mono font-bold uppercase text-stone-700 block mb-1">
              Case Study C: Neutral Logistics Status
            </span>
            <blockquote className="text-xs font-serif italic text-stone-800 mb-2">
              “The package arrived on Tuesday as scheduled.”
            </blockquote>
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Processing:</strong> Contains factual temporal markers ("Tuesday", "scheduled", "arrived") with zero emotion-bearing adjectives or polar adverbs.
              <br />
              <strong>Classification:</strong> Neutral / Objective (<code className="font-mono text-stone-700 font-bold">0.00</code>).
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: TYPES OF SENTIMENT ANALYSIS */}
      <section id="types" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>06</span>
          <span aria-hidden="true">/</span>
          <span>Granularity Levels</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          6. Types of Sentiment Analysis: From Document to Aspect Level
        </h2>

        <p className="mb-4">
          Sentiment analysis is not one-size-fits-all. In production NLP engineering, sentiment is evaluated at three distinct levels of linguistic granularity:
        </p>

        <div className="space-y-4 my-6 text-sm">
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h3 className="font-display font-bold text-base text-stone-900">
              1. Document-Level Sentiment Analysis
            </h3>
            <p className="text-stone-700 mt-1 leading-relaxed">
              The entire document (such as a 1,000-word newspaper editorial or a whole blog post) is treated as a single entity and assigned one global sentiment label. <em>Assumption:</em> The whole document expresses an opinion about a single topic.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h3 className="font-display font-bold text-base text-stone-900">
              2. Sentence-Level Sentiment Analysis
            </h3>
            <p className="text-stone-700 mt-1 leading-relaxed">
              Each individual sentence in a paragraph is parsed independently. The system first performs <strong>subjectivity detection</strong> to decide if the sentence is factual or opinionated, then computes polarity for the opinionated sentences.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border-2 border-amber-800/30 bg-amber-50/20">
            <h3 className="font-display font-bold text-base text-amber-950 flex items-center justify-between">
              <span>3. Aspect-Based Sentiment Analysis (ABSA) — The Industry Standard</span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-amber-200/60 text-amber-900 rounded">
                High Value
              </span>
            </h3>
            <p className="text-stone-700 mt-2 leading-relaxed">
              In real life, people rarely love or hate every single part of a product. Consider this common smartphone review:
            </p>
            <blockquote className="my-3 p-3 bg-white border-l-4 border-amber-800 rounded font-serif italic text-stone-900 text-sm">
              “The camera is excellent, but the battery life is disappointing.”
            </blockquote>
            <p className="text-stone-700 leading-relaxed">
              If an older document-level algorithm evaluated this sentence, the positive score of <code className="font-mono text-xs">"excellent"</code> (+0.9) and the negative score of <code className="font-mono text-xs">"disappointing"</code> (-0.8) would cancel each other out, incorrectly labeling the sentence as <strong>Neutral</strong>! That is completely unhelpful to the product engineering team.
            </p>
            <p className="text-stone-700 mt-2 leading-relaxed">
              <strong>How ABSA Solves This:</strong> Aspect-Based Sentiment Analysis decomposes the sentence into explicit target entities (aspects) and calculates sentiment for each independently:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <span className="font-bold text-emerald-950 block text-xs">Aspect 1: Camera Quality</span>
                <span className="text-xs text-emerald-800">Polarity: <strong>Positive (+0.90)</strong></span>
                <p className="text-[11px] text-stone-600 mt-1">Key sentiment driver: "excellent"</p>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <span className="font-bold text-rose-950 block text-xs">Aspect 2: Battery Life</span>
                <span className="text-xs text-rose-800">Polarity: <strong>Negative (-0.82)</strong></span>
                <p className="text-[11px] text-stone-600 mt-1">Key sentiment driver: "disappointing"</p>
              </div>
            </div>
            <p className="text-xs text-stone-600 mt-3">
              This allows the phone manufacturer to know with precision: <em>"Our camera engineering team succeeded, but our battery and power management hardware requires an immediate redesign."</em>
            </p>
          </div>
        </div>

        {/* Generated Aspect Diagram Asset */}
        <figure className="my-8">
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-xs">
            <img
              src={aspectImage}
              alt="Aspect-Based Sentiment Analysis breakdown diagram on a smartphone device"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[420px]"
            />
          </div>
          <figcaption className="text-xs text-stone-500 font-serif italic text-center mt-2.5">
            Figure 1.2: Aspect-Based Sentiment Analysis (ABSA) isolating distinct hardware features and their independent sentiment polarities.
          </figcaption>
        </figure>
      </section>

      {/* SECTION 7: APPLICATIONS */}
      <section id="applications" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>07</span>
          <span aria-hidden="true">/</span>
          <span>Industrial Deployment</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          7. Real-World Applications Across Industries
        </h2>

        <p className="mb-4">
          Sentiment analysis is not merely an academic exercise; it is one of the highest-ROI commercial applications of artificial intelligence in production today. Here is how major industries deploy it:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>1. E-Commerce & Product Intelligence</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Retailers like Amazon, Flipkart, and Target aggregate millions of customer reviews to automatically extract feature pros and cons, detect defective manufacturing batches, and rank search results by authentic buyer satisfaction.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>2. Social Media & PR Crisis Detection</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Brands listen to Twitter/X, Instagram, and Reddit streams in real time. If negative sentiment spikes by 40% in two hours after an advertisement or product launch, automated alerts warn PR teams to respond before the crisis goes viral.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>3. Customer Support & Urgent Ticket Triage</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Support desks (Zendesk, Freshdesk) use sentiment classifiers to rank inbound emails. An angry email from an enterprise client threatening cancellation is prioritized to senior account managers within minutes, reducing churn.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>4. Entertainment & Movie Box Office Analytics</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Studios analyze opening-night audience reactions on social platforms to predict weekend box office revenue, guide marketing campaigns, and tailor future scripts.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>5. Banking, FinTech & Algorithmic Trading</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Hedge funds scrape quarterly earnings call transcripts, CEO interviews, and Bloomberg news feeds. Positive or cautious phrasing is converted into quantitative signals for high-frequency trading algorithms.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>6. Healthcare & Patient Experience</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Hospitals analyze open-ended discharge survey comments to monitor nursing responsiveness, facility cleanliness, and medication clarity, identifying systemic issues that numerical star ratings miss.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>7. Market Research & Competitor Benchmarking</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Companies track competitor product launches to discover what consumers dislike about competing devices, providing direct strategic advantages for upcoming product roadmaps.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-800" />
              <span>8. Brand Health & Executive Dashboards</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              CEOs monitor Net Sentiment Scores alongside monthly revenue to track long-term brand equity and customer loyalty trends across geographic regions.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 8: ROLE OF AI AND DEEP LEARNING */}
      <section id="deep-learning" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>08</span>
          <span aria-hidden="true">/</span>
          <span>Theoretical Foundations</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          8. The Role of AI, Embeddings, and Deep Learning
        </h2>

        <p className="mb-4">
          Why did traditional NLP struggle with sentiment, and why did deep learning create such a dramatic performance breakthrough? The answer lies in how machines represent <strong>meaning</strong> and <strong>context</strong>.
        </p>

        <h3 className="font-display text-lg font-bold text-stone-900 mt-6 mb-2">
          From Discrete One-Hot Vectors to Continuous Word Embeddings
        </h3>
        <p className="mb-4 text-sm text-stone-700 leading-relaxed">
          In early NLP, words were represented as sparse, orthogonal one-hot vectors. In this scheme, the vector for <code className="font-mono text-xs">"fantastic"</code> was just as mathematically distant from <code className="font-mono text-xs">"great"</code> as it was from <code className="font-mono text-xs">"table"</code>. The computer had no sense that two words shared emotional meaning.
        </p>
        <p className="mb-4 text-sm text-stone-700 leading-relaxed">
          In 2013, Mikolov et al. at Google introduced <strong>Word2Vec</strong>, grounded in the famous linguistic distribution hypothesis by J.R. Firth: <em>"You shall know a word by the company it keeps."</em> Neural embeddings (Word2Vec, GloVe) project words into continuous vector spaces of 100 to 300 dimensions. In this semantic geometry, vector subtraction and addition reveal meaningful relationships:
        </p>

        <div className="p-3.5 bg-stone-100 rounded-xl border border-stone-200 text-center font-mono text-xs text-stone-800 my-4">
          vector("king") - vector("man") + vector("woman") ≈ vector("queen")
          <br />
          <span className="text-amber-800 font-semibold">
            vector("terrible") is clustered right next to vector("horrible") and far from vector("delightful")
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-stone-900 mt-6 mb-2">
          The Sequential Breakthrough: LSTMs vs. Standard RNNs
        </h3>
        <p className="mb-4 text-sm text-stone-700 leading-relaxed">
          While word embeddings solved word similarity, sentences are more than the sum of their words. Consider negation: <code className="font-mono text-xs">"I can't say that this camera was particularly good."</code> Here, the positive word <code className="font-mono text-xs">"good"</code> is negated by words that appeared eight tokens earlier!
        </p>
        <p className="mb-4 text-sm text-stone-700 leading-relaxed">
          Standard RNNs fail on such long sentences due to <strong>vanishing gradients</strong> (backpropagated error signals shrink exponentially to zero across timesteps). <strong>Long Short-Term Memory (LSTM)</strong> networks fixed this by introducing an explicit memory highway (the <em>cell state</em>) governed by three gates:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs text-stone-700 mb-4">
          <li><strong>Forget Gate:</strong> Decides what irrelevant information to discard from the past.</li>
          <li><strong>Input Gate:</strong> Decides what new sentiment features to store in the cell state.</li>
          <li><strong>Output Gate:</strong> Controls what parts of the cell state to emit as the hidden state.</li>
        </ul>

        <h3 className="font-display text-lg font-bold text-stone-900 mt-6 mb-2">
          The Transformer & Attention Revolution: BERT and Beyond
        </h3>
        <p className="text-sm text-stone-700 leading-relaxed mb-4">
          The ultimate breakthrough came in 2017 with the <strong>Transformer architecture</strong> (Vaswani et al.) and Google's 2018 <strong>BERT</strong> (Bidirectional Encoder Representations from Transformers).
        </p>
        <p className="text-sm text-stone-700 leading-relaxed">
          Unlike static embeddings where <code className="font-mono text-xs">"cool"</code> has only one fixed vector, BERT produces <strong>contextualized embeddings</strong>. It uses <em>Self-Attention</em> to read words bidirectionally. Thus:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4 text-xs font-mono">
          <div className="p-3 bg-stone-50 border border-stone-200 rounded-lg">
            <span className="text-stone-500 block">Context A:</span>
            <span className="text-stone-900 font-semibold">"The air conditioner keeps the room cool."</span>
            <span className="block text-[11px] text-stone-500 mt-1 font-sans">→ BERT computes thermal temperature representation.</span>
          </div>
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <span className="text-amber-700 block">Context B:</span>
            <span className="text-amber-950 font-semibold">"The new animated interface looks so cool!"</span>
            <span className="block text-[11px] text-amber-800 mt-1 font-sans">→ BERT computes aesthetic admiration representation.</span>
          </div>
        </div>
      </section>

      {/* SECTION 9: COMPARISON TABLE */}
      <section id="comparison" className="pt-8 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>09</span>
          <span aria-hidden="true">/</span>
          <span>Benchmarking</span>
        </div>
        <ComparisonTable />
      </section>

      {/* SECTION 10: ADVANTAGES */}
      <section id="advantages" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>10</span>
          <span aria-hidden="true">/</span>
          <span>Value Proposition</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          10. Key Strategic Advantages of Automated Sentiment Analysis
        </h2>

        <p className="mb-4">
          Why are organizations investing millions into automated sentiment analysis systems? The business and engineering advantages are profound:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="font-bold text-stone-900 flex items-center gap-2 mb-1">
              <TrendingUp className="w-4 h-4 text-amber-800" />
              <span>Massive Computational Scalability</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              A modern NLP pipeline can process 100,000 tweets per minute on modest cloud infrastructure. It never fatigues, takes leave, or loses attention during peak holiday shopping surges.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="font-bold text-stone-900 flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>Real-Time Latency & Rapid Alerts</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Traditional consumer focus groups require weeks to plan and recruit. Automated sentiment systems provide immediate feedback within seconds of a product announcement or firmware update.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="font-bold text-stone-900 flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>Standardized Objective Consistency</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Two human analysts frequently disagree on whether a borderline review is 3-star or 4-star depending on their mood. A calibrated algorithmic classifier applies identical mathematical decision criteria across every sample.
            </p>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <div className="font-bold text-stone-900 flex items-center gap-2 mb-1">
              <BrainCircuit className="w-4 h-4 text-amber-800" />
              <span>Uncovering Unsolicited Candid Insights</span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Customers rarely fill out formal 20-question satisfaction surveys. When they post on Twitter or Reddit, they express unfiltered thoughts, revealing usability issues that companies never thought to ask about.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 11: CHALLENGES AND LIMITATIONS */}
      <section id="challenges" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>11</span>
          <span aria-hidden="true">/</span>
          <span>Linguistic Hurdles</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          11. Core Linguistic Challenges and Limitations
        </h2>

        <p className="mb-4">
          Despite incredible advances with deep learning, human language is messy, nuanced, and culturally loaded. Here are the primary obstacles that keep NLP engineers up at night:
        </p>

        <div className="space-y-4 my-6 text-sm">
          {/* Challenge 1: Sarcasm */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 flex items-center gap-2">
              <span className="text-rose-700 font-mono text-xs">01</span>
              <span>Sarcasm and Irony</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Sarcasm occurs when the literal meaning of words is the exact opposite of the intended sentiment.
            </p>
            <div className="my-2 p-2.5 bg-rose-50 rounded border border-rose-200 text-xs font-serif italic text-rose-950">
              “Oh great, another flat tire on Monday morning! Just what I needed to make my day complete.”
            </div>
            <p className="text-xs text-stone-600">
              A naive bag-of-words or lexicon model encounters words like <code className="font-mono text-xs">"great"</code> and <code className="font-mono text-xs">"complete"</code> and flags the sentence as strongly positive! Detecting sarcasm requires models to recognize the real-world contradiction between an inherently undesirable event (flat tire) and enthusiastic adjectives.
            </p>
          </div>

          {/* Challenge 2: Negation */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 flex items-center gap-2">
              <span className="text-rose-700 font-mono text-xs">02</span>
              <span>Negation Scope & Inversion</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Negation words (<code className="font-mono text-xs">"not", "never", "hardly", "barely"</code>) flip polarity. However, calculating the exact syntactic <em>scope</em> of a negation is challenging:
            </p>
            <div className="my-2 p-2.5 bg-stone-50 rounded border border-stone-200 text-xs font-serif italic text-stone-800">
              “The movie is not great, but it is hardly terrible either.”
            </div>
            <p className="text-xs text-stone-600">
              Here, <code className="font-mono text-xs">"not great"</code> pulls toward negative, while <code className="font-mono text-xs">"hardly terrible"</code> pulls toward positive. The resulting sentiment is mildly neutral-positive.
            </p>
          </div>

          {/* Challenge 3: Slang and Colloquialisms */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 flex items-center gap-2">
              <span className="text-rose-700 font-mono text-xs">03</span>
              <span>Slang, Vernacular, and Generational Shifts</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              Internet slang frequently inverts traditional dictionary meanings:
            </p>
            <div className="my-2 p-2.5 bg-stone-50 rounded border border-stone-200 text-xs font-serif italic text-stone-800">
              “That bass drop is sick! This whole album slaps.”
            </div>
            <p className="text-xs text-stone-600">
              To a traditional medical lexicon, <code className="font-mono text-xs">"sick"</code> is illness (-0.75) and <code className="font-mono text-xs">"slap"</code> is violence (-0.60). In Gen-Z music review vernacular, both are emphatic compliments (+0.90)! Models must be continually fine-tuned on modern internet corpora.
            </p>
          </div>

          {/* Challenge 4: Context Sensitivity */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 flex items-center gap-2">
              <span className="text-rose-700 font-mono text-xs">04</span>
              <span>Domain-Specific Context Sensitivity</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              The exact same adjective carries opposite polarities depending on the domain:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2 text-xs">
              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded">
                <span className="font-semibold text-emerald-900">Movie Review:</span>
                <span className="block italic text-stone-700 mt-0.5">"An unpredictable plot with dark twists."</span>
                <span className="text-emerald-700 font-bold block mt-1">→ Strongly Positive</span>
              </div>
              <div className="p-2 bg-rose-50 border border-rose-200 rounded">
                <span className="font-semibold text-rose-900">Automotive Review:</span>
                <span className="block italic text-stone-700 mt-0.5">"Unpredictable brakes on wet highways."</span>
                <span className="text-rose-700 font-bold block mt-1">→ Strongly Negative (Life-threatening defect)</span>
              </div>
            </div>
          </div>

          {/* Challenge 5: Multilingual Code-Mixing */}
          <div className="p-4 bg-white rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 flex items-center gap-2">
              <span className="text-rose-700 font-mono text-xs">05</span>
              <span>Multilingual Text & Code-Mixing (e.g. Hinglish)</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1 leading-relaxed">
              In countries like India, users rarely write in pure standard English or formal Hindi. Instead, they write in phonetic code-mixed <em>Hinglish</em>:
            </p>
            <div className="my-2 p-2.5 bg-stone-50 rounded border border-stone-200 text-xs font-serif italic text-stone-800">
              “Camera quality ekdum bakwaas hai, but delivery time was super fast!”
            </div>
            <p className="text-xs text-stone-600">
              An English-only tokenizer treats <code className="font-mono text-xs">"ekdum"</code> and <code className="font-mono text-xs">"bakwaas"</code> (terrible) as unknown out-of-vocabulary (OOV) tokens, completely missing the negative sentiment on the camera!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 12: FUTURE SCOPE */}
      <section id="future" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>12</span>
          <span aria-hidden="true">/</span>
          <span>Next Horizons</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          12. Future Scope: LLMs, Multimodal AI, and Affective Computing
        </h2>

        <p className="mb-4">
          As students entering the field in 2026, where is Sentiment Analysis heading over the next decade? The frontier is expanding rapidly along four major vectors:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 text-sm">
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-800" />
              <span>1. Zero-Shot Reasoning with LLMs</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Large Language Models (such as Gemini and GPT-4) do not merely classify sentiment; they explain their reasoning via Chain-of-Thought (CoT) prompting. They can extract nuanced customer intent, detect implicit sarcasm, and synthesize actionable engineering tickets automatically.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-800" />
              <span>2. Multimodal Sentiment Analysis</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Human communication is multimodal. Tomorrow's sentiment systems do not analyze text in isolation. They combine <strong>spoken acoustic prosody</strong> (pitch, cadence, volume), <strong>facial micro-expressions</strong> from video, and <strong>transcribed text</strong> to detect true emotional resonance.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span>3. Fine-Grained Affective Computing</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Moving beyond crude "Positive/Negative" binaries into 27 discrete emotional dimensions (Robert Plutchik’s emotion wheel and beyond): differentiating between frustration, grief, anticipation, betrayal, awe, and nostalgia.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
            <h4 className="font-display font-bold text-stone-900 text-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-amber-800" />
              <span>4. Continuous Real-Time Edge Processing</span>
            </h4>
            <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
              Quantized micro-transformers operating locally on smartphones and smart devices, performing real-time sentiment moderation and mental wellness checks without transmitting private personal communications to remote cloud servers.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 13: ETHICS & RESPONSIBLE AI */}
      <section id="ethics" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>13</span>
          <span aria-hidden="true">/</span>
          <span>Responsible AI</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          13. Ethics, Privacy, and Responsible AI Governance
        </h2>

        <p className="mb-4">
          As AI and Data Science engineers, building systems that classify human emotional expression requires strict ethical stewardship:
        </p>

        <div className="space-y-3 my-6 text-xs sm:text-sm text-stone-700">
          <div className="p-3.5 bg-white rounded-lg border border-stone-200">
            <strong className="text-stone-900 block font-semibold mb-1">User Privacy & Informed Consent</strong>
            Scraping private WhatsApp chats, employee Slack channels, or confidential medical forums without explicit user consent violates data protection regulations (such as GDPR and India’s DPDP Act). Organizations must ensure that data is anonymized and aggregated.
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200">
            <strong className="text-stone-900 block font-semibold mb-1">Algorithmic Bias & Demographic Fairness</strong>
            Sentiment classifiers trained predominantly on Western, English-speaking corpora frequently misinterpret the communicative styles of non-native speakers, African American Vernacular English (AAVE), or regional dialects, unfairly tagging them with higher negative or aggressive valence scores.
          </div>

          <div className="p-3.5 bg-white rounded-lg border border-stone-200">
            <strong className="text-stone-900 block font-semibold mb-1">Commercial Astroturfing & Weaponization</strong>
            Unethical actors use generative AI to post thousands of fabricated positive reviews (astroturfing) to artificially inflate sentiment scores or deploy bot armies to run negative smear campaigns against rivals.
          </div>
        </div>
      </section>

      {/* SECTION 14: SUGGESTED DIAGRAMS SHOWCASE */}
      <section id="diagrams" className="pt-8 scroll-mt-20">
        <DiagramShowcase />
      </section>

      {/* SECTION 15: CONCLUSION */}
      <section id="conclusion" className="pt-12 scroll-mt-20">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>14</span>
          <span aria-hidden="true">/</span>
          <span>Synthesis</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-4">
          14. Conclusion and Summary
        </h2>

        <div className="space-y-4 text-stone-700 leading-relaxed">
          <p>
            Sentiment analysis stands as one of the most intellectually fascinating and commercially vital branches of Natural Language Processing. What began in the late 1990s as simple keyword counting and dictionary lookups has evolved into sophisticated contextual transformer networks capable of dissecting complex multi-aspect customer reviews in milliseconds.
          </p>

          <p>
            For a B.Tech Artificial Intelligence and Data Science student, mastering sentiment analysis provides foundational insights into the core challenges of machine learning: <strong>how to transform unstructured human subjective expression into clean, computable, and actionable mathematical representations.</strong>
          </p>

          <p>
            Whether deployed to protect public brand health, triage life-critical healthcare feedback, empower algorithmic trading, or design the next generation of consumer electronics, sentiment analysis gives machines the gift of understanding human emotion. As NLP systems evolve toward multimodal foundation models and affective computing, the ability to build empathetic, linguistically aware, and ethically grounded AI systems will remain one of the most rewarding pursuits in modern engineering.
          </p>
        </div>
      </section>

      {/* SECTION 16: ACADEMIC REFERENCES */}
      <section id="references" className="pt-12 pb-6 scroll-mt-20 border-t border-stone-200 mt-16">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-800 uppercase tracking-widest font-semibold">
          <span>15</span>
          <span aria-hidden="true">/</span>
          <span>Scholarly Bibliography</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-6">
          Academic References and Further Reading
        </h2>

        <div className="space-y-4">
          {ACADEMIC_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              className="p-4 rounded-xl border border-stone-200 bg-white hover:bg-stone-50/60 transition-colors text-xs"
            >
              <div className="font-mono text-stone-400 text-[11px] mb-1">
                [{ref.id}]
              </div>
              <div className="text-stone-900 font-semibold text-sm">
                {ref.authors} ({ref.year}). <em>"{ref.title}."</em>
              </div>
              <div className="text-stone-600 mt-0.5">
                {ref.source}.
              </div>
              {ref.doiOrUrl && (
                <a
                  href={ref.doiOrUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 mt-1.5 font-mono text-[11px] underline"
                >
                  <span>Access Academic Paper</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              <p className="mt-2 text-stone-500 italic bg-stone-50 p-2 rounded border border-stone-100 font-serif">
                <strong>Curricular Significance: </strong>{ref.annotation}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};
