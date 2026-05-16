import React, { useState, useEffect } from 'react';

export default function Hero({ darkMode }) {
  const [typedText, setTypedText] = useState("");
  const fullText = "PRESS START TO CONTINUE...";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center space-y-8">
      <div className="relative inline-block">
        <h1 className="font-pixel text-4xl md:text-6xl leading-tight">
          PLAYER 1 <br/> <span className={darkMode ? 'text-purple-400' : 'text-blue-600'}>READY.</span>
        </h1>
      </div>

      <p className="font-pixel text-sm md:text-base h-6">
        {typedText}
        <span className="animate-ping">_</span>
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a href="#projects" className={`pixel-btn font-pixel text-xs md:text-sm py-3 px-6 ${darkMode ? 'bg-blue-400 text-slate-900' : 'bg-slate-900 text-white'}`}>
          START GAME
        </a>
        <a href="#about" className="pixel-btn font-pixel text-xs md:text-sm py-3 px-6 bg-transparent">
          VIEW PROFILE
        </a>
      </div>
    </section>
  );
}