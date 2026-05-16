import React from 'react';
import { Gamepad2, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`fixed top-0 w-full z-40 border-b-4 ${darkMode ? 'border-blue-400 bg-slate-900/90' : 'border-slate-900 bg-amber-50/90'} backdrop-blur-sm p-4`}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 animate-pulse" />
          <span className="font-pixel text-sm md:text-base hidden sm:inline">RIZGABS_DEV</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <a href="#about" className="hover:underline decoration-4 underline-offset-4 hidden md:block">Character</a>
          <a href="#skills" className="hover:underline decoration-4 underline-offset-4 hidden md:block">Skills</a>
          <a href="#projects" className="hover:underline decoration-4 underline-offset-4 hidden md:block">Quests</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="pixel-btn p-2 bg-transparent flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}