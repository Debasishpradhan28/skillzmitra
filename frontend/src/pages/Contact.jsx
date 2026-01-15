import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />
      <motion.div
        className="flex-grow p-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <form className="space-y-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded border" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded border" />
          <textarea placeholder="Message" className="w-full p-3 rounded border h-32"></textarea>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90">
            Send Message
          </button>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
}
