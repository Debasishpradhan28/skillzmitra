import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <motion.div
        className="flex-grow p-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">About SkillMitra</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          SkillMitra is a student-focused career platform that provides resume building, skill tracking, job notifications, and more. Our mission is to empower students with tools that simplify their job preparation journey.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}
