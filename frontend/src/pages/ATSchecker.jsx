import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ResumeUploadCard from "../components/ui/ats/ResumeUploadCard";
import JobDescriptionCard from "../components/ui/ats/JobDescriptionCard";
import ATSInfoPanel from "../components/ui/ats/ATSInfoPanel";

export default function ATSChecker() {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const analyzeATS = async () => {
    if (!file) return alert("Upload resume first");

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", jd);

    setLoading(true);

    const res = await fetch("http://localhost:5000/api/ats/analyze", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setLoading(false);

    navigate("/ats-result", { state: data });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-7 space-y-6">
          <ResumeUploadCard file={file} setFile={setFile} />
          <JobDescriptionCard jd={jd} setJd={setJd} />
        </div>

        <div className="lg:col-span-5">
          <ATSInfoPanel />
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4">
        <button
          onClick={analyzeATS}
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold disabled:opacity-60"
        >
          {loading ? "Analyzing resume..." : "Analyze ATS Score"}
        </button>
      </div>
    </div>
  );
}
