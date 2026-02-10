import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-blue-400 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
              Advanced AI Diagnostics
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
              AI-Based{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                Skin Disease
              </span>{" "}
              Detection
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              A smart healthcare application using Deep Learning to analyze skin
              images with professional-grade accuracy, helping users take
              informed and timely medical decisions.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA */}
              <Link
                to="/predict"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-200 transition-all text-center">
                Start Skin Analysis
              </Link>

              {/* 🔽 REPLACED BUTTON */}
              <button
                onClick={() =>
                  document
                    .getElementById("diseases-section")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold transition-all text-center">
                View Supported Diseases
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-4 flex items-center gap-6 text-slate-400">
              <span className="text-sm">🔒 Secure Data</span>
              <span className="text-sm">🤖 AI Powered</span>
              <span className="text-sm">✅ 85%+ Accuracy</span>
            </div>
          </div>

          {/* RIGHT VISUAL: Clinical AI Composition */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative group w-full max-w-lg">
              {/* Decorative Background Glows - Provides that "Attractive" depth */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-teal-400/20 rounded-[3rem] blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>

              {/* Main Container */}
              <div className="relative aspect-square bg-slate-200 rounded-[3rem] overflow-hidden border border-white/50 shadow-2xl">
                {/* 1. THE BASE IMAGE (Medical Technology) */}
                <img
                  src="https://plus.unsplash.com/premium_photo-1681967018806-2bd5c0cb96bf?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Clinical Technology"
                  className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                />

                {/* 2. AI OVERLAYS (Layered on top of image) */}
                {/* Gradient Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent z-10"></div>

                {/* Animated Scanning Line - Ensure this animation is in your index.css */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_15px_rgba(96,165,250,0.8)] animate-[scan_3s_ease-in-out_infinite] z-20"></div>

                {/* Neural Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10"></div>

                {/* 3. FLOATING DIAGNOSTIC TAG */}
                <div className="absolute top-6 right-6 z-30">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white shadow-xl animate-bounce">
                    <span className="text-[10px] font-black text-blue-600 tracking-widest uppercase">
                      Analyzing Specimen...
                    </span>
                  </div>
                </div>

                {/* 4. BOTTOM CLINICAL ENGINE BADGE */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-4 shadow-2xl z-30">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                        Neural Engine v2.4
                      </span>
                      <span className="text-blue-100 text-xs font-medium">
                        Processing Diagnostic Specimen
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
