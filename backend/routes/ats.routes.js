import express from "express";
import multer from "multer";
import pdf from "pdf-parse";
import mammoth from "mammoth";

const router = express.Router();
const upload = multer({ limits: { fileSize: 2 * 1024 * 1024 } });

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Resume file required" });
    }

    let resumeText = "";

    if (req.file.mimetype === "application/pdf") {
      const data = await pdf(req.file.buffer);
      resumeText = data.text;
    } else {
      const data = await mammoth.extractRawText({ buffer: req.file.buffer });
      resumeText = data.value;
    }

    const jd = req.body.jobDescription || "";

    // 🔑 Keyword Extraction (Real ATS-style)
    const extractKeywords = (text) => {
      return [...new Set(
        text
          .toLowerCase()
          .match(/\b[a-z]{3,}\b/g)
          ?.filter(w => !["with","and","the","for","you"].includes(w))
      )];
    };

    const resumeKeywords = extractKeywords(resumeText);
    const jdKeywords = extractKeywords(jd);

    const matched = jdKeywords.filter(k => resumeKeywords.includes(k));
    const missing = jdKeywords.filter(k => !resumeKeywords.includes(k));

    const score = Math.min(
      100,
      Math.round((matched.length / Math.max(jdKeywords.length, 1)) * 100)
    );

    res.json({
      score,
      matched,
      missing,
      warnings: ["Avoid tables", "Use single-column layout"],
      suggestions: [
        "Add measurable achievements",
        "Include missing technical skills"
      ]
    });

  } catch (err) {
    res.status(500).json({ error: "ATS analysis failed" });
  }
});

export default router;
