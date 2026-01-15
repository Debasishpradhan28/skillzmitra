
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/ui/Navbar";
import Landingpage from "./pages/landingpage";
import Features from "./components/ui/Features";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Quiz from "./pages/quiz";
import SkillMitraHome from './pages/home';
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./routes/PrivateRoute";
import QuizSetup from "./pages/quizSetup";
import QuizGame from "./pages/QuizPlay";
import ProfilePage from "./pages/ProfilePage";
import { ThemeProvider } from "./context/ThemeProvider";
import ResumeLanding from "./pages/ResumeLanding";
import ResumePage from "./pages/ResumePage";
import ResumeMaker from "./pages/ResumeBuilder";
import ATSChecker from "./pages/ATSchecker";
import ATSResult from "./pages/ATSresult";

// import { ThemeProvider } from "./context/ThemeProvider";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <ThemeProvider>
    <>
     <Toaster position="top-right" reverseOrder={false}/>
    <AnimatePresence mode="wait">
      <div className="pt-20"> {/* Pushes content below fixed navbar */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/quizSetup" element={<QuizSetup/>}/>
          <Route path="/quizPlay" element={<QuizGame/>}/>
          <Route path="/resume" element={<ResumeLanding />} />
          <Route path="/resume/templates" element={<ResumePage />} />
          <Route path="/maker" element={<ResumeMaker />} />
          <Route path="/ats-checker" element={<ATSChecker />} />
          <Route path="/ats-result" element={<ATSResult />} />

          <Route path="/home" element={<PrivateRoute><SkillMitraHome/></PrivateRoute>}/>
        </Routes>
      </div>
    </AnimatePresence>
   </> 
   </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
