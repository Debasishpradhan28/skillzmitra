// src/pages/ResumeMaker.jsx
// import React, { useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import { useResume } from "../store/ResumeStore";

// const steps = ["Personal", "Summary", "Education", "Experience", "Projects", "Skills", "Review"];

// export default function ResumeMaker() {
//   const { state, dispatch } = useResume();
//   const [step, setStep] = React.useState(0);
//   const nav = useNavigate();

//   const goNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
//   const goBack = () => setStep((s) => Math.max(s - 1, 0));

//   const saveNow = () => {
//     localStorage.setItem("resume_data_v1", JSON.stringify(state));
//   };
//   const resetAll = () => dispatch({ type: "RESET" });

//   return (
//     <div className="w-screen min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
//         <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="flex gap-2 items-center">
//             <span className="text-xl font-bold">Resume Maker</span>
//             <span className="text-sm text-gray-500">/ {steps[step]}</span>
//           </div>
//           <div className="flex gap-2">
//             <button onClick={() => nav("/preview")} className="px-3 py-2 rounded-lg bg-indigo-600 text-white">Preview</button>
//             <button onClick={saveNow} className="px-3 py-2 rounded-lg border">Save</button>
//             <button onClick={resetAll} className="px-3 py-2 rounded-lg border border-red-300 text-red-600">Reset</button>
//           </div>
//         </div>
//         <Stepper step={step} />
//       </div>

//       {/* Body */}
//       <div className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
//         <div className="bg-white rounded-2xl shadow p-6">
//           {step === 0 && <Personal />}
//           {step === 1 && <Summary />}
//           {step === 2 && <Education />}
//           {step === 3 && <Experience />}
//           {step === 4 && <Projects />}
//           {step === 5 && <Skills />}
//           {step === 6 && <Review />}
//           <div className="mt-6 flex justify-between">
//             <button onClick={goBack} disabled={step === 0} className="px-4 py-2 rounded-lg border disabled:opacity-40">Back</button>
//             <button onClick={goNext} disabled={step === steps.length - 1} className="px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-40">Next</button>
//           </div>
//         </div>

//         {/* Live glance preview (mini) */}
//         <div className="bg-white rounded-2xl shadow p-6">
//           <MiniPreview />
//           <button onClick={() => nav("/preview")} className="mt-4 w-full px-4 py-2 rounded-lg bg-gray-900 text-white">Open Full Preview</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function Stepper({ step }) {
//   return (
//     <div className="overflow-x-auto">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3">
//         {steps.map((s, i) => (
//           <div key={s} className={`px-3 py-1 text-sm rounded-full border ${i === step ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-600"}`}>
//             {i + 1}. {s}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* --- Step forms --- */
// function Personal() {
//   const { state, dispatch } = useResume();
//   const p = state.personal;
//   const set = (field, value) => dispatch({ type: "PATCH", section: "personal", payload: { [field]: value } });

//   return (
//     <div className="space-y-4">
//       <Section title="Personal Information">
//         <Grid cols={2}>
//           <Input label="Full Name" value={p.fullName} onChange={(v) => set("fullName", v)} />
//           <Input label="Professional Title" value={p.title} onChange={(v) => set("title", v)} />
//           <Input label="Email" value={p.email} onChange={(v) => set("email", v)} />
//           <Input label="Phone" value={p.phone} onChange={(v) => set("phone", v)} />
//           <Input label="Location" value={p.location} onChange={(v) => set("location", v)} />
//           <Input label="Links (Portfolio, LinkedIn…)" value={p.links} onChange={(v) => set("links", v)} />
//         </Grid>
//       </Section>
//     </div>
//   );
// }

// function Summary() {
//   const { state, dispatch } = useResume();
//   return (
//     <Section title="Professional Summary" subtitle="2–4 crisp lines that highlight your value.">
//       <Textarea value={state.summary} onChange={(v) => dispatch({ type: "SET", section: "summary", payload: v })} rows={5} />
//     </Section>
//   );
// }

