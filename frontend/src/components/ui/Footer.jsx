// export default function Footer() {
//   return (
//     <footer className="bg-neutral-100 py-6 text-center text-sm text-gray-500 mt-16">
//       <div className="space-x-6">
//         <a href="#" className="hover:underline">About</a>
//         <a href="#" className="hover:underline">Contact</a>
//         <a href="#" className="hover:underline">Terms</a>
//         <a href="#" className="hover:underline">Privacy</a>
//       </div>
//       <p className="mt-4">&copy; {new Date().getFullYear()} SkillSync. All rights reserved.</p>
//     </footer>
//   )
// }

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLanguage } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-900 to-purple-700 text-white py-12 px-6 md:px-20 mt-10">
      <div className="grid md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h4 className="font-bold text-lg mb-4">About SkillMitra</h4>
          <p>
            SkillMitra is your trusted career companion—offering AI-powered guidance, local-language access,
            and personalized growth for every learner.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-4">Contact Us</h4>
          <div className="flex items-center gap-2 mb-2">
            <MdEmail /> support@skillmitra.in
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MdPhone /> +91-9876543210
          </div>
          <div className="flex items-center gap-2">
            📍 Bhubaneswar, India
          </div>
        </div>

        {/* Language Support */}
        <div>
          <h4 className="font-bold text-lg mb-4">Language Support</h4>
          <div className="flex items-center gap-2 mb-2">
            <MdLanguage /> Multilingual Interface
          </div>
          <p>Supports all major Indian languages with real-time translation.</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="hover:text-cyan-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm border-t border-purple-400 pt-6">
        © {new Date().getFullYear()} SkillMitra. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;