import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <motion.div
      className="w-screen min-h-screen flex flex-col items-center justify-center text-white px-6 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage:
          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">🧠 SkillSync Quiz</h1>
      <p className="text-lg font-medium mb-8 max-w-xl text-center drop-shadow-md">
        Challenge yourself with fun and engaging quizzes to boost your skills!
      </p>
      <Link to="/quizSetup">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg"
      >
        Start Quiz
      </motion.button>
      </Link>
      
    </motion.div>
  );
}
