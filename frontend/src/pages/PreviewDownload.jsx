// import React, { useRef } from "react";
// import { useResume } from "../store/ResumeStore";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// export default function PreviewDownload() {
//   const { state } = useResume();
//   const ref = useRef(null);

//   const handleDownload = async () => {
//     const element = ref.current;
//     const canvas = await html2canvas(element, { scale: 2 });
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

//     pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//     pdf.save(`${state.personal.fullName || "Resume"}.pdf`);
//   };

//   return (
//     <div className="w-screen min-h-screen bg-gray-50">
//       <div className="max-w-5xl mx-auto px-4 py-6 flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Preview & Download</h1>
//         <div className="flex gap-2">
//           <a href="/resume-maker" className="px-3 py-2 rounded-lg border">Edit</a>
//           <button onClick={handleDownload} className="px-3 py-2 rounded-lg bg-indigo-600 text-white">
//             Download PDF
//           </button>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto px-4 pb-12">
//         <div ref={ref} className="bg-white shadow rounded-xl p-8">
//           <TemplateClassic data={state} />
//         </div>
//       </div>
//     </div>
//   );
// }

// function TemplateClassic({ data }) {
//   const { personal, summary, education, experience, projects, skills } = data;
//   return (
//     <div className="text-gray-900">
//       <div className="text-3xl font-extrabold">{personal.fullName || "Your Name"}</div>
//       <div className="text-gray-600">{personal.title}</div>
//       <div className="text-sm text-gray-500 mt-1">
//         {[personal.email, personal.phone, personal.location, personal.links].filter(Boolean).join(" • ")}
//       </div>

//       {summary && <p className="mt-6">{summary}</p>}

//       {!!experience.length && (
//         <Section title="Experience">
//           {experience.map((e, i) => (
//             <div key={i} className="mb-4">
//               <div className="font-semibold">{e.role || "Role"} — {e.company || "Company"}</div>
//               <div className="text-xs text-gray-500">{e.start} – {e.end}</div>
//               <ul className="list-disc list-inside text-sm mt-1">
//                 {(e.bullets || []).filter(Boolean).map((b, bi) => <li key={bi}>{b}</li>)}
//               </ul>
//             </div>
//           ))}
//         </Section>
//       )}

//       {!!projects.length && (
//         <Section title="Projects">
//           {projects.map((p, i) => (
//             <div key={i} className="mb-3">
//               <div className="font-semibold">{p.name} {p.link && <a className="text-indigo-600 underline ml-1" href={p.link}>{p.link}</a>}</div>
//               <ul className="list-disc list-inside text-sm mt-1">
//                 {(p.bullets || []).filter(Boolean).map((b, bi) => <li key={bi}>{b}</li>)}
//               </ul>
//             </div>
//           ))}
//         </Section>
//       )}

//       {!!education.length && (
//         <Section title="Education">
//           {education.map((e, i) => (
//             <div key={i} className="mb-2">
//               <div className="font-semibold">{e.degree} — {e.school}</div>
//               <div className="text-xs text-gray-500">{e.start} – {e.end}</div>
//               {e.details && <div className="text-sm mt-1">{e.details}</div>}
//             </div>
//           ))}
//         </Section>
//       )}

//       {!!skills.filter(Boolean).length && (
//         <Section title="Skills">
//           <div className="text-sm">{skills.filter(Boolean).join(" • ")}</div>
//         </Section>
//       )}
//     </div>
//   );
// }

// function Section({ title, children }) {
//   return (
//     <div className="mt-6">
//       <div className="uppercase tracking-wide text-xs text-gray-500 font-semibold">{title}</div>
//       <div className="h-px bg-gray-200 my-2" />
//       {children}
//     </div>
//   );
// }

// src/pages/PreviewDownload.jsx
import React, { useRef, useState } from "react";
import { useResume } from "../store/ResumeStore";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function PreviewDownload() {
  const { state } = useResume();
  const ref = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!ref.current) return;
    setDownloading(true);
    try {
      // Increase scale for better quality
      const canvas = await html2canvas(ref.current, { scale: 2, useCORS: true, allowTaint: true });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Convert canvas dimensions to mm with respect to pixel ratio
      const imgProps = canvas;
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

      let position = 0;
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      // If the content is larger than one page, add extra pages
      if (imgHeight > pdfHeight) {
        let heightLeft = imgHeight - pdfHeight;
        while (heightLeft > 0) {
          position = position - pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pdfHeight;
        }
      }

      const fileName = `${(state.personal?.fullName || "resume").replace(/\s+/g, "_")}.pdf`;
      pdf.save(fileName);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Sorry — PDF generation failed. Try again or use the browser Print dialog.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Preview & Download</h1>
        <div className="flex gap-2">
          <a href="/maker" className="px-3 py-2 rounded-lg border">Edit</a>
          <button
            onClick={handleDownload}
            className={`px-3 py-2 rounded-lg bg-indigo-600 text-white ${downloading ? "opacity-60 pointer-events-none" : ""}`}
          >
            {downloading ? "Preparing PDF..." : "Download PDF"}
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div ref={ref} className="bg-white shadow rounded-xl p-8 print:shadow-none print:rounded-none">
          <TemplateSelector data={state} />
        </div>
      </div>
    </div>
  );
}

/* TemplateSelector renders different template layouts based on state.template */
function TemplateSelector({ data }) {
  const tpl = data.template || "classic";
  switch (tpl) {
    case "modern":
      return <TemplateModern data={data} />;
    case "creative":
      return <TemplateCreative data={data} />;
    default:
      return <TemplateClassic data={data} />;
  }
}

/* --- Example printable templates --- */

