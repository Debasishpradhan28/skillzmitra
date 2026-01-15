// import express from "express";
// import axios from "axios";
// import fs from "fs";
// import path from "path";
// import PizZip from "pizzip";
// import Docxtemplater from "docxtemplater";

// const router = express.Router();

// // Fetch template list from Reactive Resume API
// router.get("/templates", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.reactive-resume.com/templates"); // Example API
//     const templates = response.data; 
//     res.json(templates);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to fetch templates" });
//   }
// });

// // Generate resume DOCX
// router.post("/generate-resume", async (req, res) => {
//   try {
//     const { templateName, userData } = req.body;

//     const templatePath = path.resolve(`./resume_templates/${templateName}.docx`);
//     const content = fs.readFileSync(templatePath, "binary");

//     const zip = new PizZip(content);
//     const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
//     doc.render(userData);

//     const buffer = doc.getZip().generate({ type: "nodebuffer" });

//     res.set({
//       "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "Content-Disposition": `attachment; filename=${templateName}_resume.docx`,
//     });
//     res.send(buffer);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Failed to generate resume" });
//   }
// });

// export default router;

// import express from "express";
// import axios from "axios";
// import fs from "fs";
// import path from "path";
// import PizZip from "pizzip";
// import Docxtemplater from "docxtemplater";

// const router = express.Router();

// // 1️⃣ Fetch templates from Reactive Resume Public API
// router.get("/templates", async (req, res) => {
//   try {
//     const response = await axios.get("https://api.reactive-resume.com/templates");
//     res.json(response.data);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch templates" });
//   }
// });

// // 2️⃣ Generate DOCX resume
// router.post("/generate-resume", async (req, res) => {
//   try {
//     const { templateName, userData } = req.body;

//     const templatePath = path.resolve(`./resume_templates/${templateName}.docx`);
//     const content = fs.readFileSync(templatePath, "binary");

//     const zip = new PizZip(content);
//     const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
//     doc.render(userData);

//     const buffer = doc.getZip().generate({ type: "nodebuffer" });

//     res.set({
//       "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//       "Content-Disposition": `attachment; filename=${templateName}_resume.docx`,
//     });
//     res.send(buffer);

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to generate resume" });
//   }
// });

// export default router;