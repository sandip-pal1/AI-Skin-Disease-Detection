import React from "react";
import { useUserProfile } from "../../hooks/useUserProfile";

export default function ProfileForm() {
  const {
    userData,
    isEditing,
    saving,
    error,
    setIsEditing,
    updateProfile,
    setUserData,
  } = useUserProfile();

  if (!userData) return null;

  const fieldClass = `w-full transition-all duration-300 rounded-xl px-4 py-3 text-sm font-semibold outline-none ${
    isEditing
      ? "bg-white border-2 border-blue-300 ring-2 ring-blue-50 text-slate-800 focus:border-blue-500 focus:ring-blue-100"
      : "bg-slate-50 border-2 border-slate-100 text-slate-500 cursor-not-allowed"
  }`;

  const labelClass =
    "text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2 block";

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/30 overflow-hidden">
      {/* Decorative gradient overlay - smaller */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-br from-blue-50 via-teal-50 to-transparent opacity-50 pointer-events-none"></div>

      {/* Compact Top Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse"></div>
          <span className="text-white/90 text-[10px] font-black uppercase tracking-wider">
            Medical Record #7721
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
        </div>
      </div>

      <div className="relative p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Compact Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-md opacity-30 animate-pulse"></div>
              <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-300 ring-2 ring-blue-100">
                <span className="text-white text-xl font-black">
                  {userData.name?.charAt(0) || "P"}
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-900 tracking-tight">
                Patient Profile
              </h3>
              <div className="flex items-center gap-1.5 mt-1">
                <svg
                  className="w-3 h-3 text-emerald-500"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-wider">
                  Verified Clinical User
                </p>
              </div>
            </div>
          </div>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-gradient-to-r from-slate-100 to-slate-50 hover:from-blue-100 hover:to-blue-50 text-slate-700 hover:text-blue-700 rounded-xl text-xs font-black uppercase tracking-wider transition-all border border-slate-200 hover:border-blue-200 shadow-md hover:shadow-lg hover:scale-105">
              <span className="flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Modify Info
              </span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Full Name */}
          <div className="md:col-span-2">
            <label className={labelClass}>Legal Full Name</label>
            <input
              disabled={!isEditing}
              className={fieldClass}
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              placeholder="Enter your full name"
            />
          </div>

          {/* Age */}
          <div>
            <label className={labelClass}>Date of Birth / Age</label>
            <input
              type="number"
              disabled={!isEditing}
              className={fieldClass}
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
              placeholder="Enter age"
            />
          </div>

          {/* Gender */}
          <div>
            <label className={labelClass}>Biological Gender</label>
            <div className="relative">
              <select
                disabled={!isEditing}
                className={`${fieldClass} appearance-none`}
                value={userData.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              {isEditing && (
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="md:col-span-2">
            <label className={labelClass}>Primary Contact Email</label>
            <div className="relative">
              <input
                disabled
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-400 font-semibold text-sm cursor-not-allowed"
                value={userData.email}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-100 to-emerald-50 text-[10px] font-black text-emerald-700 uppercase border border-emerald-200 shadow-sm">
                <div className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </div>
                Secure
              </span>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm font-bold shadow-md">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <span className="uppercase tracking-wide">{error}</span>
          </div>
        )}

        {isEditing && (
          <div className="mt-8">
            <button
              onClick={updateProfile}
              disabled={saving}
              className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-black text-sm uppercase tracking-wider shadow-xl shadow-blue-300/40 hover:shadow-blue-400/50 transition-all flex items-center justify-center gap-2 disabled:from-slate-300 disabled:to-slate-400 disabled:shadow-none overflow-hidden hover:scale-[1.01] active:scale-100">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <span className="relative z-10 flex items-center gap-2">
                {saving ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Syncing Records...
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Save Profile Changes
                  </>
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
