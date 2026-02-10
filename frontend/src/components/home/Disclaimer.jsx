export default function Disclaimer() {
  return (
    <div className="w-full px-6 py-12 border-t border-slate-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          
          {/* Minimalist Notice Badge */}
          <div className="flex-shrink-0 flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 border border-amber-100/50">
            <svg 
              className="w-4 h-4 text-amber-600" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">
              Notice
            </span>
          </div>

          {/* Smooth Footnote Text */}
          <p className="text-slate-500 text-sm md:text-base leading-relaxed italic">
            This platform is for <span className="text-slate-700 font-medium not-italic">educational and research purposes only</span>. 
            AI predictions are not medical diagnoses. Always consult a 
            <span className="text-blue-600 font-medium not-italic"> certified dermatologist </span> 
            for professional skin health concerns.
          </p>
          
        </div>
      </div>
    </div>
  );
}