import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TemplateList.css";
import Editor from "./Editor";

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // For now using mock API, later can replace with real resume API
    axios.get("https://mocki.io/v1/6cfe5173-2212-4b19-b75a-ef36d9caa99c") 
      .then(res => setTemplates(res.data))
      .catch(() => {
        setTemplates([
          { id: 1, name: "Modern", image: "/templates/modern.png" },
          { id: 2, name: "Classic", image: "/templates/classic.png" },
          { id: 3, name: "Minimal", image: "/templates/minimal.png" }
        ]);
      });
  }, []);

  return (
    <div className="templates-container">
      <h2>Choose a Resume Template</h2>
      <div className="templates-grid">
        {templates.map(t => (
          <div key={t.id} className="template-card">
            <img src={t.image} alt={t.name} />
            <h3>{t.name}</h3>
            <button onClick={() => navigate(`/editor/${t.id}`)}>Use Template</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;