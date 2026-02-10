import React, { useState } from "react";
import toast from "react-hot-toast";
import { predictSkinDisease } from "../../api";
import { auth, db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getUserLocation } from "../../utils/location";

import ImageUpload from "./ImageUpload";
import PredictionResult from "./PredictionResult";

export default function PredictContainer() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clinics, setClinics] = useState([]);

  const handleImageChange = (file) => {
    setImage(file);
    setResult(null);
    setClinics([]);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handlePredict = async () => {
    if (!image) {
      toast.error("Please select an image first");
      return;
    }

    const toastId = toast.loading("Analyzing skin image...");
    setLoading(true);

    try {
      const data = await predictSkinDisease(image);
      setResult(data);

      if (data.status === "uncertain") {
        toast("Prediction confidence is low", {
          icon: "⚠️",
          id: toastId,
        });
      } else {
        toast.success("Prediction completed", { id: toastId });
        savePrediction(data);
      }
    } catch {
      toast.error("Prediction failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const savePrediction = async (data) => {
    if (!auth.currentUser) return;
    await addDoc(collection(db, "prediction_history"), {
      userId: auth.currentUser.uid,
      disease: data.disease,
      treatment: data.treatment,
      doctor_advice: data.doctor_advice,
      createdAt: serverTimestamp(),
    });
  };

  const findNearbyClinics = async () => {
    const toastId = toast.loading("Finding nearby clinics...");
    try {
      const location = await getUserLocation();
      const res = await fetch(
        `http://127.0.0.1:5000/api/nearby-clinics?lat=${location.lat}&lng=${location.lng}`,
      );
      const data = await res.json();
      setClinics(data);
      toast.success("Clinics found", { id: toastId });
    } catch {
      toast.error("Unable to fetch clinics", { id: toastId });
    }
  };

  return (
    /* ✅ FULL-WIDTH DASHBOARD LAYOUT */
    <div className="max-w-[1440px] mx-auto px-6 py-10 lg:py-16">
      {/* ===== ATTRACTIVE HEADER SECTION ===== */}
      <div className="mb-12 border-b border-slate-100 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            AI Diagnostic Module
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
          Skin Disease <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Prediction</span>
        </h2>
        <p className="text-slate-500 text-sm md:text-base mt-3 max-w-2xl font-medium leading-relaxed">
          Upload a clinical skin image for AI-assisted analysis. Deep learning
          models evaluate dermatological patterns to identify potential skin
          conditions.
        </p>
      </div>

      {/* ===== TWO-COLUMN DASHBOARD GRID ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT: Upload Card (Occupies 5/12 columns) */}
        <section className="lg:col-span-5 lg:sticky lg:top-24">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50">
            <ImageUpload
              preview={preview}
              onImageSelect={handleImageChange}
              onPredict={handlePredict}
              loading={loading}
            />
          </div>
        </section>

        {/* RIGHT: Results & Analytics (Occupies 7/12 columns) */}
        <section className="lg:col-span-7">
          {result ? (
            <PredictionResult
              result={result}
              clinics={clinics}
              onFindClinics={findNearbyClinics}
            />
          ) : (
            /* Empty State Placeholder */
            <div className="h-full min-h-[500px] border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center p-12 text-center bg-slate-50/50">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-6 text-slate-200">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-400">
                Analysis Pending
              </h4>
              <p className="text-slate-400 text-sm mt-2 max-w-xs">
                Please upload an image and click "Analyze Specimen" to generate
                a detailed clinical report.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
