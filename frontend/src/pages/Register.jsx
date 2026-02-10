import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { createUserIfNotExists } from "../utils/createUser";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    const toastId = toast.loading("Creating your account...");

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await createUserIfNotExists(result.user);

      toast.success("Account created successfully", { id: toastId });
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Registration failed", { id: toastId });
    }
  };

  const inputStyle =
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white/90 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400 shadow-sm";
  const labelClass =
    "text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block";

  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
      
      {/* Enhanced BACKGROUND IMAGE with medical/clinical theme */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070')`,
        }}
      >
        {/* Enhanced Gradient Overlay - softer and more professional */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-slate-50/85 to-teal-50/90"></div>
        
        {/* Subtle pattern overlay for texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Enhanced Brand Identity with subtle glow */}
        <div className="flex flex-col items-center mb-10 animate-in fade-in slide-in-from-top duration-700">
          <div className="relative mb-4">
            {/* Animated glow effect */}
            <div className="absolute inset-0 bg-blue-400 rounded-[1.25rem] opacity-30 blur-xl animate-pulse"></div>
            <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[1.25rem] flex items-center justify-center shadow-2xl shadow-blue-300/50 hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-black">+</span>
            </div>
          </div>
          
          {/* BRAND NAME WITH GRADIENT */}
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            SkinCare<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">AI</span>
          </h1>
          
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">
            Create Account
          </p>
        </div>

        {/* Enhanced Registration Card with better shadow and border */}
        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl shadow-slate-300/50 border border-white/80 animate-in fade-in slide-in-from-bottom duration-700" style={{animationDelay: '100ms'}}>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">Get Started</h2>
            <p className="text-slate-500 text-xs mt-1 font-medium">
              Create a clinical account to start analysis.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                placeholder="name@clinical.com"
                className={inputStyle}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Create Password</label>
              <input
                type="password"
                placeholder="Min. 6 characters"
                className={inputStyle}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="pt-2">
              {/* Enhanced button with gradient and shimmer effect */}
              <button
                onClick={handleRegister}
                className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-300/50 hover:shadow-blue-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10">Sign Up</span>
              </button>
            </div>
          </div>

          <p className="text-[11px] text-center mt-8 font-bold text-slate-400 uppercase tracking-widest">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 transition-colors font-black">
              Sign In
            </Link>
          </p>
        </div>

        {/* Enhanced Legal Disclaimer Footer */}
        <div className="mt-10 px-6 text-center animate-in fade-in duration-1000" style={{animationDelay: '200ms'}}>
          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
            By signing up, you agree to our{" "}
            <span className="text-slate-600 underline decoration-slate-300 hover:text-blue-600 transition-colors cursor-pointer">Privacy Policy</span> and{" "}
            <span className="text-slate-600 underline decoration-slate-300 hover:text-blue-600 transition-colors cursor-pointer">Terms of Service</span>.
          </p>
        </div>

        {/* Additional decorative elements - floating medical icons */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}