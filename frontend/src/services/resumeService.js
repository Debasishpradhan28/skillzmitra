import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const saveResume = async (userId, data, templateKey) => {
  await addDoc(collection(db, "resumes", userId, "items"), {
    templateKey,
    data,
    createdAt: new Date(),
  });
};

export const fetchResumeTemplates = async () => {
  try {
    const snapshot = await getDocs(collection(db, "resumeTemplates"));
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching resume templates:", error);
    return [];
  }
};

