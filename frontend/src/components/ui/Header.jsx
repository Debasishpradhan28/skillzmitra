// src/components/Header.jsx
import React, { useState } from 'react';
import { Globe, Rocket } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [showLang, setShowLang] = useState(false);

  return (
    <>
      <header className="w-full flex justify-between items-center px-6 py-4 absolute z-50">
        {/* Left: Globe icon */}
        <button onClick={() => setShowLang(true)} className="text-xl text-blue-800 hover:scale-105 transition">
          <Globe className="w-7 h-7" />
        </button>

        {/* Right: Logo and Name */}
        <div className="flex items-center space-x-2">
          <Rocket className="text-purple-700 w-6 h-6" />
          <h1 className="text-2xl font-bold text-gray-900">SkillMitra</h1>
        </div>
      </header>

      {/* Fullscreen language selector */}
      {showLang && <LanguageSelector onClose={() => setShowLang(false)} />}
    </>
  );
}