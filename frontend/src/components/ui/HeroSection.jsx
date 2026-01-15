// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpg'; 

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24">
      {/* Left text area */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Empowering <span className="text-purple-600">Skills</span> for a Smarter Tomorrow.
        </h1>
        <p className="text-lg text-gray-700">
          Learn, Grow, and Succeed with SkillMitra – your ultimate skill-building companion.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow">
          Get Started
        </button>
      </motion.div>

      {/* Right image area */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 mt-10 md:mt-0"
      >
        <img src={heroImg} alt="Skill Growth" className="w-full max-w-md mx-auto" />
      </motion.div>
    </section>
  );
}