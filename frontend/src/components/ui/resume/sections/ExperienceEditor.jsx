import SectionCard from "../SectionCard";

export default function ExperienceEditor({ data, onChange }) {
  const addExperience = () => {
    onChange([
      ...data,
      { role: "", company: "", duration: "", description: "" },
    ]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateField = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    onChange(updated);
  };

  return (
    <SectionCard title="Professional Experience">
      <div className="space-y-4">
        {data.map((exp, i) => (
          <div
            key={i}
            className="border rounded-md p-4 bg-white space-y-2"
          >
            <div className="grid grid-cols-2 gap-2">
              <input
                className="input"
                placeholder="Job Title"
                value={exp.role}
                onChange={(e) =>
                  updateField(i, "role", e.target.value)
                }
              />
              <input
                className="input"
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  updateField(i, "company", e.target.value)
                }
              />
            </div>

            <input
              className="input"
              placeholder="Duration (e.g. Jan 2023 – Present)"
              value={exp.duration}
              onChange={(e) =>
                updateField(i, "duration", e.target.value)
              }
            />

            <textarea
              className="input"
              rows={3}
              placeholder="Describe your responsibilities and achievements"
              value={exp.description}
              onChange={(e) =>
                updateField(i, "description", e.target.value)
              }
            />

            {data.length > 1 && (
              <button
                onClick={() => removeExperience(i)}
                className="text-sm text-red-500"
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addExperience}
          className="w-full border border-dashed rounded py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          + Add Experience
        </button>
      </div>
    </SectionCard>
  );
}
