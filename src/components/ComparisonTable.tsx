import React from 'react';
import { COMPARISON_TABLE_DATA } from '../data/blogContent';
import { Table } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  return (
    <div className="my-10 bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs">
      <div className="p-5 sm:p-6 bg-stone-50 border-b border-stone-200">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
          <Table className="w-4 h-4 text-amber-700" />
          <span>Academic Evaluation Framework</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mt-1">
          Comparative Analysis: Lexicon vs ML vs Deep Learning
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
          Systematic engineering trade-offs across data dependencies, context resolution, explainability, and computational complexity.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="border-b border-stone-200 bg-stone-100/70 font-semibold text-stone-800">
              <th className="py-3.5 px-4 sm:px-6 w-1/4">Evaluation Criterion</th>
              <th className="py-3.5 px-4 sm:px-6 w-1/4">Lexicon-Based (VADER / Dictionaries)</th>
              <th className="py-3.5 px-4 sm:px-6 w-1/4">Classical ML (Naive Bayes / SVM)</th>
              <th className="py-3.5 px-4 sm:px-6 w-1/4">Deep Learning (LSTMs / Transformers)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200">
            {COMPARISON_TABLE_DATA.map((row, idx) => (
              <tr
                key={row.parameter}
                className={idx % 2 === 0 ? 'bg-white hover:bg-stone-50/50' : 'bg-stone-50/30 hover:bg-stone-50'}
              >
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-stone-900 align-top">
                  {row.parameter}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-700 leading-relaxed align-top">
                  {row.lexiconBased}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-700 leading-relaxed align-top">
                  {row.machineLearning}
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-stone-700 leading-relaxed align-top">
                  {row.deepLearning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3.5 bg-stone-50 border-t border-stone-200 text-[11px] text-stone-500 font-mono">
        Table 1.1: Technical comparison matrix for NLP Sentiment Architectures.
      </div>
    </div>
  );
};
