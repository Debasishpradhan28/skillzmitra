import SectionCard from "./SectionCard";
import ExperienceEditor from "./sections/ExperienceEditor";


export default function TemplateAwareForm({ data, onChange, sections }) {
  const update = (key, value) =>
    onChange({ ...data, [key]: value });

  return (
    <div className="space-y-6">

      {sections.includes("summary") && (
        <SectionCard title="Professional Summary">
          <textarea
            className="w-full border rounded p-2 text-sm"
            rows={4}
            value={data.summary}
            onChange={(e) => update("summary", e.target.value)}
          />
        </SectionCard>
      )}

      {sections.includes("experience") && (
  <ExperienceEditor
    data={data.experience}
    onChange={(exp) =>
      onChange({ ...data, experience: exp })
    }
  />
)}


      {sections.includes("education") && (
        <SectionCard title="Education">
          <input
            className="w-full border rounded p-2 text-sm"
            placeholder="Degree, Institute, Year"
            value={
              data.education[0]
                ? `${data.education[0].degree}, ${data.education[0].institute}, ${data.education[0].year}`
                : ""
            }
            onChange={(e) =>
              update("education", [
                {
                  degree: e.target.value,
                  institute: "",
                  year: "",
                },
              ])
            }
          />
        </SectionCard>
      )}
    </div>
  );
}
