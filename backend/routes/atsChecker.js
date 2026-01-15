// // backend/routes/atsChecker.js
// import express from "express";
// import multer from "multer";
// import fs from "fs";
// import { parseResume } from "../utils/resumeParser.js";
// import { analyzeATS } from "../utils/atsAnalyzer.js";

// const router = express.Router();

// // File upload config
// const upload = multer({ dest: "uploads/" });

// router.post("/check", upload.single("resume"), async (req, res) => {
//   try {
//     const { jobDesc } = req.body;
//     const filePath = req.file.path;

//     const resumeText = await parseResume(filePath);
//     const result = analyzeATS(resumeText, jobDesc);

//     // Delete temp file
//     fs.unlinkSync(filePath);

//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;