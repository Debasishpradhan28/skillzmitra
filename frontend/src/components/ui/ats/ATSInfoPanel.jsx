export default function ATSInfoPanel() {
  const steps = [
    "Resume parsed like real ATS software",
    "Skills & keywords matched with job role",
    "ATS compatibility score generated",
    "AI-powered improvement suggestions",
  ];

  return (
    <div className="bg-white rounded-xl border p-6 sticky top-10">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        How ATS Checker Works
      </h2>

      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-gray-700">
            <span className="font-bold">{i + 1}.</span>
            {step}
          </li>
        ))}
      </ul>

      <div className="mt-6 text-sm text-gray-500">
        🔒 Your resume is private and deleted after analysis.
      </div>
    </div>
  );
}
