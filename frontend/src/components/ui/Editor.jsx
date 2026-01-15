import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Editor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePreview = () => {
    navigate("/preview", { state: { formData, templateId: id } });
  };

  return (
    <div className="editor-container">
      <div className="form-section">
        <h2>Fill Your Resume Details</h2>
        <input name="name" placeholder="Full Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="phone" placeholder="Phone" onChange={handleChange} />
        <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>
        <textarea name="experience" placeholder="Experience" onChange={handleChange}></textarea>
        <button onClick={handlePreview}>Preview Resume</button>
      </div>
    </div>
  );
};

export default Editor;