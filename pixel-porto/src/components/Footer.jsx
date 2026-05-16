import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  return (
    <footer id="contact" className={`mt-20 border-t-4 p-8 text-center ${darkMode ? 'border-blue-400 bg-slate-800' : 'border-slate-900 bg-slate-200'}`}>
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="font-pixel text-xl md:text-2xl">SAVE GAME?</h2>

        <div className="flex justify-center gap-6">
          <a href="https://github.com/RizkyGabS" className="pixel-btn p-3 bg-transparent hover:-translate-y-2 transition-transform duration-200">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/rizkygabs/" className="pixel-btn p-3 bg-transparent hover:-translate-y-2 transition-transform duration-200">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:rizkygabriel20@students.amikom.ac.id" className="pixel-btn p-3 bg-transparent hover:-translate-y-2 transition-transform duration-200">
            <Mail size={28} />
          </a>
        </div>

        <p className="font-pixel text-xs opacity-70 pt-8">
          © {new Date().getFullYear()} RIZGABS_DEV. ALL RIGHTS RESERVED.<br/>
          INSERT COIN TO CONTINUE.
        </p>
      </div>
    </footer>
  );
}