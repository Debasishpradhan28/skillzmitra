// import React from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";

// export default function Features() {
//   return (
//     <div className="w-screen min-h-screen flex flex-col bg-black">
//       <Navbar />
//       <motion.div
//         className="flex-grow p-10 max-w-5xl mx-auto"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-4xl font-bold mb-8 text-center">Our Features</h1>
//         <ul className="space-y-4 text-lg">
//           <li>✅ Resume Builder - Create ATS-friendly resumes</li>
//           <li>✅ Daily Quizzes - Sharpen your skills</li>
//           <li>✅ Personalized Roadmaps</li>
//           <li>✅ Job Alerts and Notifications</li>
//         </ul>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// }
import { motion } from "framer-motion";
import { MdOutlineWork, MdQuiz } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineFileSearch } from "react-icons/ai";

const features = [
  {
    title: "Resume Builder",
    icon: <FaRegFileAlt size={32} />,
    desc: "Easily create ATS-friendly resumes with modern templates.",
    delay: 0.2,
  },
  {
    title: "ATS Checker",
    icon: <AiOutlineFileSearch size={32} />,
    desc: "Ensure your resume passes automated screening tools.",
    delay: 0.4,
  },
  {
    title: "Job Finder",
    icon: <MdOutlineWork size={32} />,
    desc: "Get curated job openings matching your skills and location.",
    delay: 0.6,
  },
  {
    title: "Career Quiz",
    icon: <MdQuiz size={32} />,
    desc: "Discover your ideal career path with personalized questions.",
    delay: 0.8,
  },
];

const Features = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        Explore SkillMitra Tools
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: feature.delay }}
            viewport={{ once: true }}
          >
            <div className="text-purple-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;