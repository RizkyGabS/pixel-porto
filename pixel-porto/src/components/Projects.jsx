import React from 'react';
import { Briefcase, Code2, ChevronRight } from 'lucide-react';
import { QUEST_LOG } from '../data/mockData';

export default function Projects({ darkMode }) {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <Briefcase className="w-8 h-8" />
        <h2 className="font-pixel text-2xl">QUEST LOG</h2>
      </div>

      <div className="space-y-8">
        {QUEST_LOG.map((quest) => (
          <div key={quest.id} className={`pixel-box p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 ${darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-white hover:bg-slate-50'}`}>

            <div className={`w-full md:w-48 h-32 md:h-auto border-4 border-current flex items-center justify-center shrink-0 overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-amber-100'}`}>
              {quest.image ? (
                <img
                  src={quest.image}
                  alt={quest.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <Code2 size={40} className="opacity-50" />
              )}
            </div>

            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h3 className="font-pixel text-lg md:text-xl">{quest.title}</h3>
                  <span className={`px-2 py-1 border-2 border-current text-xs font-pixel w-fit ${darkMode ? 'text-yellow-400' : 'text-red-500'}`}>
                    {quest.type}
                  </span>
                </div>
                <p className="text-xl">{quest.desc}</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-wrap gap-2">
                  {quest.tech.map((t, i) => (
                    <span key={i} className="text-sm border-b-2 border-dotted border-current pb-1">
                      #{t}
                    </span>
                  ))}
                </div>
                <a href={quest.link} className="pixel-btn px-4 py-2 font-pixel text-xs flex items-center gap-2 whitespace-nowrap bg-transparent">
                  EQUIP <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