function TemplateClassic({ data }) {
  const { personal = {}, summary, education = [], experience = [], projects = [], skills = [] } = data;
  return (
    <div style={{ width: "210mm", padding: "18mm", boxSizing: "border-box", fontFamily: "Arial, sans-serif", color: "#111" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
        <div>
          <h1 style={{ fontSize: 22, margin: 0 }}>{personal.fullName || "Your Name"}</h1>
          <div style={{ color: "#555" }}>{personal.title}</div>
        </div>
        <div style={{ textAlign: "right", fontSize: 12, color: "#555" }}>
          {[personal.email, personal.phone, personal.location, personal.links].filter(Boolean).join(" • ")}
        </div>
      </div>

      {summary && <p style={{ marginTop: 8, lineHeight: 1.4 }}>{summary}</p>}

      {experience && experience.length > 0 && (
        <Section header="Experience">
          {experience.map((e, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 600 }}>
                <div>{e.role || ""} — {e.company || ""}</div>
                <div style={{ fontWeight: 400, color: "#666" }}>{e.start} – {e.end}</div>
              </div>
              <ul style={{ marginTop: 6, marginLeft: 16 }}>
                {(e.bullets || []).filter(Boolean).map((b, bi) => <li key={bi} style={{ marginBottom: 4 }}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {projects && projects.length > 0 && (
        <Section header="Projects">
          {projects.map((p, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 600 }}>{p.name} {p.link && <a href={p.link} style={{ color: "#1e40af", textDecoration: "none", marginLeft: 6 }}>{p.link}</a>}</div>
              <ul style={{ marginTop: 6, marginLeft: 16 }}>
                {(p.bullets || []).filter(Boolean).map((b, bi) => <li key={bi}>{b}</li>)}
              </ul>
            </div>
          ))}
        </Section>
      )}

      {education && education.length > 0 && (
        <Section header="Education">
          {education.map((ed, i) => (
            <div key={i} style={{ marginBottom: 6 }}>
              <div style={{ fontWeight: 600 }}>{ed.degree} — {ed.school}</div>
              <div style={{ color: "#666", fontSize: 12 }}>{ed.start} – {ed.end}</div>
              {ed.details && <div style={{ marginTop: 6 }}>{ed.details}</div>}
            </div>
          ))}
        </Section>
      )}

      {skills && skills.filter(Boolean).length > 0 && (
        <Section header="Skills">
          <div>{skills.filter(Boolean).join(" • ")}</div>
        </Section>
      )}

    </div>
  );
}

function TemplateModern({ data }) {
  // Example modern two-column layout; keep simple for print
  const { personal = {}, summary, experience = [], education = [], skills = [], projects = [] } = data;
  return (
    <div style={{ width: "210mm", padding: "18mm", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0 }}>{personal.fullName || "Your Name"}</h1>
          <div style={{ color: "#666" }}>{personal.title}</div>
          {summary && <p style={{ marginTop: 8 }}>{summary}</p>}
          <Section header="Experience">
            {experience.map((e, i) => <div key={i} style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 600 }}>{e.role} — {e.company}</div>
              <div style={{ color: "#666", fontSize: 12 }}>{e.start} – {e.end}</div>
              <ul style={{ marginLeft: 16 }}>{(e.bullets || []).filter(Boolean).map((b, bi) => <li key={bi}>{b}</li>)}</ul>
            </div>)}
          </Section>
        </div>

        <aside style={{ width: 240 }}>
          {skills && skills.filter(Boolean).length > 0 && <Section header="Skills"><div style={{ fontSize: 13 }}>{skills.filter(Boolean).join(", ")}</div></Section>}
          {education && education.length > 0 && <Section header="Education">{education.map((ed,i) => <div key={i}><div style={{fontWeight:600}}>{ed.degree}</div><div style={{fontSize:12,color:'#666'}}>{ed.school}</div></div>)}</Section>}
          {projects && projects.length > 0 && <Section header="Projects">{projects.map((p,i) => <div key={i}><div style={{fontWeight:600}}>{p.name}</div></div>)}</Section>}
        </aside>
      </div>
    </div>
  );
}

function TemplateCreative({ data }) {
  // Simpler creative version (accent color)
  const { personal = {}, summary, experience = [], education = [], skills = [] } = data;
  return (
    <div style={{ width: "210mm", padding: "18mm", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }}>
      <div style={{ borderLeft: "6px solid #7c3aed", paddingLeft: 12 }}>
        <h1 style={{ margin: 0 }}>{personal.fullName || "Your Name"}</h1>
        <div style={{ color: "#666" }}>{personal.title}</div>
      </div>

      {summary && <p style={{ marginTop: 8 }}>{summary}</p>}

      <Section header="Experience">
        {experience.map((e,i) => <div key={i}><div style={{fontWeight:600}}>{e.role} — {e.company}</div><ul style={{marginLeft:16}}>{(e.bullets||[]).filter(Boolean).map((b,bi)=><li key={bi}>{b}</li>)}</ul></div>)}
      </Section>

      {education.length>0 && <Section header="Education">{education.map((ed,i)=><div key={i}><div style={{fontWeight:600}}>{ed.degree}</div><div style={{fontSize:12,color:'#666'}}>{ed.school}</div></div>)}</Section>}

      {skills.filter(Boolean).length>0 && <Section header="Skills"><div>{skills.filter(Boolean).join(" • ")}</div></Section>}
    </div>
  );
}

function Section({ header, children }) {
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ fontSize: 11, textTransform: "uppercase", color: "#666", fontWeight: 700, marginBottom: 6 }}>{header}</div>
      <div>{children}</div>
    </div>
  );
}
