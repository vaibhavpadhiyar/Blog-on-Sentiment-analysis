import React, { useEffect, useState } from 'react';
import { SECTIONS } from '../data/blogContent';
import { ListOrdered } from 'lucide-react';

export const TableOfContents: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const section = document.getElementById(SECTIONS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Table of Contents"
      className="bg-white/70 backdrop-blur-sm border border-stone-200/80 rounded-xl p-5 shadow-xs"
    >
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-stone-200">
        <ListOrdered className="w-4 h-4 text-amber-800" />
        <span className="font-display font-medium text-stone-900 text-sm">Table of Contents</span>
      </div>

      <ol className="space-y-1 text-xs">
        {SECTIONS.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <li key={sec.id}>
              <a
                href={`#${sec.id}`}
                className={`group flex items-start gap-2 py-1.5 px-2 rounded-md transition-all ${
                  isActive
                    ? 'text-amber-900 font-semibold bg-amber-50/80 pl-2.5 border-l-2 border-amber-800'
                    : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
                }`}
              >
                <span
                  className={`font-mono text-[11px] tabular-nums shrink-0 mt-0.5 ${
                    isActive ? 'text-amber-800' : 'text-stone-400 group-hover:text-stone-600'
                  }`}
                >
                  {sec.number}.
                </span>
                <span className="leading-snug">{sec.shortTitle}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
