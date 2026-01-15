export default function CreativeDesigner({ data }) {
  return (
    <div className="w-[794px] min-h-[1123px] bg-gradient-to-br from-indigo-50 to-white p-10 font-sans">
      <h1 className="text-4xl font-extrabold text-indigo-700">
        {data.name}
      </h1>
      <p className="mb-6 text-indigo-500">{data.title}</p>

      <section className="mb-6">
        <h2 className="font-semibold text-indigo-600 mb-2">
          About Me
        </h2>
        <p className="text-sm">{data.summary}</p>
      </section>

      <section>
        <h2 className="font-semibold text-indigo-600 mb-2">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
