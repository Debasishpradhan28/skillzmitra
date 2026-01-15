import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const PremiumTemplatesSection = () => {
  const [templates, setTemplates] = useState([]);
  const [filteredTemplates, setFilteredTemplates] = useState([]);
  const [userData, setUserData] = useState({ name: "", email: "", phone: "" });
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Fetch templates
  useEffect(() => {
    axios.get("http://localhost:5000/api/templates")
      .then(res => {
        setTemplates(res.data);
        setFilteredTemplates(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter templates by category & search
  useEffect(() => {
    let filtered = templates;

    if (category !== "All") {
      filtered = filtered.filter(t => t.category === category);
    }
    if (search) {
      filtered = filtered.filter(t => t.name.toLowerCase().includes(search.toLowerCase()));
    }
    setFilteredTemplates(filtered);
  }, [search, category, templates]);

  const generateResume = async (templateName) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/generate-resume",
        { templateName, userData },
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${templateName}_resume.docx`);
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error("Failed to generate resume", err);
    }
  };

  const categories = ["All", "Professional", "Creative", "Modern", "Simple"];

  return (
    <div className="w-screen p-6 bg-gradient-to-r from-purple-100 via-pink-100 to-yellow-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">Choose Your Template</h1>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Search templates..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="p-3 rounded-lg border w-full sm:w-1/2"
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
          className="p-3 rounded-lg border w-full sm:w-1/3"
        >
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      {/* Templates Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredTemplates.map((t, index) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={t.thumbnail} alt={t.name} className="rounded-xl mb-4 w-full h-48 object-cover"/>
            <h2 className="text-xl font-semibold mb-2">{t.name}</h2>
            <span className="text-sm text-gray-500 mb-3">{t.category}</span>
            <button
              onClick={() => generateResume(t.name)}
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Use Template
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* User Details Form */}
      <div className="mt-10 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Your Details</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={userData.name}
            onChange={e => setUserData({ ...userData, name: e.target.value })}
            className="p-3 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={e => setUserData({ ...userData, email: e.target.value })}
            className="p-3 rounded-lg border"
          />
          <input
            type="text"
            placeholder="Phone"
            value={userData.phone}
            onChange={e => setUserData({ ...userData, phone: e.target.value })}
            className="p-3 rounded-lg border"
          />
        </form>
      </div>
    </div>
  );
};

export default PremiumTemplatesSection;