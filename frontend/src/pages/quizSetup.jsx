import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function QuizSetup() {
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const [type, setType] = useState("multiple");
  const [difficulty, setDifficulty] = useState("easy");
  const [timed, setTimed] = useState(true);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quizplay", {
      state: { category, type, difficulty, timed },
    });
  };

  const categories = [
    { id: 9, name: "General Knowledge" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Computers" },
    { id: 23, name: "History" },
    { id: 22, name: "Geography" },
    { id: 21, name: "Sports" },
    { id: 11, name: "Film & TV" },
    { id: 12, name: "Music" },
  ];

  return (
    <motion.div
      className="w-screen min-h-screen flex items-center justify-center px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: "linear-gradient(to right, #667eea, #764ba2)",
      }}
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-md text-black">
        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow">
          🛠 Quiz Setup
        </h2>

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Category</label>
          <select
            className="w-full p-3 rounded-lg bg-blue/10 border border-white/30 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Type Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Question Type</label>
          <select
            className="w-full p-3 rounded-lg bg-blue/10 border border-white/30 focus:outline-none"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>

        {/* Difficulty */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Difficulty Level</label>
          <select
            className="w-full p-3 rounded-lg bg-blue/10 border border-white/30 focus:outline-none"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Timed or Not */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Enable Time Limit?</label>
          <div className="flex items-center space-x-4">
            <button
              className={`w-1/2 py-2 rounded-lg border ${
                timed
                  ? "bg-green-500 text-white"
                  : "bg-white/10 border-white/30"
              }`}
              onClick={() => setTimed(true)}
            >
              Yes
            </button>
            <button
              className={`w-1/2 py-2 rounded-lg border ${
                !timed
                  ? "bg-red-500 text-white"
                  : "bg-white/10 border-white/30"
              }`}
              onClick={() => setTimed(false)}
            >
              No
            </button>
          </div>
        </div>

        {/* Start Button */}

        <Link to="/QuizPlay">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-white text-purple-700 font-bold rounded-xl shadow-xl transition duration-300"
          onClick={handleStart}
        >
          🚀 Start Quiz
        </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}