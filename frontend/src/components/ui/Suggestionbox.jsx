import React from "react";

function SuggestionsBox({ suggestions }) {
  return (
    <div className="suggestions">
      <h4>Suggestions</h4>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionsBox;