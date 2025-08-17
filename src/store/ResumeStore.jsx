// src/store/ResumeStore.jsx
import { createContext, useContext, useEffect, useReducer } from "react";

const initial = {
  personal: { fullName: "", title: "", email: "", phone: "", location: "", links: "" },
  summary: "",
  education: [],
  experience: [],
  projects: [],
  skills: [],
  template: "classic",
};

const KEY = "resume_data_v1";

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || initial;
  } catch {
    return initial;
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return { ...state, [action.section]: action.payload };

    case "PATCH":
      if (Array.isArray(state[action.section])) {
        return { ...state, [action.section]: [...state[action.section], ...action.payload] };
      }
      return { ...state, [action.section]: { ...(state[action.section] || {}), ...action.payload } };

    case "RESET":
      return initial;

    default:
      return state;
  }
}

const ResumeContext = createContext(null);

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
};

export function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, load);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state]);

  return (
    <ResumeContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeContext.Provider>
  );
}