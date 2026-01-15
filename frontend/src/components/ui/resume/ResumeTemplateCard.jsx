import { resumeTemplateMap } from "../../../resumeTemplates";
import { sampleResumeData } from "../../../data/sampleResumeData";

export default function ResumeTemplateCard({ template, onUse }) {
  const TemplateComponent =
    resumeTemplateMap[template.templateKey];

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">
      <div className="overflow-hidden border rounded-lg h-64 mb-4">
        <div className="scale-[0.35] origin-top-left pointer-events-none">
          {TemplateComponent ? (
            <TemplateComponent data={sampleResumeData} />
          ) : (
            <div className="text-center text-gray-400 p-4">
              Template not found
            </div>
          )}
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-3">
        {template.name}
      </h3>

      <button
        onClick={() => onUse(template)}
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        Use Template
      </button>
    </div>
  );
}
