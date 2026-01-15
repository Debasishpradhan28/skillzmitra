export default function CertificationsSection({
  data,
  onChange,
}) {
  const update = (i, key, value) => {
    const updated = [...data];
    updated[i][key] = value;
    onChange(updated);
  };

  return (
    <section>
      <h3 className="font-semibold mb-2">
        Certifications
      </h3>

      {data.map((cert, i) => (
        <div key={i} className="border p-3 rounded mb-3">
          <input
            className="input"
            placeholder="Certification Name"
            value={cert.name}
            onChange={(e) =>
              update(i, "name", e.target.value)
            }
          />
          <input
            className="input"
            placeholder="Issuer"
            value={cert.issuer}
            onChange={(e) =>
              update(i, "issuer", e.target.value)
            }
          />
          <input
            className="input"
            placeholder="Year"
            value={cert.year}
            onChange={(e) =>
              update(i, "year", e.target.value)
            }
          />
        </div>
      ))}
    </section>
  );
}
