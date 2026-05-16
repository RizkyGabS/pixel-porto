import React from 'react';
import { Award } from 'lucide-react';
import { SKILL_TREE } from '../data/mockData';

export default function Skills({ darkMode }) {
  return (
    <section id="skills" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <Award className="w-8 h-8" />
        <h2 className="font-pixel text-2xl">SKILL TREE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILL_TREE.map((skill, index) => (
          <div key={index} className={`pixel-box p-4 flex flex-col space-y-3 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
            <div className="flex justify-between items-end font-pixel text-xs md:text-sm">
              <span>{skill.name}</span>
              <span className={darkMode ? 'text-purple-400' : 'text-blue-500'}>LVL {skill.level}</span>
            </div>
            <div className="w-full h-3 border-2 border-current p-0.5">
              <div
                className={`h-full ${darkMode ? 'bg-blue-400' : 'bg-slate-900'}`}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm md:text-base font-vt opacity-75 italic text-center md:text-left">
        * Disclaimer: The level display above is for thematic purposes and does not represent actual proficiency.
      </p>
    </section>
  );
}