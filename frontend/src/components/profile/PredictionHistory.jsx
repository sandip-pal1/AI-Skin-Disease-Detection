import React from "react";
import { usePredictionHistory } from "../../hooks/usePredictionHistory";
import toast from "react-hot-toast";

export default function PredictionHistory() {
  const { history, deleteHistory, clearAllHistory } = usePredictionHistory();

  const handleClearAll = () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3 p-2">
          <p className="font-black text-sm text-slate-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Are you sure?
          </p>
          <p className="text-xs text-slate-600 font-medium">
            Permanently delete all diagnostic history? This action cannot be undone.
          </p>

          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-200 hover:border-slate-300 transition-all">
              Cancel
            </button>

            <button
              onClick={async () => {
                toast.dismiss(t.id);
                await clearAllHistory();
              }}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-red-600 hover:bg-red-700 text-white transition-all shadow-md hover:shadow-lg">
              Delete All
            </button>
          </div>
        </div>
      ),
      { duration: 8000 },
    );
  };

  return (
    <div className="relative bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/30 overflow-hidden">
      {/* Decorative gradient - smaller */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      
      {/* Compact Header */}
      <div className="relative p-6 pb-4 flex items-center justify-between border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-900 tracking-tight">
              Diagnostic History
            </h3>
          </div>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider ml-10">
            Timeline of previous AI skin analyses
          </p>
        </div>

        {history.length > 0 && (
          <button
            onClick={handleClearAll}
            className="group flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-red-50 to-orange-50 text-red-600 text-[10px] font-black uppercase tracking-wider hover:from-red-600 hover:to-red-700 hover:text-white transition-all border border-red-200 hover:border-red-600 shadow-md hover:shadow-lg hover:scale-105"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            Clear Records
          </button>
        )}
      </div>

      <div className="relative p-6 pt-4">
        {history.length === 0 ? (
          <div className="py-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
              <svg
                className="w-8 h-8 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p className="text-slate-400 font-black text-sm uppercase tracking-wider">
              No Records Found
            </p>
            <p className="text-slate-500 text-xs mt-1.5 font-medium">
              Your diagnostic history will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((h, idx) => (
              <div
                key={h.id}
                className="group relative flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50/30 hover:from-white hover:to-blue-50/50 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.05}s backwards`
                }}
              >
                {/* Compact Date Badge */}
                <div className="flex flex-col items-center justify-center min-w-[60px] py-2 px-3 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50 shadow-sm">
                  <span className="text-[8px] font-black text-blue-400 uppercase tracking-wider">
                    Analysis
                  </span>
                  <span className="text-xs font-black text-blue-700 mt-0.5">
                    {h.createdAt?.toDate
                      ? h.createdAt.toDate().toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })
                      : "Recent"}
                  </span>
                </div>

                {/* Compact Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-[9px] font-black uppercase tracking-wider border border-blue-200/50 shadow-sm">
                      Diagnosis
                    </span>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {h.disease}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 font-medium italic flex items-start gap-1.5">
                    <svg className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>
                      <span className="text-slate-500 not-italic font-bold">Recommended:</span>{" "}
                      {h.treatment}
                    </span>
                  </p>
                </div>

                {/* Compact Delete Button */}
                <button
                  onClick={() => deleteHistory(h.id)}
                  className="p-2 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100 hover:scale-110 border border-transparent hover:border-red-200"
                  title="Delete this record"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Compact Footer */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
        <p className="text-[9px] text-slate-500 font-black uppercase tracking-wider flex items-center gap-1.5">
          <svg
            className="w-3.5 h-3.5 text-emerald-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          Encrypted Health Record Storage
        </p>
        <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[9px] text-slate-600 font-black uppercase tracking-wider shadow-sm">
          Total Logs: {history.length}
        </span>
      </div>
    </div>
  );
}