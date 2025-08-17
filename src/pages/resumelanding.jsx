// LandingPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingPage() {
  const navigate = useNavigate();

  const templateImages = [
    "/template1.jpg",
    "/template2.jpg",
    "/template3.jpg",
    "/template4.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <div className="w-screen bg-gray-50 min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <h1 className="text-5xl font-extrabold mb-4 animate-fadeInUp">
            Build Your Professional Resume in Minutes
          </h1>
          <p className="text-lg max-w-2xl mb-6">
            Create an ATS-friendly, modern, and professional resume that stands out to recruiters.  
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/maker")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-lg transition"
            >
              Create Resume
            </button>
            <button
              onClick={() => navigate("/templets")}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg transition"
            >
              Templates
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Resume Builder?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <img src="/benefit1.jpg" alt="ATS Friendly" className="w-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">ATS Friendly</h3>
            <p>Ensure your resume passes automated screenings with ease.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <img src="/benefit3.jpg" alt="Customizable" className="w-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Fully Customizable</h3>
            <p>Edit every section to match your personal style and career goals.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl text-center hover:shadow-lg transition">
            <img src="/benefit2.jpg" alt="Fast" className="w-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2">Fast & Easy</h3>
            <p>Create a professional resume in under 5 minutes.</p>
          </div>
        </div>
      </section>

      {/* Template Slider */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Resume Templates</h2>
        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            {templateImages.map((src, index) => (
              <div key={index} className="px-4">
                <img src={src} alt={`Template ${index + 1}`} className="rounded-lg shadow-lg w-full" />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}