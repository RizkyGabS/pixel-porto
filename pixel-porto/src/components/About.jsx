import React from 'react';
import { User, Terminal } from 'lucide-react';
import { PLAYER_DATA } from '../data/mockData';

export default function About({ darkMode }) {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <User className="w-8 h-8" />
        <h2 className="font-pixel text-2xl">CHARACTER STATS</h2>
      </div>

      <div className={`pixel-box p-6 md:p-8 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="col-span-1 flex flex-col items-center space-y-4">
            <div className={`w-32 h-32 pixel-box flex items-center justify-center overflow-hidden ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
              {PLAYER_DATA.image ? (
                <img
                  src={PLAYER_DATA.image}
                  alt={PLAYER_DATA.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <Terminal size={48} className={darkMode ? 'text-blue-400' : 'text-slate-900'} />
              )}
            </div>
            <div className="text-center font-pixel text-sm space-y-2">
              <div>LVL: {PLAYER_DATA.level}</div>
              <div className={darkMode ? 'text-purple-400' : 'text-blue-600'}>{PLAYER_DATA.class}</div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="space-y-4 font-pixel text-sm md:text-base">
              <div className="flex items-center gap-2 md:gap-4">
                <span className="w-8 shrink-0 text-red-500">HP</span>
                <div className="flex-1 h-4 bg-slate-700 border-2 border-current p-0.5">
                  <div className="h-full bg-red-500 w-full animate-pulse"></div>
                </div>
                <span className="w-24 shrink-0 text-right">{PLAYER_DATA.hp}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-4">
                <span className="w-8 shrink-0 text-blue-500">MP</span>
                <div className="flex-1 h-4 bg-slate-700 border-2 border-current p-0.5">
                  <div className="h-full bg-blue-500 w-[95%]"></div>
                </div>
                <span className="w-24 shrink-0 text-right">{PLAYER_DATA.mp}</span>
              </div>
            </div>

            <div className="mt-6 border-t-4 border-dashed border-current pt-6">
              <p className="text-xl md:text-2xl leading-relaxed">
                "{PLAYER_DATA.bio}"
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}