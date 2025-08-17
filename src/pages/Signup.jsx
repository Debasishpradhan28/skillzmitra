import { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Email already exists. Please log in.');
      } else {
        setError('Signup failed. Try again.');
      }
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate('/home');
    } catch (err) {
      setError("Google signup failed.");
    }
  };

  return (
    <motion.div initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    exit={{opacity:0,y:-50}}
    transition={{duration:0.4}} className="w-screen min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700">Sign Up</h2>

        {error && <p className="text-red-600 mb-4 text-sm">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 focus:border-green-500 focus:outline-none pt-6 pb-1 text-gray-700 bg-transparent"
            />
            <label className="absolute left-0 top-1 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:text-green-500 transition-all">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border-b-2 border-gray-300 focus:border-green-500 focus:outline-none pt-6 pb-1 text-gray-700 bg-transparent"
            />
            <label className="absolute left-0 top-1 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-2 peer-focus:text-green-500 transition-all">
              Password
            </label>
          </div>

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-gray-700">
              Show Password
            </label>
          </div>

          <div className="flex justify-between text-sm">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="text-green-600 hover:underline"
            >
              Already have an account? Login
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Sign Up
          </button>

          <button
            type="button"
            onClick={handleGoogleSignup}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>
        </form>
      </div>
    </motion.div>
  );
}