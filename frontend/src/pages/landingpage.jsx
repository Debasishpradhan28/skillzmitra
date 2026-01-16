import React from "react"; 
import { Button } from "../components/ui/button";
import { Sparkles, Rocket, Bell, Compass, Brain } from "lucide-react";
import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Footer from "../components/ui/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/ui/whyus";

export default function LandingPage() {
   const [languageSelectorOpen, setLanguageSelectorOpen] = useState(false);

return ( <div className="relative overflow-x-hidden"> {languageSelectorOpen && <LanguageOverlay onClose={() => setLanguageSelectorOpen(false)} />}

{/* Top Logo Section */}
  {/* <div className="absolute top-4 left-4 z-20 cursor-pointer" onClick={() => setLanguageSelectorOpen(true)}>
    <img src="/earth-icon.png" alt="Globe Icon" className="w-10 h-10" />
  </div>
  <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
    <img src="/logo.png" alt="SkillMitra Logo" className="w-10 h-10" />
    <span className="text-xl font-semibold text-white">SkillMitra</span>
  </div> */}

  {/* Sections */}
  <Hero />
  <Features />
  <WhyChooseUs />
  <Footer />
</div>

); }