import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position to trigger smooth transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (path) =>
    `relative px-5 py-2 text-sm font-bold transition-all duration-500 rounded-full group ${
      location.pathname === path
        ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-200"
        : "text-slate-600 hover:text-blue-600 hover:bg-blue-50/50"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-lg py-3 shadow-md" 
          : "bg-white/90 backdrop-blur-xl py-5 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-5 flex justify-between items-center transition-all duration-500">
        
        {/* Enhanced App Brand Logo */}
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-400 rounded-xl opacity-20 blur-md group-hover:opacity-30 transition-opacity"></div>
            <div className={`relative transition-all duration-500 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 group-hover:rotate-3 ${
              isScrolled ? "w-8 h-8" : "w-10 h-10"
            }`}>
              <span className={`font-black text-white transition-all duration-500 ${
                isScrolled ? "text-lg" : "text-xl"
              }`}>+</span>
            </div>
          </div>
          
          <h1 className={`font-black tracking-tight text-slate-800 group-hover:text-blue-600 transition-all duration-500 ${
            isScrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
          }`}>
            SkinCare<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">AI</span>
          </h1>
        </Link>

        {/* Enhanced Navigation Links */}
        <div className="flex items-center space-x-1">
          {["/home", "/predict", "/profile"].map((path) => (
            <Link key={path} to={path} className={linkClass(path)}>
              <span className="relative z-10 capitalize">
                {path.replace("/", "")}
              </span>
              {location.pathname === path && (
                <span className="absolute inset-0 bg-white/20 rounded-full blur-sm"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}