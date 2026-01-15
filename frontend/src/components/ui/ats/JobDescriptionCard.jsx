export default function JobDescriptionCard({ jd, setJd }) {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-2">
        Job Description (Optional)
      </h2>

      <textarea
        value={jd}
        onChange={(e) => setJd(e.target.value)}
        rows="6"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500"
        placeholder="Paste the job description here..."
      />

      <p className="text-sm text-gray-500 mt-2">
        Improves keyword matching & ATS accuracy.
      </p>
    </div>
  );
}
