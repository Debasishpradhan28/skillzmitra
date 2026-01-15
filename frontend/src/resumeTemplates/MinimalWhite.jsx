export default function MinimalWhite({ data }) {
  return (
    <div className="w-[794px] min-h-[1123px] bg-white px-16 py-14 text-black font-serif">
      
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold">
          {data.name || "Your Name"}
        </h1>
        <p className="text-sm tracking-wide uppercase mt-1">
          {data.title || "Professional Title"}
        </p>

        <p className="text-xs mt-3">
          {data.email} · {data.phone} · {data.location}
        </p>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-2">
            Summary
          </h2>
          <p className="text-sm leading-relaxed">
            {data.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-2">
            Experience
          </h2>

          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <p className="text-sm font-semibold">
                {exp.role} — {exp.company}
              </p>
              <p className="text-xs italic">
                {exp.duration}
              </p>
              <p className="text-sm mt-1">
                {exp.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education?.length > 0 && (
        <section>
          <h2 className="text-xs uppercase tracking-widest mb-2">
            Education
          </h2>

          {data.education.map((edu, i) => (
            <p key={i} className="text-sm">
              <strong>{edu.degree}</strong>, {edu.institute} ({edu.year})
            </p>
          ))}
        </section>
      )}
    </div>
  );
}
