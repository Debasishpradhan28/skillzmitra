// import { Button } from "@/components/ui/button"

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-blue-50 to-white pt-24">
//       <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
//         Build Your Career Smarter
//       </h2>
//       <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
//         Free resume templates, company insights, job alerts, quizzes & more to power your college-to-career journey.
//       </p>
//       <Button className="text-lg px-8 py-6">Get Started</Button>
//     </section>
//   )
// }

// src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { FaGlobe } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import Alogo from "..assets/Alogo.png";
// import heroImage from "../assets/hero.jpg";
// import LanguageSelector from "./Language"; // assuming you created this

// const Hero = () => {
//   const navigate = useNavigate();
//   const [showLanguageSelector, setShowLanguageSelector] = useState(false);

//   return (
//     <section className="relative min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden">
//       {/* Top Left: Language */}
//       <div
//         className="absolute top-4 left-4 flex items-center gap-2 cursor-pointer"
//         onClick={() => setShowLanguageSelector(true)}
//       >
//         <FaGlobe size={28} />
//         <span className="font-semibold text-md">Language</span>
//       </div>

//       {/* Top Right: Logo */}
//       <div className="absolute top-4 right-4 flex items-center gap-2">
//         <img src={Alogo} alt="Logo" className="w-8 h-8" />
//         <h1 className="text-xl font-bold">SkillMitra</h1>
//       </div>

//       {/* Hero Content */}
//       <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 h-full pt-20 md:pt-0">
//         <motion.div
//           className="max-w-xl text-center md:text-left"
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//             Empowering Your Career, <br />
//             <span className="text-yellow-300">One Skill at a Time</span>
//           </h1>
//           <p className="mb-6 text-lg">
//             Discover tools like Resume Builder, Job Insights, ATS Checker,
//             Career Quizzes and more – all tailored to fuel your growth.
//           </p>
//           <button
//             className="bg-white text-purple-700 px-6 py-3 rounded-lg shadow-md font-semibold hover:bg-purple-100 transition"
//             onClick={() => navigate("/signup")} // Optional navigation
//           >
//             Get Started
//           </button>
//         </motion.div>

//         <motion.img
//           src={heroImage}
//           alt="hero"
//           className="w-full max-w-sm mt-10 md:mt-0 rounded-xl"
//           initial={{ x: 100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         />
//       </div>

//       {/* Language Selector Overlay */}
//       {showLanguageSelector && (
//         <LanguageSelector onClose={() => setShowLanguageSelector(false)} />
//       )}
//     </section>
//   );
// };

// export default Hero;

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