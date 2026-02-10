import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileForm from "../components/profile/ProfileForm";
import PredictionHistory from "../components/profile/PredictionHistory";
import LogoutButton from "../components/profile/LogoutButton";

export default function Profile() {
  return (
    <div className="relative min-h-screen bg-[#fcfdfe] overflow-x-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-teal-50/40 rounded-full blur-[100px]"></div>
      </div>

      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
        {/* REFINED BRAND HEADING (Smaller Scale) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3"></div>

          {/* Adjusted from text-7xl to text-5xl for a better "little bit small" fit */}
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            User <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400">
              Profile Dashboard
            </span>
          </h2>

          <p className="text-slate-500 mt-4 text-base font-medium leading-relaxed max-w-xl">
            Access your clinical identity and diagnostic history protected by
            military-grade encryption protocols.
          </p>
        </div>

        {/* PROFILE CONTENT MODULES */}
        <div className="grid grid-cols-1 gap-10">
          {/* Personal Information Module */}
          <section className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/10 to-teal-400/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative bg-white border border-slate-100 rounded-[3rem] p-1 shadow-2xl shadow-slate-200/50 overflow-hidden">
              <div className="bg-gradient-to-b from-slate-50/50 to-white rounded-[2.8rem] p-8 md:p-12">
                <ProfileForm />
              </div>
            </div>
          </section>

          {/* Diagnostic History Module (Unified Style) */}
          <section className="space-y-6">
            <div className="flex items-center gap-4 px-2">
              {/* Applied the Dashboard font style here for consistency */}

              <div className="h-px flex-grow bg-slate-100" />
            </div>

            {/* The PredictionHistory component should have its internal "Diagnostic History" 
                title removed to prevent the double-heading look you mentioned. */}
            <div className="bg-white border border-slate-100 rounded-[3rem] p-4 shadow-xl shadow-slate-100">
              <PredictionHistory />
            </div>
          </section>

          {/* System Control Module */}
          <section className="flex flex-col items-center pt-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-10"></div>
            <LogoutButton />
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Secure Session Active • Protocol v2.4.0
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
