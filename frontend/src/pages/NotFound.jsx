import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fafc] text-center px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute opacity-[0.03] pointer-events-none">
        <svg width="400" height="400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19 8v8l-7 3.5L5 16V8l7-3.2z" />
        </svg>
      </div>

      {/* Brand Identity */}
      <div className="mb-10 flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100 mb-4">
          <span className="text-white text-xl font-black">+</span>
        </div>
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
          SkinCareAI System Status
        </p>
      </div>

      {/* Error Content */}
      <div className="relative">
        <h1 className="text-8xl md:text-9xl font-black text-slate-200 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Invalid <span className="text-blue-600">Endpoint</span>
          </h2>
        </div>
      </div>

      <p className="text-slate-500 text-sm md:text-base mt-6 max-w-sm leading-relaxed font-medium">
        The requested clinical resource could not be located. The link may be
        broken or the directory has moved.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-100 transition-all active:scale-[0.98]">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Return to Dashboard
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-10 py-4 rounded-2xl border-2 border-slate-200 text-slate-500 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
          Previous Page
        </button>
      </div>

      {/* Security Signature */}
      <p className="mt-16 text-[9px] text-slate-300 font-bold uppercase tracking-[0.4em]">
        SkinCareAI Navigation Protocol v2.4.0
      </p>
    </div>
  );
}