// function Education() {
//   const { state, dispatch } = useResume();
//   const list = state.education;
//   const update = (i, k, v) => {
//     const next = [...list]; next[i] = { ...next[i], [k]: v };
//     dispatch({ type: "SET", section: "education", payload: next });
//   };
//   const add = () => dispatch({ type: "SET", section: "education", payload: [...list, { school: "", degree: "", start: "", end: "", details: "" }] });
//   const remove = (i) => dispatch({ type: "SET", section: "education", payload: list.filter((_, idx) => idx !== i) });

//   return (
//     <Section title="Education">
//       {list.map((e, i) => (
//         <Card key={i}>
//           <Grid cols={2}>
//             <Input label="School / University" value={e.school} onChange={(v) => update(i, "school", v)} />
//             <Input label="Degree / Program" value={e.degree} onChange={(v) => update(i, "degree", v)} />
//             <Input label="Start" value={e.start} onChange={(v) => update(i, "start", v)} />
//             <Input label="End" value={e.end} onChange={(v) => update(i, "end", v)} />
//           </Grid>
//           <Textarea label="Details (optional)" value={e.details} onChange={(v) => update(i, "details", v)} />
//           <div className="text-right"><button onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button></div>
//         </Card>
//       ))}
//       <button onClick={add} className="mt-2 px-3 py-2 rounded-lg border">+ Add Education</button>
//     </Section>
//   );
// }

// function Experience() {
//   const { state, dispatch } = useResume();
//   const list = state.experience;
//   const update = (i, k, v) => {
//     const next = [...list]; next[i] = { ...next[i], [k]: v };
//     dispatch({ type: "SET", section: "experience", payload: next });
//   };
//   const add = () => dispatch({ type: "SET", section: "experience", payload: [...list, { company: "", role: "", start: "", end: "", bullets: [""] }] });
//   const remove = (i) => dispatch({ type: "SET", section: "experience", payload: list.filter((_, idx) => idx !== i) });
//   const updateBullet = (i, bi, v) => {
//     const next = [...list]; const bl = [...(next[i].bullets || [])]; bl[bi] = v; next[i].bullets = bl;
//     dispatch({ type: "SET", section: "experience", payload: next });
//   };
//   const addBullet = (i) => {
//     const next = [...list]; next[i].bullets = [...(next[i].bullets || []), ""];
//     dispatch({ type: "SET", section: "experience", payload: next });
//   };
//   const removeBullet = (i, bi) => {
//     const next = [...list]; next[i].bullets = (next[i].bullets || []).filter((_, idx) => idx !== bi);
//     dispatch({ type: "SET", section: "experience", payload: next });
//   };

//   return (
//     <Section title="Experience">
//       {list.map((e, i) => (
//         <Card key={i}>
//           <Grid cols={2}>
//             <Input label="Company" value={e.company} onChange={(v) => update(i, "company", v)} />
//             <Input label="Role / Title" value={e.role} onChange={(v) => update(i, "role", v)} />
//             <Input label="Start" value={e.start} onChange={(v) => update(i, "start", v)} />
//             <Input label="End" value={e.end} onChange={(v) => update(i, "end", v)} />
//           </Grid>
//           <div className="space-y-2">
//             <Label>Highlights / Achievements</Label>
//             {(e.bullets || []).map((b, bi) => (
//               <div key={bi} className="flex gap-2">
//                 <input className="input" value={b} onChange={(ev) => updateBullet(i, bi, ev.target.value)} placeholder="e.g., Increased conversion by 20%" />
//                 <button onClick={() => removeBullet(i, bi)} className="px-2 rounded border text-red-600">✕</button>
//               </div>
//             ))}
//             <button onClick={() => addBullet(i)} className="px-3 py-1 rounded border">+ Add bullet</button>
//           </div>
//           <div className="text-right"><button onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button></div>
//         </Card>
//       ))}
//       <button onClick={add} className="mt-2 px-3 py-2 rounded-lg border">+ Add Experience</button>
//     </Section>
//   );
// }

