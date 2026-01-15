export default function ResumeForm({ data, onChange }) {
  const updateField = (key, value) =>
    onChange({ ...data, [key]: value });

  const updateArray = (key, index, field, value) => {
    const updated = [...data[key]];
    updated[index][field] = value;
    onChange({ ...data, [key]: updated });
  };

  const addItem = (key, item) =>
    onChange({ ...data, [key]: [...data[key], item] });

  const removeItem = (key, index) => {
    const updated = [...data[key]];
    updated.splice(index, 1);
    onChange({ ...data, [key]: updated });
  };

  return (
    <div className="space-y-6">
      {/* BASIC INFO */}
      <input
        className="input"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => updateField("name", e.target.value)}
      />

      <input
        className="input"
        placeholder="Job Title"
        value={data.title}
        onChange={(e) => updateField("title", e.target.value)}
      />

      <textarea
        className="input"
        placeholder="Summary"
        rows={3}
        value={data.summary}
        onChange={(e) => updateField("summary", e.target.value)}
      />

      {/* SKILLS */}
      <section>
        <h3 className="font-semibold">Skills</h3>
        {data.skills.map((skill, i) => (
          <div key={i} className="flex gap-2">
            <input
              className="input"
              value={skill}
              onChange={(e) => {
                const updated = [...data.skills];
                updated[i] = e.target.value;
                updateField("skills", updated);
              }}
            />
            <button onClick={() => removeItem("skills", i)}>✕</button>
          </div>
        ))}
        <button
          onClick={() => addItem("skills", "")}
          className="btn-secondary"
        >
          + Add Skill
        </button>
      </section>

      {/* EDUCATION */}
      <section>
        <h3 className="font-semibold">Education</h3>
        {data.education.map((edu, i) => (
          <div key={i} className="space-y-2 border p-2 rounded">
            <input
              className="input"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                updateArray("education", i, "degree", e.target.value)
              }
            />
            <input
              className="input"
              placeholder="Institute"
              value={edu.institute}
              onChange={(e) =>
                updateArray("education", i, "institute", e.target.value)
              }
            />
            <input
              className="input"
              placeholder="Year"
              value={edu.year}
              onChange={(e) =>
                updateArray("education", i, "year", e.target.value)
              }
            />
            <button onClick={() => removeItem("education", i)}>
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() =>
            addItem("education", {
              degree: "",
              institute: "",
              year: "",
            })
          }
          className="btn-secondary"
        >
          + Add Education
        </button>
      </section>
    </div>
  );
}
