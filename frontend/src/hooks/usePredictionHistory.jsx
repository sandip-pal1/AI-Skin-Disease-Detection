import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
  writeBatch, // Added for bulk deletion
} from "firebase/firestore";
import toast from "react-hot-toast";

export function usePredictionHistory() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const q = query(
          collection(db, "prediction_history"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc"),
        );

        const snapshot = await getDocs(q);
        setHistory(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch {
        toast.error("Failed to load prediction history");
      }
    };

    fetchHistory();
  }, []);

  // 🔒 CONFIRM INDIVIDUAL DELETE
  const deleteHistory = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-sm">
            ⚠️ Are you sure you want to delete this prediction?
          </p>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 text-sm rounded border">
              Cancel
            </button>
            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const loadingId = toast.loading("Deleting prediction...");
                try {
                  await deleteDoc(doc(db, "prediction_history", id));
                  setHistory((prev) => prev.filter((item) => item.id !== id));
                  toast.success("Prediction deleted", { id: loadingId });
                } catch {
                  toast.error("Failed to delete prediction", { id: loadingId });
                }
              }}
              className="px-3 py-1 text-sm rounded bg-red-600 text-white">
              Delete
            </button>
          </div>
        </div>
      ),
      { duration: 6000 },
    );
  };

  // 🚨 NEW: CLEAR ALL HISTORY LOGIC
  const clearAllHistory = async () => {
    const user = auth.currentUser;
    if (!user || history.length === 0) return;

    const loadingId = toast.loading("Clearing all records...");
    const batch = writeBatch(db);

    try {
      // Add each document deletion to the batch
      history.forEach((record) => {
        const recordRef = doc(db, "prediction_history", record.id);
        batch.delete(recordRef);
      });

      // Commit the batch to Firestore
      await batch.commit();

      // Clear local state
      setHistory([]);
      toast.success("All clinical records cleared", { id: loadingId });
    } catch (error) {
      console.error("Clear all error:", error);
      toast.error("Failed to clear records", { id: loadingId });
    }
  };

  return { history, deleteHistory, clearAllHistory };
}
