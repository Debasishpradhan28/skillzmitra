// // backend/utils/atsAnalyzer.js
// export function analyzeATS(resumeText, jobDesc) {
//   const resume = resumeText.toLowerCase();
//   const jdWords = jobDesc.toLowerCase().split(/\s+/);

//   let matched = jdWords.filter((word) => resume.includes(word));
//   let score = Math.round((matched.length / jdWords.length) * 100);

//   // Basic suggestions
//   let suggestions = [];
//   if (score < 60) {
//     suggestions.push("Add more keywords from Job Description");
//   }
//   if (!resume.includes("skills")) {
//     suggestions.push("Highlight your Skills section clearly");
//   }
//   if (!resume.includes("experience")) {
//     suggestions.push("Add or improve Experience section");
//   }

//   return { score, matched, suggestions };
// }