// function Projects() {
//   const { state, dispatch } = useResume();
//   const list = state.projects;
//   const update = (i, k, v) => { const next = [...list]; next[i] = { ...next[i], [k]: v }; dispatch({ type: "SET", section: "projects", payload: next }); };
//   const add = () => dispatch({ type: "SET", section: "projects", payload: [...list, { name: "", link: "", bullets: [""] }] });
//   const remove = (i) => dispatch({ type: "SET", section: "projects", payload: list.filter((_, idx) => idx !== i) });
//   const updateBullet = (i, bi, v) => { const next = [...list]; const bl = [...(next[i].bullets || [])]; bl[bi] = v; next[i].bullets = bl; dispatch({ type: "SET", section: "projects", payload: next }); };
//   const addBullet = (i) => { const next = [...list]; next[i].bullets = [...(next[i].bullets || []), ""]; dispatch({ type: "SET", section: "projects", payload: next }); };
//   const removeBullet = (i, bi) => { const next = [...list]; next[i].bullets = (next[i].bullets || []).filter((_, idx) => idx !== bi); dispatch({ type: "SET", section: "projects", payload: next }); };

//   return (
//     <Section title="Projects">
//       {list.map((p, i) => (
//         <Card key={i}>
//           <Grid cols={2}>
//             <Input label="Project Name" value={p.name} onChange={(v) => update(i, "name", v)} />
//             <Input label="Link (GitHub/Live)" value={p.link} onChange={(v) => update(i, "link", v)} />
//           </Grid>
//           <Label>Highlights</Label>
//           {(p.bullets || []).map((b, bi) => (
//             <div key={bi} className="flex gap-2">
//               <input className="input" value={b} onChange={(ev) => updateBullet(i, bi, ev.target.value)} placeholder="What did you build/achieve?" />
//               <button onClick={() => removeBullet(i, bi)} className="px-2 rounded border text-red-600">✕</button>
//             </div>
//           ))}
//           <button onClick={() => addBullet(i)} className="px-3 py-1 rounded border">+ Add bullet</button>
//           <div className="text-right"><button onClick={() => remove(i)} className="text-red-600 text-sm">Remove</button></div>
//         </Card>
//       ))}
//       <button onClick={add} className="mt-2 px-3 py-2 rounded-lg border">+ Add Project</button>
//     </Section>
//   );
// }

// function Skills() {
//   const { state, dispatch } = useResume();
//   const list = state.skills;
//   const update = (i, v) => { const next = [...list]; next[i] = v; dispatch({ type: "SET", section: "skills", payload: next }); };
//   const add = () => dispatch({ type: "SET", section: "skills", payload: [...list, ""] });
//   const remove = (i) => dispatch({ type: "SET", section: "skills", payload: list.filter((_, idx) => idx !== i) });

//   return (
//     <Section title="Skills">
//       {list.map((s, i) => (
//         <div key={i} className="flex gap-2 mb-2">
//           <input className="input" value={s} onChange={(e) => update(i, e.target.value)} placeholder="e.g., React" />
//           <button onClick={() => remove(i)} className="px-2 rounded border text-red-600">✕</button>
//         </div>
//       ))}
//       <button onClick={add} className="px-3 py-2 rounded-lg border">+ Add Skill</button>
//     </Section>
//   );
// }

// function Review() {
//   const { state } = useResume();
//   return (
//     <Section title="Review your data">
//       <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">{JSON.stringify(state, null, 2)}</pre>
//       <p className="text-sm text-gray-500 mt-2">You can still edit any step, or open full preview to download.</p>
//     </Section>
//   );
// }

