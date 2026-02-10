import { useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { createUserIfNotExists } from "../utils/createUser";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
    const toastId = toast.loading("Logging in...");
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      await createUserIfNotExists(result.user);
      toast.success("Login successful", { id: toastId });
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Login failed", { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Signing in with Google...");
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createUserIfNotExists(result.user);
      toast.success("Login successful", { id: toastId });
      navigate("/home");
    } catch (error) {
      toast.error(error.message || "Google login failed", { id: toastId });
    }
  };

  const inputStyle =
    "w-full px-5 py-3.5 rounded-2xl border border-slate-200 bg-white/90 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400 shadow-sm";

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
          
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            SkinCare<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">AI</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
            Clinical Diagnostic Portal
          </p>
        </div>

        {/* Enhanced Login Card with better shadow and border */}
        <div className="bg-white/95 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl shadow-slate-300/50 border border-white/80 animate-in fade-in slide-in-from-bottom duration-700" style={{animationDelay: '100ms'}}>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900">Sign In</h2>
            <p className="text-slate-500 text-xs mt-1 font-medium">
              Enter your credentials to access the neural engine.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">
                Email Address
              </label>
              <input
                type="email"
                className={inputStyle}
                placeholder="name@clinical.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">
                Password
              </label>
              <input
                type="password"
                className={inputStyle}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            
            <button
              onClick={handleLogin}
              className="group relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-300/50 hover:shadow-blue-400/60 transition-all hover:scale-[1.02] active:scale-[0.98] mt-6 overflow-hidden"
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Log In</span>
            </button>
          </div>

          {/* Enhanced Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                OR
              </span>
            </div>
          </div>

          {/* Enhanced Google button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-teal-50/50 py-3.5 rounded-2xl flex justify-center items-center gap-3 transition-all group shadow-md hover:shadow-lg hover:scale-[1.02]"
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
              alt="Google"
            />
            <span className="text-xs font-black text-slate-600 uppercase tracking-widest">
              Sign in with Google
            </span>
          </button>

          <p className="text-[11px] text-center mt-8 font-bold text-slate-400 uppercase tracking-widest">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 transition-colors font-black"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Enhanced Footer Security Note */}
        <div className="mt-10 flex items-center justify-center gap-3 animate-in fade-in duration-1000" style={{animationDelay: '200ms'}}>
          <div className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.3em]">
            Secure Clinical Session
          </p>
        </div>

        {/* Additional decorative elements - floating medical icons */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  );
}