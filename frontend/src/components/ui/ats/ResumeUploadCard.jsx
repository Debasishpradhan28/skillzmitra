export default function ResumeUploadCard({ file, setFile }) {

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!["application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ].includes(selected.type)) {
      alert("Only PDF or DOCX allowed");
      return;
    }

    if (selected.size > 2 * 1024 * 1024) {
      alert("File size must be under 2MB");
      return;
    }

    setFile(selected);
  };

  return (
    <div className="bg-white rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-3">Upload your resume</h2>

      <label className="border-2 border-dashed rounded-lg p-8 text-center block cursor-pointer hover:border-indigo-500">
        <input type="file" hidden onChange={handleFile} />
        <p className="text-4xl">📄</p>
        <p className="font-medium">
          {file ? file.name : "Drag & drop or click to upload"}
        </p>
        <p className="text-sm text-gray-500">PDF or DOCX • Max 2MB</p>
      </label>
    </div>
  );
}