// /* --- Reusable UI bits --- */
// function Section({ title, subtitle, children }) {
//   return (
//     <div>
//       <h2 className="text-xl font-semibold">{title}</h2>
//       {subtitle && <p className="text-gray-500 text-sm mb-4">{subtitle}</p>}
//       <div className="mt-4 space-y-4">{children}</div>
//     </div>
//   );
// }

// function Card({ children }) {
//   return <div className="border rounded-xl p-4 space-y-3">{children}</div>;
// }

// function Grid({ cols = 2, children }) {
//   return <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-3`}>{children}</div>;
// }

// function Label({ children }) {
//   return <label className="block text-sm font-medium text-gray-700">{children}</label>;
// }

// function Input({ label, value, onChange, ...rest }) {
//   return (
//     <div>
//       {label && <Label>{label}</Label>}
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="input"
//         {...rest}
//       />
//     </div>
//   );
// }

// function Textarea({ label, value, onChange, rows = 4 }) {
//   return (
//     <div>
//       {label && <Label>{label}</Label>}
//       <textarea
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         rows={rows}
//         className="input"
//       />
//     </div>
//   );
// }

// function MiniPreview() {
//   const { state } = useResume();
//   const p = state.personal;
//   const skills = useMemo(() => state.skills.filter(Boolean), [state.skills]);

//   return (
//     <div className="border rounded-xl p-4">
//       <div className="text-xl font-bold">{p.fullName || "Your Name"}</div>
//       <div className="text-gray-600">{p.title || "Title / Role"}</div>
//       <div className="text-sm text-gray-500 mt-2">{[p.email, p.phone, p.location].filter(Boolean).join(" • ")}</div>

//       {!!state.summary && <p className="mt-4 text-gray-700">{state.summary}</p>}

//       {state.experience.length > 0 && (
//         <div className="mt-4">
//           <div className="font-semibold">Experience</div>
//           <ul className="list-disc list-inside text-sm text-gray-700">
//             {state.experience.slice(0, 2).map((e, i) => (
//               <li key={i}>{e.role || "Role"} @ {e.company || "Company"} ({e.start}–{e.end})</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {skills.length > 0 && (
//         <div className="mt-3">
//           <div className="font-semibold">Skills</div>
//           <div className="text-sm text-gray-700">{skills.join(" • ")}</div>
//         </div>
//       )}
//     </div>
//   );
// }

// src/pages/ResumeMaker.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useResume } from "../store/ResumeStore";

const STEPS = ["Personal", "Summary", "Education", "Experience", "Projects", "Skills", "Review"];

