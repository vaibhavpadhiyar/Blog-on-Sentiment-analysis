/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ReadingProgressBar } from './components/ReadingProgressBar';
import { TableOfContents } from './components/TableOfContents';
import { BlogArticle } from './components/BlogArticle';
import { Footer } from './components/Footer';
import { Download, ChevronUp, Type } from 'lucide-react';
import { BLOG_META } from './data/blogContent';

export default function App() {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportMarkdown = () => {
    const markdownContent = `# ${BLOG_META.title}
## ${BLOG_META.subtitle}

---

### Abstract
${BLOG_META.abstract}

---

## 1. Introduction: The Data Deluge and Human Emotion
Every single day, humans generate over 500 million tweets, billions of social media comments, and millions of detailed e-commerce product reviews. Hidden inside this staggering mountain of raw text are human sentiments—joy, anger, disappointment, and trust. But how does a computer, which fundamentally operates solely on binary numbers (0s and 1s), decipher whether a customer is delighted or furious?

**Formal Academic Definition:**  
Sentiment Analysis (also universally known in computational linguistics as Opinion Mining) is the subfield of Natural Language Processing (NLP), Information Retrieval, and Artificial Intelligence that builds computational algorithms to identify, extract, quantify, and categorize subjective feelings, affective states, and opinions expressed within unstructured natural language text.

---

## 2. What is Sentiment Analysis?
At its simplest level, sentiment analysis teaches a computer to answer: "What is the writer's attitude toward the subject they are discussing?"

The Three Fundamental Categories:
1. **Positive Sentiment:** Conveys satisfaction, admiration, delight, or endorsement. Example: "The processor is lightning fast and handles 4K rendering effortlessly!"
2. **Neutral Sentiment:** Objective, factual statements that lack emotional valence. Example: "The laptop weighs 1.4 kilograms and comes with an 85W USB-C charger."
3. **Negative Sentiment:** Reflects frustration, grievance, disappointment, or defect. Example: "The hinge cracked after three days of gentle use. Terrible build quality."

---

## 3. How Does Sentiment Analysis Work? The NLP Pipeline
Canonical Flow:
**Text → Preprocessing → Feature Extraction → Model → Sentiment Output**

1. **Text Ingestion:** Gathering raw unstructured text via APIs, web scrapers, and database queues.
2. **Text Preprocessing:** Case folding (lowercasing), noise removal (stripping HTML and URLs), tokenization (splitting text into discrete word tokens), stopword filtering (removing non-sentiment words like "is", "the", while preserving negations), and lemmatization (extracting canonical root words).
3. **Feature Extraction:** Converting discrete tokens into numerical vectors via Bag-of-Words (BoW), TF-IDF (Term Frequency-Inverse Document Frequency), or dense semantic word embeddings (Word2Vec, GloVe).
4. **Model Classification:** Passing feature vectors into trained classifiers (Naive Bayes, Support Vector Machines, LSTMs, or Transformers).
5. **Sentiment Output:** Softmax probability mapping to discrete polarity classes and confidence scores.

---

## 4. Techniques Used in Sentiment Analysis
1. **Lexicon-Based Approach:** Rule-driven dictionaries (e.g. VADER, SentiWordNet) matching words to hardcoded valence scores. Requires zero training data.
2. **Machine Learning Approach:** Supervised statistical classifiers:
   - **Naive Bayes:** Probabilistic classifier applying Bayes' Theorem with conditional feature independence assumptions.
   - **Logistic Regression:** Linear log-odds modeling with sigmoid activation.
   - **Support Vector Machines (SVM):** Maximum-margin hyperplanes in high-dimensional vector spaces.
3. **Deep Learning Approach:**
   - **Recurrent Neural Networks (RNN):** Sequential timestep hidden state processing.
   - **Long Short-Term Memory (LSTM):** Eliminates vanishing gradients via input, forget, and output gates.
   - **Transformers (BERT, RoBERTa):** Multi-head bidirectional self-attention capturing complex context.

---

## 5. Real-World Processing Walkthrough: Amazon Review Trace
**Sentence:** "The phone has an amazing camera and excellent battery life."
1. Clean & Lowercase: "the phone has an amazing camera and excellent battery life"
2. Tokenize: ["the", "phone", "has", "an", "amazing", "camera", "and", "excellent", "battery", "life"]
3. Remove non-opinion stopwords ("the", "has", "an", "and")
4. Valence matching: "amazing" (+0.85), "excellent" (+0.90)
5. Final Compound Valence: +0.88 -> Classified as **Positive Sentiment** (94% confidence).

**Negative Example:** "The food was stale and service was unacceptably slow." -> Negative (-0.82)
**Neutral Example:** "The package arrived on Tuesday as scheduled." -> Neutral (0.00)

---

## 6. Types of Sentiment Analysis: Granularity Levels
1. **Document-Level Sentiment Analysis:** Assigns one global sentiment label to the entire document.
2. **Sentence-Level Sentiment Analysis:** Classifies each individual sentence after subjectivity detection.
3. **Aspect-Based Sentiment Analysis (ABSA):** Decomposes multi-aspect statements into separate components.
   *Example:* "The camera is excellent, but the battery life is disappointing."
   - Aspect 1: Camera -> Positive (+0.90)
   - Aspect 2: Battery Life -> Negative (-0.82)

---

## 7. Real-World Applications Across Industries
- **E-Commerce & Product Reviews:** Automated feature pros/cons extraction on Amazon, Flipkart.
- **Social Media Monitoring:** Real-time brand reputation tracking and PR crisis containment.
- **Customer Support Ticketing:** Intelligent priority escalation for agitated enterprise users.
- **Movie & Entertainment:** Opening-weekend audience sentiment box office prediction.
- **FinTech & Algorithmic Trading:** Financial news and earnings call transcript sentiment trading signals.
- **Healthcare Patient Experience:** Unstructured patient discharge survey analysis.
- **Market Research:** Automated competitor feature defect analysis.

---

## 8. The Role of AI and Deep Learning
- **Dense Word Embeddings (Word2Vec / GloVe):** Continuous geometric vector spaces where semantic distance matches conceptual meaning.
- **LSTM Highway States:** Solving vanishing gradients across long sequence dependencies.
- **Transformers & Self-Attention (BERT):** Dynamic polysemy disambiguation based on surrounding context.

---

## 9. Architectural Comparison Table

| Parameter | Lexicon-Based (VADER) | Classical ML (Naive Bayes / SVM) | Deep Learning (BERT / LSTMs) |
|---|---|---|---|
| Working Mechanism | Pre-compiled dictionaries | Supervised n-gram feature matrices | Self-attention neural embeddings |
| Data Requirements | Zero labeled training data | Thousands of annotated samples | Pretrained on billions of tokens |
| Context Awareness | Very weak (Bag-of-Words) | Limited to local n-grams | Deep bidirectional context |
| Sarcasm Handling | Very poor | Poor to mediocre | Moderate to high |
| Interpretability | High (auditable scores) | Moderate (feature weights) | Low to moderate (black-box) |
| Hardware Cost | Negligible (CPU) | Low to moderate | High (GPU accelerators) |

---

## 10. Key Strategic Advantages
- Massive scalability across petabytes of text.
- Real-time stream processing and alert triggering.
- Standardized objective evaluation mitigating human subjective fatigue.
- Direct discovery of unsolicited, authentic customer pain points.

---

## 11. Core Linguistic Challenges and Limitations
1. **Sarcasm & Irony:** "Oh great, another flat tire on Monday morning! Just what I needed."
2. **Negation Scope:** "The movie is not great, but it is hardly terrible either."
3. **Slang & Vernacular:** "This song slaps / is fire."
4. **Context Dependency:** "Unpredictable plot" (Positive) vs "Unpredictable brakes" (Negative).
5. **Multilingual Code-Mixing:** "Camera quality ekdum bakwaas hai, but delivery was super fast!"

---

## 12. Future Scope
- Large Language Models (LLMs) with Chain-of-Thought explainability.
- Multimodal Sentiment Analysis (combining text, audio pitch, and facial micro-expressions).
- Fine-grained affective computing across 27 discrete emotional dimensions.
- Quantized edge models for on-device privacy-preserving analysis.

---

## 13. Ethics and Responsible AI Governance
- User privacy and consent under GDPR / DPDP Act.
- Mitigating demographic and dialectical algorithmic bias.
- Combating commercial astroturfing and malicious bot campaigns.

---

## 14. Conclusion
Sentiment analysis bridges human emotional nuance with computational mathematics. For students, it represents the foundational blueprint for understanding how machines decode unstructured human language.

---

## 15. Academic References
1. Pang, B., & Lee, L. (2008). Opinion Mining and Sentiment Analysis. Foundations and Trends in Information Retrieval, 2(1–2), 1–135.
2. Liu, B. (2012). Sentiment Analysis and Opinion Mining. Morgan & Claypool Publishers.
3. Devlin, J., et al. (2018). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. NAACL-HLT 2019.
4. Hutto, C. J., & Gilbert, E. (2014). VADER: A Parsimonious Rule-based Model for Social Media Text. ICWSM-14.
5. Mikolov, T., et al. (2013). Efficient Estimation of Word Representations in Vector Space (Word2Vec).
6. Socher, R., et al. (2013). Recursive Deep Models for Semantic Compositionality Over a Sentiment Treebank. EMNLP 2013.
7. Vaswani, A., et al. (2017). Attention Is All You Need. NeurIPS 2017.
`;

    const blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sentiment-analysis-nlp-blog.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen bg-[#faf8f5] text-[#1c1917] ${fontSize === 'large' ? 'text-lg' : 'text-base'}`}>
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-8 space-y-4">
            <TableOfContents />

            {/* Quick Actions Panel */}
            <div className="bg-white/80 border border-stone-200/90 rounded-xl p-4 shadow-2xs space-y-2 text-xs">
              <div className="font-semibold text-stone-800 uppercase tracking-wider text-[11px] mb-2 font-mono">
                Blog Options
              </div>

              <button
                onClick={handleExportMarkdown}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-stone-50 hover:bg-stone-100 text-stone-700 transition-colors border border-stone-200 text-left"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-3.5 h-3.5 text-stone-500" />
                  <span>Download Markdown</span>
                </span>
                <span className="text-[10px] font-mono text-stone-400">.md</span>
              </button>

              {/* Font Size Toggle */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-stone-500">
                <span className="flex items-center gap-1.5 text-[11px]">
                  <Type className="w-3 h-3" />
                  <span>Text Size:</span>
                </span>
                <div className="flex gap-1">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      fontSize === 'normal' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200'
                    }`}
                  >
                    Default
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`px-2 py-0.5 rounded text-[11px] ${
                      fontSize === 'large' ? 'bg-stone-900 text-white' : 'hover:bg-stone-200'
                    }`}
                  >
                    Large
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Center Column: Full Academic Blog Article */}
          <main className="lg:col-span-9 bg-white/60 rounded-2xl border border-stone-200/70 p-4 sm:p-8 lg:p-10 shadow-xs">
            <BlogArticle />
          </main>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <div className="fixed bottom-6 right-6 z-30 no-print">
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="p-2.5 bg-white hover:bg-stone-100 text-stone-700 rounded-full border border-stone-300 shadow-md transition-all flex items-center justify-center"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Academic Footer */}
      <Footer />
    </div>
  );
}
