import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaMoon,
  FaBriefcase,
  FaFileAlt,
  FaRobot,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import Typewriter from "typewriter-effect";
import Footer from "@/components/ui/Footer";

export default function Home() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const displayName = user.displayName || user.email?.split("@")[0];
        setUserName(displayName.charAt(0).toUpperCase() + displayName.slice(1));
      }
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div
      className={`relative w-screen h-screen bg-cover bg-center transition duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
      style={{
        backgroundImage: "url('/pixel.jpg')",
        backgroundBlendMode: darkMode ? "multiply" : "normal",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <div className={`text-2xl font-bold $ {darkmode ? "text-pink-400": "text-black"}`}>
          <Typewriter
            options={{
              strings: [`Welcome, ${userName} 👋`],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-white text-2xl"
        >
          <FaCog />
        </button>
      </div>

      {/* Sidebar */}
<div
  className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
    sidebarOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="p-6 space-y-6">
    <div className="flex items-center gap-3">
      <img
        src="/avatar.png"
        alt="Avatar"
        className="w-10 h-10 rounded-full"
      />
      <span className="font-semibold">{userName}</span>
    </div>

    <div className="space-y-4 text-gray-700">
      <button
        className="flex items-center gap-3 hover:text-blue-600"
        onClick={() => {
          navigate("/profile");
          setSidebarOpen(false);
        }}
      >
        <FaUserCircle /> Profile
      </button>

      <button
        className="flex items-center gap-3 hover:text-blue-600"
        onClick={() => {
          setDarkMode(!darkMode);
          setSidebarOpen(false);
        }}
      >
        <FaMoon /> {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <button
        className="flex items-center gap-3 hover:text-blue-600"
        onClick={() => {
          navigate("/products");
          setSidebarOpen(false);
        }}
      >
        <FaBriefcase /> Products
      </button>

      <button
        className="flex items-center gap-3 hover:text-blue-600"
        onClick={() => {
          navigate("/quiz");
          setSidebarOpen(false);
        }}
      >
        <FaQuestionCircle /> Quiz
      </button>

      <button
        className="flex items-center gap-3 hover:text-blue-600"
        onClick={() => {
          navigate("/blogs");
          setSidebarOpen(false);
        }}
      >
        <FaFileAlt /> Blogs
      </button>

      <button
        className="flex items-center gap-3 text-red-500 hover:text-red-300"
        onClick={() => {
          handleLogout();
          setSidebarOpen(false);
        }}
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  </div>
</div>

      {/* Main Content */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {/* Jobs */}
          <Card
            title="Jobs"
            image="/jobs.png"
            onClick={() => navigate("/jobs")}
            color="text-blue-600"
          />

          {/* Resume */}
          <Card
            title="Resume"
            image="/resume.png"
            onClick={() => navigate("/resume")}
            color="text-green-600"
          />

          {/* ATS Checker */}
          <Card
            title="ATS Checker"
            image="/ai.png"
            onClick={() => navigate("/ats-checker")}
            color="text-purple-600"
          />

          {/* Quiz */}
          <Card
            title="Quiz"
            image="/quiz.png"
            onClick={() => navigate("/quiz")}
            color="text-yellow-600"
          />
          
        </div>
      </div>
      <Footer darkMode={darkMode} userName={userName}/>
    </div>
  );
}

// Reusable Card Component
function Card({ title, image, onClick, color }) {
  return (
    <div
      className="bg-white/20 hover:scale-105 transition transform rounded-2xl p-6 text-center shadow-lg backdrop-blur-md cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="h-32 mx-auto mb-3" />
      <h3 className={`text-xl font-semibold ${color}`}>{title}</h3>
    </div>
  );
}