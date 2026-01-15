import { useLocation, useNavigate } from "react-router-dom";

export default function ATSResult() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        No ATS data found. Please analyze a resume first.
      </div>
    );
  }

  const { score, matched = [], missing = [], suggestions = [] } = state;

  // Score color logic (industry-style)
  const scoreColor =
    score >= 70
      ? "text-green-600"
      : score >= 40
      ? "text-yellow-500"
      : "text-red-600";

  const scoreMessage =
    score >= 70
      ? "Great match! Your resume is ATS-friendly."
      : score >= 40
      ? "Average match. Some improvements needed."
      : "Low match. Resume needs optimization.";

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* ===== ATS SCORE CARD ===== */}
        <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800">
            ATS Compatibility Score
          </h2>

          <div className={`text-6xl font-bold mt-4 ${scoreColor}`}>
            {score}%
          </div>

          <p className="mt-3 text-gray-600">
            {scoreMessage}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Your resume matches <strong>{matched.length}</strong> important job keywords.
          </p>
        </div>

        {/* ===== KEYWORDS SECTION ===== */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Keyword Analysis
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Matched */}
            <div>
              <p className="font-medium text-green-600 mb-2">
                Matched Keywords ({matched.length})
              </p>

              <div className="flex flex-wrap gap-2">
                {matched.length > 0 ? (
                  matched.map((k) => (
                    <span
                      key={k}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                    >
                      {k}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No matched keywords found.</p>
                )}
              </div>
            </div>

            {/* Missing */}
            <div>
              <p className="font-medium text-red-600 mb-2">
                Missing Keywords ({missing.length})
              </p>

              <div className="flex flex-wrap gap-2">
                {missing.length > 0 ? (
                  missing.map((k) => (
                    <span
                      key={k}
                      className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm"
                    >
                      {k}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">No critical keywords missing.</p>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* ===== AI SUGGESTIONS ===== */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            AI Resume Improvement Suggestions
          </h3>

          <ul className="space-y-3 text-gray-700">
            {suggestions.length > 0 ? (
              suggestions.map((s, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  {s}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500">
                No suggestions available.
              </p>
            )}
          </ul>
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => navigate("/ats-checker")}
            className="px-6 py-3 rounded-lg border font-medium text-gray-700 hover:bg-gray-100"
          >
            Re-check ATS
          </button>

          <button
            onClick={() => navigate("/maker")}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700"
          >
            Improve Resume
          </button>
        </div>

      </div>
    </div>
  );
}
