import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Brain } from "lucide-react";
import { Link } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      {/* Topbar */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <FaGlobe size={28} className="cursor-pointer" />
        <span className="font-semibold text-md">Language</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Brain className="w-8 h-8 text-white" />
        <h1 className="text-xl font-bold">SkillMitra</h1>
      </div>

      {/* Hero content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 h-screen">
        <motion.div
          className="max-w-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Your Career, <br />
            <span className="text-yellow-300">One Skill at a Time</span>
          </h1>
          <p className="mb-6 text-lg">
            Discover tools like Resume Builder, Job Insights, ATS Checker,
            Career Quizzes and more – all tailored to fuel your growth.
          </p>
          <Link to='/login'>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-purple-100 transition">
            Get Started
          </button>
          </Link>
        </motion.div>

        <motion.img
          src="./hero.jpg"
          alt="hero"
          className="w-screen max-w-sm mt-10 md:mt-0 rounded-xl shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Hero;