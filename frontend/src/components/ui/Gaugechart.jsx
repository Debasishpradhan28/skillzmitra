import React from "react";
import GaugeChart from "./GaugeChart";
import SuggestionsBox from "./SuggestionsBox";

function ATSResultCard({ result }) {
  return (
    <div className="ats-result">
      <GaugeChart score={result.score} />
      <p>Matched Keywords: {result.matched.join(", ")}</p>
      <SuggestionsBox suggestions={result.suggestions} />
    </div>
  );
}

export default ATSResultCard;