// // backend/utils/resumeParser.js
// import pdfParse from "pdf-parse";
// import fs from "fs";
// import mammoth from "mammoth";

// export async function parseResume(filePath) {
//   const ext = filePath.split(".").pop().toLowerCase();

//   if (ext === "pdf") {
//     const buffer = fs.readFileSync(filePath);
//     const data = await pdfParse(buffer);
//     return data.text;
//   } else if (ext === "docx") {
//     return new Promise((resolve, reject) => {
//       readFile(filePath, (err, data) => {
//         if (err) reject(err);
//         else resolve(data);
//       });
//     });
//   } else {
//     throw new Error("Unsupported file format");
//   }
// }