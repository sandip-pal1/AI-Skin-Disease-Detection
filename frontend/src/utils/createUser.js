import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const createUserIfNotExists = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName || "Patient",
      age: "",
      gender: "",
      phone: "",
      email: user.email,
      provider: user.providerData[0]?.providerId || "password",
      createdAt: serverTimestamp(),
    });
  }
};
