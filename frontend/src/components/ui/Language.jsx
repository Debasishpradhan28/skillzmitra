import React from "react";
import { motion } from "framer-motion";

const languages = [
  "English", "Hindi", "Bengali", "Tamil", "Telugu", "Gujarati", "Kannada",
  "Punjabi", "Marathi", "Malayalam", "Urdu", "Odia", "Assamese"
];

const LanguageSelector = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white text-black rounded-xl p-8 max-w-3xl w-full shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-center">Select Your Language</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <button
              key={index}
              onClick={() => onSelect(lang)}
              className="py-3 px-4 bg-purple-100 hover:bg-purple-200 rounded-md text-center font-semibold transition"
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          onClick={onClose}
          className="mt-6 block mx-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSelector;