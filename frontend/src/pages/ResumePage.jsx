import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchResumeTemplates } from "../services/resumeService";
import ResumeTemplateCard from "../components/ui/resume/ResumeTemplateCard";

export default function ResumePage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchResumeTemplates().then((data) => {
      setTemplates(data);
      setLoading(false);
    });
  }, []);

  const handleUseTemplate = (template) => {
    navigate("/maker", { state: { template } });
  };

  if (loading) {
    return (
      <div className="min-h-screen w-screen flex justify-center bg-gray-50 px-4 py-12">
        Loading templates...
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen flex justify-center bg-gray-50 px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">
        Choose Your Resume Template
      </h1>

      {templates.length === 0 ? (
        <p className="text-center text-gray-600">
          No templates found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templates.map((template) => (
            <ResumeTemplateCard
              key={template.id}
              template={template}
              onUse={handleUseTemplate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
