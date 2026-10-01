import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-stone-200 bg-stone-100/70 py-10 text-stone-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="font-medium text-stone-700">
          © 2026 Vaibhav Padhiyar
        </div>
        <div className="text-stone-500 font-sans">
          Sentiment Analysis: How Machines Understand Human Emotions Through Text
        </div>
      </div>
    </footer>
  );
};
