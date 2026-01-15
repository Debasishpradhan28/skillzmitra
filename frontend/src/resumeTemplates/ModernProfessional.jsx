export default function ModernProfessional({ data, theme }) {
  return (
    <div className={`w-[794px] min-h-[1123px] bg-white p-10 font-sans text-gray-800`}>
      
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold">
          {data.name || "Your Name"}
        </h1>

        <p className={`text-${theme}-600 font-medium`}>
          {data.title || "Professional Title"}
        </p>

        <p className="text-sm text-gray-600 mt-1">
          {data.email} • {data.phone} • {data.location}
        </p>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-5">
          <h2 className="section-title">Professional Summary</h2>
          <p className="text-sm leading-relaxed">
            {data.summary}
          </p>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mb-5">
          <h2 className="section-title">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className={`text-sm px-3 py-1 rounded bg-${theme}-100 text-${theme}-700`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-5">
          <h2 className="section-title">Professional Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">
                {exp.role} — {exp.company}
              </p>
              <p className="text-xs text-gray-500">
                {exp.duration}
              </p>
              <p className="text-sm">
                {exp.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section>
          <h2 className="section-title">Education</h2>
          {data.education.map((edu, i) => (
            <p key={i} className="text-sm">
              <strong>{edu.degree}</strong>, {edu.institute} ({edu.year})
            </p>
          ))}
        </section>
      )}
      {data.projects.length > 0 && (
  <section className="mb-5">
    <h2 className="section-title">Projects</h2>
    {data.projects.map((p, i) => (
      <p key={i} className="text-sm">
        <strong>{p.name}</strong> — {p.description}
      </p>
    ))}
  </section>
)}

{data.certifications.length > 0 && (
  <section>
    <h2 className="section-title">Certifications</h2>
    {data.certifications.map((c, i) => (
      <p key={i} className="text-sm">
        {c.name} — {c.issuer} ({c.year})
      </p>
    ))}
  </section>
)}

    </div>
  );
}
