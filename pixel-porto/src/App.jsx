import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Sync dark mode with document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen font-vt transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-blue-400' : 'bg-amber-50 text-slate-900'}`}>

      {/* Global Scanline Overlay */}
      <div className="fixed inset-0 scanlines z-50"></div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="pt-24 pb-12 px-4 max-w-5xl mx-auto space-y-20">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}