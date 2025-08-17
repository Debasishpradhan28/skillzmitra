import React from "react";
import { Link } from "react-router-dom";
import TemplateList from "../components/ui/Templets";
import PreviewDownload from "./PreviewDownload";

function ResumePage() {
  return (
    <div className="w-screen min-h-screen items-center justify-center p-6">
      <h1 className="text-3xl font-bold">Resume Maker</h1>
      
      <p className="mt-4 text-gray-600">
        Create your professional resume with ease.
      </p>

      <Link 
        to="/resumeland" 
        className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Landing Page
      </Link>
      <Link 
        to="/home" 
        className="inline-block mt-6 px-6 py-2 bg-green-600 text-black rounded-lg shadow hover:bg-white-700 transition"
      >
        Go Back
      </Link>
    </div>
  );
}

export default ResumePage;