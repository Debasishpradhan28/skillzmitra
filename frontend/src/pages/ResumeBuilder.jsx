import { useLocation } from "react-router-dom";
import { useState } from "react";
import html2pdf from "html2pdf.js";

import { resumeTemplateMap } from "../resumeTemplates";
import { templateConfig } from "../resumeTemplates/templateConfig";
import { sampleResumeData } from "../data/sampleResumeData";

import TemplateAwareForm from "../components/ui/resume/TemplateAwareForm";

export default function ResumeBuilder() {
  const location = useLocation();

  const [templateKey, setTemplateKey] = useState(
    location.state?.templateKey || "modern_professional"
  );

  const rules = templateConfig[templateKey];
  const Template = resumeTemplateMap[templateKey];

  const [resumeData, setResumeData] = useState(sampleResumeData);
  const [sectionOrder, setSectionOrder] = useState(
  templateConfig[templateKey].sections
);
{/* <SectionOrderControl
  sections={sectionOrder}
  onChange={setSectionOrder}
/> */}


  const exportPDF = () => {
    html2pdf()
      .from(document.getElementById("resume-preview"))
      .save("resume.pdf");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* LEFT PANEL */}
      <aside className="w-[420px] bg-white border-r p-6 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-6">
          Resume Builder
        </h1>

        {/* Template Switch */}
        <label className="block text-sm font-medium mb-1">
          Template
        </label>
        <select
          value={templateKey}
          onChange={(e) => setTemplateKey(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-6"
        >
          {Object.entries(templateConfig).map(([k, v]) => (
            <option key={k} value={k}>
              {v.name}
            </option>
          ))}
        </select>

        <button
          onClick={exportPDF}
          className="w-full bg-indigo-600 text-white py-2 rounded mb-6"
        >
          Download PDF
        </button>

        {/* FORM */}
        <TemplateAwareForm
          data={resumeData}
          onChange={setResumeData}
          sections={rules.sections}
        />
      </aside>

      {/* RIGHT PREVIEW */}
      <main className="flex-1 p-10 overflow-auto flex justify-center">
        <div
          id="resume-preview"
          className="bg-white shadow-xl"
        >
          <Template data={resumeData} />
        </div>
      </main>
    </div>
  );
}
