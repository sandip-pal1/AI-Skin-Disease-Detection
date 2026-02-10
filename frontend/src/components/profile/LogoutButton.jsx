import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-sm text-slate-800">
            Are you sure you want to log out from your secure session?
          </p>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-3 py-1 text-sm rounded border border-slate-200"
            >
              Cancel
            </button>

            <button
              onClick={async () => {
                toast.dismiss(t.id);
                const toastId = toast.loading("Ending secure session...");

                try {
                  await signOut(auth);
                  toast.success("Logged out successfully", { id: toastId });
                  navigate("/login");
                } catch {
                  toast.error("Logout failed. Please try again.", {
                    id: toastId,
                  });
                }
              }}
              className="px-3 py-1 text-sm rounded bg-rose-600 text-white"
            >
              Logout
            </button>
          </div>
        </div>
      ),
      { duration: 8000 }
    );
  };

  return (
    <div className="mt-8 group w-full">
      {/* 1. SECURE SESSION TERMINAL BOX */}
      <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-100/50 transition-all duration-500 group-hover:border-rose-100 group-hover:shadow-rose-100/20">
        
        <div className="flex items-center gap-5 mb-6 md:mb-0">
          {/* Pulsing Status Indicator */}
          <div className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
          </div>
          
          <div>
            <p className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] leading-none">
              Secure Session Active
            </p>
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-2">
              Encryption Protocol: <span className="text-blue-600">AES-256-GCM</span>
            </p>
          </div>
        </div>

        {/* 2. LOGOUT TRIGGER */}
        <button
          onClick={handleLogout}
          className="
            flex items-center gap-3 
            px-8 py-3 
            bg-slate-900 
            text-white 
            text-[10px] font-black 
            uppercase tracking-[0.2em] 
            rounded-2xl 
            transition-all duration-300
            hover:bg-rose-600 
            hover:shadow-[0_10px_25px_-5px_rgba(225,29,72,0.4)]
            active:scale-95
          "
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
              strokeWidth="2.5"
              d="M17 16l4-4m0 0l-4-4m4 4H9m4 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </button>
      </div>

      {/* 3. SYSTEM FOOTNOTE */}
      <div className="flex items-center justify-center gap-4 mt-6 opacity-30">
        <div className="h-px w-8 bg-slate-300"></div>
        <p className="text-[8px] font-black text-slate-500 uppercase tracking-[0.5em]">
          SkinCareAI Security Protocol v2.4.0
        </p>
        <div className="h-px w-8 bg-slate-300"></div>
      </div>
    </div>
  );
}