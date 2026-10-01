import React, { useState } from 'react';
import { ArrowRight, Code, Database, Sparkles, Filter, Cpu, CheckCircle } from 'lucide-react';

export const PipelineVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 0,
      title: '1. Text Collection',
      icon: Database,
      summary: 'Aggregating raw unstructured natural language data from disparate sources.',
      input: 'Raw user comment from Amazon / Reddit / Twitter via API or web scraper.',
      transformation: 'Streams raw textual strings into database queues.',
      output: '"The phone has an amazing camera and excellent battery life! https://amzn.to/example #review"',
      technicalNote: 'Data ingested via REST APIs, scraping pipelines (BeautifulSoup, Scrapy), or customer feedback event streams (Kafka/PubSub).'
    },
    {
      id: 1,
      title: '2. Text Preprocessing',
      icon: Filter,
      summary: 'Stripping noise, URLs, lowercasing, tokenization, stopword removal, and lemmatization.',
      input: '"The phone has an amazing camera and excellent battery life! https://amzn.to/example #review"',
      transformation: 'Strip URLs & punctuation → Lowercase → Tokenize words → Drop stopwords ("the", "has", "an", "and") → Lemmatize tokens.',
      output: '["phone", "amazing", "camera", "excellent", "battery", "life"]',
      technicalNote: 'Converts unstructured noisy character streams into clean discrete linguistic tokens using libraries such as NLTK, spaCy, or Hugging Face tokenizers.'
    },
    {
      id: 2,
      title: '3. Feature Extraction',
      icon: Code,
      summary: 'Translating discrete linguistic tokens into numerical vectors computers can compute.',
      input: 'Clean token list: ["phone", "amazing", "camera", "excellent", "battery", "life"]',
      transformation: 'Bag-of-Words / TF-IDF sparse matrix OR dense continuous Word2Vec / BERT vector embeddings.',
      output: 'Vector: [0.0, 0.82, 0.12, 0.91, 0.0, 0.74, ... 768 dimensions]',
      technicalNote: 'Computers cannot calculate text directly; vector space models (VSM) map semantic meanings into geometrical coordinate distances.'
    },
    {
      id: 3,
      title: '4. Model Classification',
      icon: Cpu,
      summary: 'Passing mathematical feature vectors through a trained statistical or neural classifier.',
      input: 'High-dimensional feature representation (768-d tensor).',
      transformation: 'Passed through trained weights of Naive Bayes, Support Vector Machine, or Transformer Multi-Head Self-Attention layers.',
      output: 'Softmax Probability Distribution: P(Pos)=0.94, P(Neu)=0.04, P(Neg)=0.02',
      technicalNote: 'The classifier computes decision boundary margins or neural activation logits to maximize class separation.'
    },
    {
      id: 4,
      title: '5. Sentiment Output',
      icon: CheckCircle,
      summary: 'Decoding class probability into discrete sentiment classes, polarity metrics, and aspect insights.',
      input: 'Argmax(P) → Class index 0 with confidence score 94%.',
      transformation: 'Generates structured JSON schema for downstream business dashboards or automated alerts.',
      output: '{ "polarity": "Positive", "compound_valence": +0.88, "aspects": { "camera": "Positive", "battery": "Positive" } }',
      technicalNote: 'Downstream consumers ingest the structured payload for automated executive reporting, customer support ticketing, or algorithmic alerts.'
    }
  ];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 lg:p-8 my-8">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
        <Sparkles className="w-4 h-4 text-amber-700" />
        <span>Interactive Architecture Explorer</span>
      </div>
      <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900">
        The 5-Stage Sentiment Analysis Pipeline
      </h3>
      <p className="text-sm text-stone-600 mt-1">
        Click through each processing stage below to inspect the transformation from raw human opinion to machine-classified sentiment.
      </p>

      {/* Visual Pipeline Flow Header */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          const isCurrent = activeStep === idx;
          return (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all ${
                isCurrent
                  ? 'bg-amber-900 text-white border-amber-900 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1.5 ${isCurrent ? 'text-amber-200' : 'text-stone-500'}`} />
              <span className="text-xs font-semibold leading-tight line-clamp-1">{s.title.split('. ')[1]}</span>
              <span className={`text-[10px] mt-0.5 ${isCurrent ? 'text-amber-200' : 'text-stone-400'}`}>
                Stage 0{idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detail Panel */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-stone-100 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 font-mono text-xs flex items-center justify-center font-bold">
              {activeStep + 1}
            </span>
            <h4 className="font-display text-lg font-bold text-stone-900">
              {steps[activeStep].title}
            </h4>
          </div>
          <span className="text-xs text-stone-500 font-mono">
            Step {activeStep + 1} of 5
          </span>
        </div>

        <p className="text-sm text-stone-700 mt-3 font-medium">
          {steps[activeStep].summary}
        </p>

        {/* Input → Transformation → Output Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="p-3.5 bg-stone-50 rounded-lg border border-stone-200/80">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Input Data State:
            </div>
            <div className="font-mono text-xs text-stone-800 break-words bg-white p-2.5 rounded border border-stone-200">
              {steps[activeStep].input}
            </div>
          </div>

          <div className="p-3.5 bg-amber-50/50 rounded-lg border border-amber-200/70">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-900 mb-1">
              Output Transformation:
            </div>
            <div className="font-mono text-xs text-amber-950 break-words bg-white p-2.5 rounded border border-amber-200">
              {steps[activeStep].output}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-600">
          <Code className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
          <div>
            <strong className="text-stone-800">Engineering & Practical Note: </strong>
            {steps[activeStep].technicalNote}
          </div>
        </div>
      </div>
    </div>
  );
};
