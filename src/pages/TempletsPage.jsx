// src/pages/TemplatesPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResume } from "../store/ResumeStore";

/**
 * TemplatesPage
 * - Fetches template metadata (tries registry.jsonresume.org, falls back to local list)
 * - Shows grid of templates with preview and "Use this template"
 * - On use: saves template key in ResumeStore and navigates to /maker (resume maker)
 */

const FALLBACK_TEMPLATES = [
  {
    id: "classic",
    title: "Classic (Minimal)",
    desc: "Clean, single-column, ATS-friendly layout.",
    thumb: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=60",
  },
  {
    id: "modern",
    title: "Modern (Sidebar)",
    desc: "Contemporary two-column layout with sidebar.",
    thumb: "https://images.unsplash.com/photo-1526378721839-5f61d9d1b6d1?w=800&q=60",
  },
  {
    id: "creative",
    title: "Creative (Color Accent)",
    desc: "Bold headings and accent color for creative roles.",
    thumb: "https://images.unsplash.com/photo-1528977695564-586dec6b7d18?w=800&q=60",
  },
];

export default function TemplatesPage() {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);
  const { dispatch } = useResume();
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    async function fetchTemplates() {
      setLoading(true);
      try {
        // Try fetching JSON Resume registry (public). If it fails, fallback.
        const res = await fetch("https://registry.jsonresume.org/themes.json");
        if (!res.ok) throw new Error("No registry");
        const data = await res.json();
        // data is an object keyed by theme slug, map to small array
        const mapped = Object.entries(data).slice(0, 12).map(([key, meta], i) => ({
          id: key,
          title: meta.title || key,
          desc: meta.description || "Community theme",
          // if theme provides preview, use it; otherwise use fallback photos
          thumb: meta.preview || `https://via.placeholder.com/400x560?text=${encodeURIComponent(meta.title || key)}`,
        }));
        if (mounted) setTemplates(mapped);
      } catch (err) {
        // fallback
        if (mounted) setTemplates(FALLBACK_TEMPLATES);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchTemplates();
    return () => { mounted = false; };
  }, []);

  const useTemplate = (templateId) => {
    dispatch({ type: "SET", section: "template", payload: templateId });
    // Navigate to maker so user can fill details pre-applied to this template
    navigate("/maker");
  };

  return (
    <div className="w-screen min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Choose a Template</h1>
        <p className="text-sm text-gray-600 mb-6">
          Pick a template you like — you can edit everything after selecting and download as PDF.
        </p>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse h-72" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {templates.map((t) => (
              <div key={t.id} className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
                <div className="h-72 bg-gray-100">
                  <img src={t.thumb} alt={t.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{t.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t.desc}</p>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setPreview(t)}
                      className="px-3 py-2 rounded-md border text-sm hover:bg-gray-50"
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => useTemplate(t.id)}
                      className="ml-auto px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
                    >
                      Use this template
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Preview Modal */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-lg font-semibold">{preview.title}</h3>
                  <p className="text-sm text-gray-500">{preview.desc}</p>
                </div>
                <button
                  onClick={() => setPreview(null)}
                  className="px-3 py-1 rounded-md border"
                >
                  Close
                </button>
              </div>
              <div className="p-6 flex gap-6">
                <div className="flex-1">
                  <img src={preview.thumb} alt={preview.title} className="w-full rounded" />
                </div>
                <div className="w-80">
                  <h4 className="font-semibold mb-2">Preview</h4>
                  <p className="text-sm text-gray-600 mb-4">This is a visual preview; actual resume in the maker may adapt slightly.</p>
                  <button
                    onClick={() => useTemplate(preview.id)}
                    className="w-full px-3 py-2 rounded-md bg-indigo-600 text-white"
                  >
                    Use this template
                  </button>
                  <button
                    onClick={() => setPreview(null)}
                    className="w-full mt-2 px-3 py-2 rounded-md border"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
