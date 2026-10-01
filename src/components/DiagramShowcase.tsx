import React, { useState } from 'react';
import { VISUAL_DIAGRAMS } from '../data/blogContent';
import { Layers, Eye, Check } from 'lucide-react';

export const DiagramShowcase: React.FC = () => {
  const [selectedDiagram, setSelectedDiagram] = useState<number>(1);

  const active = VISUAL_DIAGRAMS.find((d) => d.id === selectedDiagram) || VISUAL_DIAGRAMS[0];

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 lg:p-8 my-10 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-3">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
            <Layers className="w-4 h-4 text-amber-700" />
            <span>Academic Visual Catalogue</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
            Illustrated Conceptual Diagrams & Schematics
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
            Architectural diagrams recommended for B.Tech thesis submissions, seminar presentations, and coursework reports.
          </p>
        </div>
        <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-md self-start sm:self-auto">
          7 Academic Figures
        </span>
      </div>

      {/* Diagram Selector Strip */}
      <div className="flex gap-2 overflow-x-auto py-4 scrollbar-thin">
        {VISUAL_DIAGRAMS.map((diag) => {
          const isSelected = selectedDiagram === diag.id;
          return (
            <button
              key={diag.id}
              onClick={() => setSelectedDiagram(diag.id)}
              className={`shrink-0 text-left px-3.5 py-2 rounded-xl border text-xs transition-all ${
                isSelected
                  ? 'bg-stone-900 text-white border-stone-900 shadow-sm font-medium'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
              }`}
            >
              <div className="font-mono text-[10px] opacity-75">Figure 0{diag.id}</div>
              <div className="font-semibold line-clamp-1">{diag.title.split(': ')[1] || diag.title}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Diagram Display Canvas */}
      <div className="mt-4 p-5 sm:p-6 bg-stone-50/80 rounded-xl border border-stone-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-stone-200">
          <h4 className="font-display text-lg font-bold text-stone-900">
            {active.title}
          </h4>
          <span className="text-xs font-mono text-stone-500">
            Specification & Blueprint Reference
          </span>
        </div>

        <p className="text-sm text-stone-700 mt-3 leading-relaxed">
          {active.description}
        </p>

        {/* Visual Schematics Canvas */}
        <div className="my-5 p-5 bg-white rounded-xl border border-stone-200 min-h-[180px] flex flex-col justify-center">
          {active.id === 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
              <div className="p-3 bg-stone-100 rounded-lg border border-stone-300 w-full sm:w-auto">
                <div className="text-[10px] text-stone-500 uppercase font-mono">Stage 1</div>
                <div className="text-xs font-bold text-stone-800">Raw Text</div>
                <div className="text-[11px] text-stone-500 font-mono">"Amazing camera!"</div>
              </div>
              <span className="text-stone-400 font-mono text-xs">→</span>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 w-full sm:w-auto">
                <div className="text-[10px] text-amber-700 uppercase font-mono">Stage 2</div>
                <div className="text-xs font-bold text-amber-900">Preprocessing</div>
                <div className="text-[11px] text-stone-600 font-mono">['amazing', 'camera']</div>
              </div>
              <span className="text-stone-400 font-mono text-xs">→</span>
              <div className="p-3 bg-sky-50 rounded-lg border border-sky-200 w-full sm:w-auto">
                <div className="text-[10px] text-sky-700 uppercase font-mono">Stage 3</div>
                <div className="text-xs font-bold text-sky-900">Vector Embeddings</div>
                <div className="text-[11px] text-stone-600 font-mono">[0.82, 0.14, ...]</div>
              </div>
              <span className="text-stone-400 font-mono text-xs">→</span>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200 w-full sm:w-auto">
                <div className="text-[10px] text-purple-700 uppercase font-mono">Stage 4</div>
                <div className="text-xs font-bold text-purple-900">Classifier</div>
                <div className="text-[11px] text-stone-600 font-mono">SVM / BERT</div>
              </div>
              <span className="text-stone-400 font-mono text-xs">→</span>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 w-full sm:w-auto">
                <div className="text-[10px] text-emerald-700 uppercase font-mono">Stage 5</div>
                <div className="text-xs font-bold text-emerald-900">Output</div>
                <div className="text-[11px] text-emerald-700 font-bold">Positive (+0.88)</div>
              </div>
            </div>
          )}

          {active.id === 2 && (
            <div className="space-y-4">
              <div className="relative h-6 bg-gradient-to-r from-rose-500 via-stone-300 to-emerald-500 rounded-full flex items-center justify-between px-3 text-white text-xs font-bold shadow-inner">
                <span>Negative (-1.0)</span>
                <span className="text-stone-800">Neutral (0.0)</span>
                <span>Positive (+1.0)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-rose-900">
                  <div className="font-bold">Negative Class</div>
                  <div className="text-[11px] mt-0.5 text-rose-700">"The battery drains in 2 hours and overheats."</div>
                </div>
                <div className="p-2.5 rounded bg-stone-100 border border-stone-200 text-stone-800">
                  <div className="font-bold">Neutral Class</div>
                  <div className="text-[11px] mt-0.5 text-stone-600">"The device measures 6.1 inches and weighs 170g."</div>
                </div>
                <div className="p-2.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="font-bold">Positive Class</div>
                  <div className="text-[11px] mt-0.5 text-emerald-700">"The display is breathtaking and vibrant!"</div>
                </div>
              </div>
            </div>
          )}

          {active.id === 3 && (
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold block text-stone-800">1. Case Folding</span>
                <span className="font-mono text-[11px] text-stone-500 mt-1 block">"GREAT" → "great"</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold block text-stone-800">2. Noise Strip</span>
                <span className="font-mono text-[11px] text-stone-500 mt-1 block">Remove URLs, HTML</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold block text-stone-800">3. Tokenize</span>
                <span className="font-mono text-[11px] text-stone-500 mt-1 block">Split to array of words</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold block text-stone-800">4. Stopwords</span>
                <span className="font-mono text-[11px] text-stone-500 mt-1 block">Filter "is", "the", "a"</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold block text-stone-800">5. Lemmatize</span>
                <span className="font-mono text-[11px] text-stone-500 mt-1 block">"loved" → "love"</span>
              </div>
            </div>
          )}

          {active.id === 4 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-amber-50/60 border border-amber-200 rounded-lg">
                <span className="font-bold text-amber-950 block">Lexicon-Based</span>
                <p className="text-[11px] text-stone-600 mt-1">Rule dictionaries (VADER). Fast, no training, zero context.</p>
              </div>
              <div className="p-3 bg-sky-50/60 border border-sky-200 rounded-lg">
                <span className="font-bold text-sky-950 block">Classical ML</span>
                <p className="text-[11px] text-stone-600 mt-1">Naive Bayes, SVM, TF-IDF. Interpretable, requires labeled data.</p>
              </div>
              <div className="p-3 bg-purple-50/60 border border-purple-200 rounded-lg">
                <span className="font-bold text-purple-950 block">Deep Transformers</span>
                <p className="text-[11px] text-stone-600 mt-1">BERT, RoBERTa. Self-attention, deep context, high GPU cost.</p>
              </div>
            </div>
          )}

          {active.id === 5 && (
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 text-xs">
              <div className="font-mono text-stone-800 font-semibold mb-2">
                "The camera is excellent, but the battery life is disappointing."
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded">
                  <div className="font-bold text-emerald-900">Aspect 1: Camera</div>
                  <div className="text-[11px] text-emerald-800">Sentiment: Positive (+0.90) via keyword "excellent"</div>
                </div>
                <div className="p-2.5 bg-rose-50 border border-rose-200 rounded">
                  <div className="font-bold text-rose-900">Aspect 2: Battery Life</div>
                  <div className="text-[11px] text-rose-800">Sentiment: Negative (-0.82) via keyword "disappointing"</div>
                </div>
              </div>
            </div>
          )}

          {active.id === 6 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold text-stone-900 block">E-Commerce</span>
                <span className="text-[11px] text-stone-600">Product review ranking</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold text-stone-900 block">FinTech</span>
                <span className="text-[11px] text-stone-600">Earnings call & market mood</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold text-stone-900 block">Healthcare</span>
                <span className="text-[11px] text-stone-600">Patient hospital feedback</span>
              </div>
              <div className="p-2.5 bg-stone-50 border border-stone-200 rounded">
                <span className="font-bold text-stone-900 block">Entertainment</span>
                <span className="text-[11px] text-stone-600">Box office review tracking</span>
              </div>
            </div>
          )}

          {active.id === 7 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 bg-rose-50 border border-rose-200 rounded">
                <span className="font-bold text-rose-950 block">Sarcasm & Irony</span>
                <span className="text-[11px] text-rose-800">"Oh great, another flat tire!"</span>
              </div>
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded">
                <span className="font-bold text-amber-950 block">Negation Scope</span>
                <span className="text-[11px] text-amber-800">"Not bad" vs "Hardly good"</span>
              </div>
              <div className="p-2.5 bg-purple-50 border border-purple-200 rounded">
                <span className="font-bold text-purple-950 block">Polysemy & Domain</span>
                <span className="text-[11px] text-purple-800">"Unpredictable plot" vs "Unpredictable brakes"</span>
              </div>
            </div>
          )}
        </div>

        {/* Key Components Checklist */}
        <div className="pt-3 border-t border-stone-200">
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 block mb-2">
            Essential Structural Elements Included:
          </span>
          <div className="flex flex-wrap gap-2">
            {active.keyComponents.map((comp) => (
              <span
                key={comp}
                className="inline-flex items-center gap-1.5 text-xs text-stone-700 bg-white px-2.5 py-1 rounded-md border border-stone-200"
              >
                <Check className="w-3 h-3 text-amber-800" />
                <span>{comp}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
