import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast"; // ✅ ADD

export function useUserProfile() {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!auth.currentUser) return;

        const ref = doc(db, "users", auth.currentUser.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setUserData(snap.data());
        }
      } catch (err) {
        toast.error("Failed to load profile data");
      }
    };

    fetchUser();
  }, []);

  const updateProfile = async () => {
    if (!userData) return;

    // 🔒 Validation
    if (!userData.name?.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    if (userData.age < 0 || userData.age > 200) {
      toast.error("Age must be between 0 and 200");
      return;
    }

    if (!/^\d{10}$/.test(userData.phone || "")) {
      toast.error("Phone number must be 10 digits");
      return;
    }

    const toastId = toast.loading("Saving profile...");

    try {
      setSaving(true);

      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name: userData.name,
        age: Number(userData.age),
        gender: userData.gender,
        phone: userData.phone,
      });

      toast.success("Profile updated successfully", { id: toastId });
      setIsEditing(false);
    } catch (err) {
      toast.error("Failed to update profile", { id: toastId });
    } finally {
      setSaving(false);
    }
  };

  return {
    userData,
    setUserData,
    isEditing,
    setIsEditing,
    saving,
    updateProfile,
  };
}