export default function ResumeMaker() {
  const { state, dispatch } = useResume();
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const go = (n) => setStep(Math.min(Math.max(n, 0), STEPS.length - 1));
  const next = () => go(step + 1);
  const back = () => go(step - 1);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b bg-white/75 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Resume Maker
            </span>
            <span className="text-sm text-slate-500">/ {STEPS[step]}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/preview")}
              className="px-3 py-2 rounded-xl bg-indigo-600 text-white shadow-md hover:shadow-lg transition"
            >
              Preview
            </button>
            <button
              onClick={() => localStorage.setItem("resume_data_v1", JSON.stringify(state))}
              className="px-3 py-2 rounded-xl border hover:bg-slate-50 transition"
            >
              Save
            </button>
            <button
              onClick={() => dispatch({ type: "RESET" })}
              className="px-3 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-50 transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Stepper */}
        <div className="overflow-x-auto">
          <div className="max-w-6xl mx-auto px-4 pb-3 flex gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => go(i)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  i === step
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600"
                    : "bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {i + 1}. {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* Form card */}
        <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {step === 0 && <Personal />}
              {step === 1 && <Summary />}
              {step === 2 && <Education />}
              {step === 3 && <Experience />}
              {step === 4 && <Projects />}
              {step === 5 && <Skills />}
              {step === 6 && <Review />}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-between">
            <button
              onClick={back}
              disabled={step === 0}
              className="px-4 py-2 rounded-xl border disabled:opacity-40 hover:bg-slate-50 transition"
            >
              Back
            </button>
            <button
              onClick={next}
              disabled={step === STEPS.length - 1}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:shadow-md disabled:opacity-40 transition"
            >
              Next
            </button>
          </div>
        </div>

        {/* Live preview card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5 p-6"
        >
          <MiniPreview />
          <button
            onClick={() => navigate("/preview")}
            className="mt-4 w-full px-4 py-2 rounded-xl bg-slate-900 text-white hover:shadow-md transition"
          >
            Open Full Preview
          </button>
        </motion.div>
      </div>
    </div>
  );
}

/* -------------------- Step forms -------------------- */

function Personal() {
  const { state, dispatch } = useResume();
  const p = state.personal;
  const set = (k, v) => dispatch({ type: "PATCH", section: "personal", payload: { [k]: v } });

  return (
    <Section title="Personal Information" subtitle="Tell us who you are.">
      <Grid>
        <Input label="Full Name" value={p.fullName} onChange={(v) => set("fullName", v)} />
        <Input label="Professional Title" value={p.title} onChange={(v) => set("title", v)} />
        <Input label="Email" value={p.email} onChange={(v) => set("email", v)} />
        <Input label="Phone" value={p.phone} onChange={(v) => set("phone", v)} />
        <Input label="Location" value={p.location} onChange={(v) => set("location", v)} />
        <Input label="Links (Portfolio / LinkedIn)" value={p.links} onChange={(v) => set("links", v)} />
      </Grid>
    </Section>
  );
}

function Summary() {
  const { state, dispatch } = useResume();
  return (
    <Section title="Professional Summary" subtitle="2–4 crisp lines that highlight your value.">
      <Textarea
        rows={6}
        value={state.summary}
        onChange={(v) => dispatch({ type: "SET", section: "summary", payload: v })}
        placeholder="Example: Frontend engineer with 4+ years building accessible, high-performance React apps…"
      />
    </Section>
  );
}

function Education() {
  const { state, dispatch } = useResume();
  const list = state.education;
  const update = (i, k, v) => {
    const next = [...list];
    next[i] = { ...next[i], [k]: v };
    dispatch({ type: "SET", section: "education", payload: next });
  };
  const add = () =>
    dispatch({
      type: "SET",
      section: "education",
      payload: [...list, { school: "", degree: "", start: "", end: "", details: "" }],
    });
  const remove = (i) =>
    dispatch({ type: "SET", section: "education", payload: list.filter((_, idx) => idx !== i) });

  return (
    <Section title="Education">
      {list.map((e, i) => (
        <Card key={i}>
          <Grid>
            <Input label="School / University" value={e.school} onChange={(v) => update(i, "school", v)} />
            <Input label="Degree / Program" value={e.degree} onChange={(v) => update(i, "degree", v)} />
            <Input label="Start" value={e.start} onChange={(v) => update(i, "start", v)} />
            <Input label="End" value={e.end} onChange={(v) => update(i, "end", v)} />
          </Grid>
          <Textarea label="Details (optional)" value={e.details} onChange={(v) => update(i, "details", v)} />
          <div className="text-right">
            <button onClick={() => remove(i)} className="text-red-600 text-sm hover:underline">
              Remove
            </button>
          </div>
        </Card>
      ))}
      <button onClick={add} className="mt-2 px-3 py-2 rounded-xl border hover:bg-slate-50 transition">
        + Add Education
      </button>
    </Section>
  );
}

function Experience() {
  const { state, dispatch } = useResume();
  const list = state.experience;

  const update = (i, k, v) => {
    const next = [...list];
    next[i] = { ...next[i], [k]: v };
    dispatch({ type: "SET", section: "experience", payload: next });
  };
  const add = () =>
    dispatch({
      type: "SET",
      section: "experience",
      payload: [...list, { company: "", role: "", start: "", end: "", bullets: [""] }],
    });
  const remove = (i) =>
    dispatch({ type: "SET", section: "experience", payload: list.filter((_, idx) => idx !== i) });

  const updateBullet = (i, bi, v) => {
    const next = [...list];
    const bullets = [...(next[i].bullets || [])];
    bullets[bi] = v;
    next[i].bullets = bullets;
    dispatch({ type: "SET", section: "experience", payload: next });
  };
  const addBullet = (i) => {
    const next = [...list];
    next[i].bullets = [...(next[i].bullets || []), ""];
    dispatch({ type: "SET", section: "experience", payload: next });
  };
  const removeBullet = (i, bi) => {
    const next = [...list];
    next[i].bullets = (next[i].bullets || []).filter((_, idx) => idx !== bi);
    dispatch({ type: "SET", section: "experience", payload: next });
  };

  return (
    <Section title="Experience">
      {list.map((e, i) => (
        <Card key={i}>
          <Grid>
            <Input label="Company" value={e.company} onChange={(v) => update(i, "company", v)} />
            <Input label="Role / Title" value={e.role} onChange={(v) => update(i, "role", v)} />
            <Input label="Start" value={e.start} onChange={(v) => update(i, "start", v)} />
            <Input label="End" value={e.end} onChange={(v) => update(i, "end", v)} />
          </Grid>

          <Label>Highlights / Achievements</Label>
          {(e.bullets || []).map((b, bi) => (
            <div key={bi} className="flex gap-2 mb-2">
              <input
                className="input"
                value={b}
                onChange={(ev) => updateBullet(i, bi, ev.target.value)}
                placeholder="e.g., Increased conversion by 22% through A/B tests"
              />
              <button onClick={() => removeBullet(i, bi)} className="px-2 rounded-xl border text-red-600">
                ✕
              </button>
            </div>
          ))}
          <button onClick={() => addBullet(i)} className="px-3 py-1 rounded-xl border hover:bg-slate-50 transition">
            + Add bullet
          </button>

          <div className="text-right">
            <button onClick={() => remove(i)} className="text-red-600 text-sm hover:underline">
              Remove
            </button>
          </div>
        </Card>
      ))}
      <button onClick={add} className="mt-2 px-3 py-2 rounded-xl border hover:bg-slate-50 transition">
        + Add Experience
      </button>
    </Section>
  );
}

function Projects() {
  const { state, dispatch } = useResume();
  const list = state.projects;

  const update = (i, k, v) => {
    const next = [...list];
    next[i] = { ...next[i], [k]: v };
    dispatch({ type: "SET", section: "projects", payload: next });
  };
  const add = () => dispatch({ type: "SET", section: "projects", payload: [...list, { name: "", link: "", bullets: [""] }] });
  const remove = (i) => dispatch({ type: "SET", section: "projects", payload: list.filter((_, idx) => idx !== i) });

  const updateBullet = (i, bi, v) => {
    const next = [...list];
    const bullets = [...(next[i].bullets || [])];
    bullets[bi] = v;
    next[i].bullets = bullets;
    dispatch({ type: "SET", section: "projects", payload: next });
  };
  const addBullet = (i) => {
    const next = [...list];
    next[i].bullets = [...(next[i].bullets || []), ""];
    dispatch({ type: "SET", section: "projects", payload: next });
  };
  const removeBullet = (i, bi) => {
    const next = [...list];
    next[i].bullets = (next[i].bullets || []).filter((_, idx) => idx !== bi);
    dispatch({ type: "SET", section: "projects", payload: next });
  };

  return (
    <Section title="Projects">
      {list.map((p, i) => (
        <Card key={i}>
          <Grid>
            <Input label="Project Name" value={p.name} onChange={(v) => update(i, "name", v)} />
            <Input label="Link (GitHub / Live)" value={p.link} onChange={(v) => update(i, "link", v)} />
          </Grid>
          <Label>Highlights</Label>
          {(p.bullets || []).map((b, bi) => (
            <div key={bi} className="flex gap-2 mb-2">
              <input
                className="input"
                value={b}
                onChange={(ev) => updateBullet(i, bi, ev.target.value)}
                placeholder="What did you build / achieve?"
              />
              <button onClick={() => removeBullet(i, bi)} className="px-2 rounded-xl border text-red-600">
                ✕
              </button>
            </div>
          ))}
          <button onClick={() => addBullet(i)} className="px-3 py-1 rounded-xl border hover:bg-slate-50 transition">
            + Add bullet
          </button>

          <div className="text-right">
            <button onClick={() => remove(i)} className="text-red-600 text-sm hover:underline">
              Remove
            </button>
          </div>
        </Card>
      ))}
      <button onClick={add} className="mt-2 px-3 py-2 rounded-xl border hover:bg-slate-50 transition">
        + Add Project
      </button>
    </Section>
  );
}

function Skills() {
  const { state, dispatch } = useResume();
  const list = state.skills;

  const update = (i, v) => {
    const next = [...list];
    next[i] = v;
    dispatch({ type: "SET", section: "skills", payload: next });
  };
  const add = () => dispatch({ type: "SET", section: "skills", payload: [...list, ""] });
  const remove = (i) => dispatch({ type: "SET", section: "skills", payload: list.filter((_, idx) => idx !== i) });

  return (
    <Section title="Skills">
      {list.map((s, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input className="input" value={s} onChange={(e) => update(i, e.target.value)} placeholder="e.g., React, TypeScript, Tailwind" />
          <button onClick={() => remove(i)} className="px-2 rounded-xl border text-red-600">✕</button>
        </div>
      ))}
      <button onClick={add} className="px-3 py-2 rounded-xl border hover:bg-slate-50 transition">
        + Add Skill
      </button>
    </Section>
  );
}

function Review() {
  const { state } = useResume();
  return (
    <Section title="Review">
      <pre className="bg-slate-50 border rounded-xl p-4 text-sm overflow-auto">{JSON.stringify(state, null, 2)}</pre>
      <p className="text-xs text-slate-500 mt-2">All changes auto-save. Open Preview to export as PDF.</p>
    </Section>
  );
}

/* -------------------- Mini preview -------------------- */

function MiniPreview() {
  const { state } = useResume();
  const p = state.personal;
  const skills = useMemo(() => state.skills.filter(Boolean), [state.skills]);

  return (
    <div className="border rounded-xl p-5">
      <div className="text-2xl font-bold">{p.fullName || "Your Name"}</div>
      <div className="text-slate-600">{p.title || "Title / Role"}</div>
      <div className="text-xs text-slate-500 mt-2">
        {[p.email, p.phone, p.location, p.links].filter(Boolean).join(" • ")}
      </div>

      {state.summary && <p className="mt-4 text-slate-700">{state.summary}</p>}

      {state.experience.length > 0 && (
        <div className="mt-4">
          <div className="font-semibold">Experience</div>
          <ul className="list-disc list-inside text-sm text-slate-700">
            {state.experience.slice(0, 2).map((e, i) => (
              <li key={i}>
                {e.role || "Role"} @ {e.company || "Company"} ({e.start}–{e.end})
              </li>
            ))}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div className="mt-3">
          <div className="font-semibold">Skills</div>
          <div className="text-sm text-slate-700">{skills.join(" • ")}</div>
        </div>
      )}
    </div>
  );
}

/* -------------------- Small UI helpers -------------------- */

function Section({ title, subtitle, children }) {
  return (
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-slate-500 text-sm mt-1">{subtitle}</p>}
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}

function Card({ children }) {
  return <div className="border rounded-2xl p-4 space-y-3">{children}</div>;
}

function Grid({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-3">{children}</div>;
}

function Label({ children }) {
  return <label className="block text-sm font-medium text-slate-700">{children}</label>;
}

function Input({ label, value, onChange, placeholder }) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <input
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}

function Textarea({ label, value, onChange, rows = 4, placeholder }) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <textarea
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}
