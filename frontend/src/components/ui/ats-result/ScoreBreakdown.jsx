export default function ScoreBreakdown() {
  const items = [
    ["Keyword Match", "32 / 40"],
    ["Section Structure", "20 / 25"],
    ["Formatting", "14 / 20"],
    ["Skills Density", "7 / 10"],
  ];

  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-4">Score Breakdown</h3>
      <ul className="space-y-2">
        {items.map(([label, value], i) => (
          <li key={i} className="flex justify-between text-gray-700">
            <span>{label}</span>
            <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
