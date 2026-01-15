export default function ScoreRing({ score }) {
  return (
    <div className="bg-white rounded-xl border p-6 text-center">
      <h2 className="text-xl font-semibold mb-4">ATS Compatibility Score</h2>
      <div className="text-5xl font-bold text-indigo-600">{score}%</div>
    </div>
  );
}
