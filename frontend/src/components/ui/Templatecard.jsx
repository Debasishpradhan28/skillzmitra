import React from "react";

function TemplateCard({ template }) {
  return (
    <div className="template-card">
      <img src={template.preview} alt={template.title} width="150" />
      <h3>{template.title}</h3>
      <a href={template.fileUrl} download>
        <button>Use It</button>
      </a>
    </div>
  );
}

export default TemplateCard;