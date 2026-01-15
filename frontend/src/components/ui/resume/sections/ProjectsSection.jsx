export default function ProjectsSection({ data, onChange }) {
  const update = (i, key, value) => {
    const updated = [...data];
    updated[i][key] = value;
    onChange(updated);
  };

  return (
    <section>
      <h3 className="font-semibold mb-2">Projects</h3>

      {data.map((proj, i) => (
        <div key={i} className="border p-3 rounded mb-3">
          <input
            className="input"
            placeholder="Project Name"
            value={proj.name}
            onChange={(e) =>
              update(i, "name", e.target.value)
            }
          />
          <textarea
            className="input"
            placeholder="Description"
            value={proj.description}
            onChange={(e) =>
              update(i, "description", e.target.value)
            }
          />
          <input
            className="input"
            placeholder="Link (optional)"
            value={proj.link}
            onChange={(e) =>
              update(i, "link", e.target.value)
            }
          />
        </div>
      ))}
    </section>
  );
}
