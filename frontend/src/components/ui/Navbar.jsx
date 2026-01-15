// import { Button } from "@/components/ui/button";
// import React from "react";
// import { Link } from "react-router-dom";
// import ThemeToggle from "./Toogle"; 
// import { useAuth } from "@/context/Authcontext";
// import { auth } from "@/firebase";
// import { signOut } from "firebase/auth";

// export default function Navbar() {
//   return (
//     <nav className="w-full flex items-center justify-between px-6 py-4 shadow bg-white dark:bg-gray-900 fixed top-0 z-50">
//       <h1 className="text-xl font-bold text-primary dark:text-white">SkillMitra</h1>

//       <div className="flex items-center space-x-4">
//         <div className="hidden md:flex space-x-4">
//           <Link to="/home"><Button variant="ghost">Home</Button></Link>
//           <Link to="/features" className="hover:underline"><Button variant="ghost">Features</Button></Link>
//           <Link to="/about"><Button variant="ghost">About</Button></Link>
//           <Link to="/contact"><Button variant="ghost">Contact</Button></Link>
  

//           <Link to="/quiz"><Button variant="ghost">Quiz</Button></Link>
//           <Link to="/login"><Button variant="ghost">Login</Button></Link>
//         </div>

//         {/* Theme toggle button */}
//         <ThemeToggle />
//       </div>
//     </nav>
//   );
// }


import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-black z-10">
      <div className="text-xl font-semibold tracking-wide">SKILL MITRA</div>
      {/* Empty right side to balance layout */}
      <div></div>
    </nav>
  );
};

export default Navbar;