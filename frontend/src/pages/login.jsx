import { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (rememberMe) localStorage.setItem('user', JSON.stringify(res.user));
      navigate('/home');
    } catch (err) {
      setError("User not found. Please sign up.");
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (err) {
      setError("Google login failed.");
    }
  };

  return (
    <motion.div initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-50}}
    transition={{duration:0.4}} className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-700">Login</h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none pt-6 pb-1 text-gray-700 bg-transparent"
            />
            <label className="absolute left-0 top-1 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:text-indigo-500 transition-all">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none pt-6 pb-1 text-gray-700 bg-transparent"
            />
            <label className="absolute left-0 top-1 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:text-indigo-500 transition-all">
              Password
            </label>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <span className="text-gray-600">Remember Me</span>
            </label>
            <button type="button" onClick={() => navigate('/signup')} className="text-indigo-600 hover:underline">
              Signup
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>

          <button
            type="button"
            onClick={handleGoogle}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Login with Google
          </button>
        </form>
      </div>
    </motion.div>
  );
}