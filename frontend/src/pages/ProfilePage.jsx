import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // your firebase config
import { Edit, Save } from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    goal: "",
    gender: "",
    language: "",
    address: ""
  });

  const auth = getAuth();
  const user = auth.currentUser;

  // Fetch profile data
  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    const docRef = doc(db, "profiles", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProfileData(docSnap.data());
      setFormData(docSnap.data());
    }
  };

  const handleSave = async () => {
    if (!user) return;
    await setDoc(doc(db, "profiles", user.uid), formData);
    setProfileData(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Profile</h1>

        {!isEditing && profileData ? (
          <>
            <div className="space-y-2">
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Email:</strong> {profileData.email}</p>
              <p><strong>Phone:</strong> {profileData.phone}</p>
              <p><strong>Skills:</strong> {profileData.skills}</p>
              <p><strong>Goal:</strong> {profileData.goal}</p>
              <p><strong>Gender:</strong> {profileData.gender}</p>
              <p><strong>Language:</strong> {profileData.language}</p>
              <p><strong>Address:</strong> {profileData.address}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-6 w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Edit size={18} /> Edit Profile
            </button>
          </>
        ) : (
          <>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
                readOnly
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Skills"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <input
                type="text"
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                placeholder="Goal"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                placeholder="Language"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full p-2 rounded-lg bg-gray-700 focus:outline-none"
              ></textarea>
            </div>
            <button
              onClick={handleSave}
              className="mt-6 w-full bg-green-500 hover:bg-green-600 py-2 rounded-lg flex items-center justify-center gap-2"
            >
              <Save size={18} /> Save
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}