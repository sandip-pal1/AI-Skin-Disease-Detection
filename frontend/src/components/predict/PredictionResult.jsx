export default function PredictionResult({ result, clinics, onFindClinics }) {
  if (!result) return null;

  return (
    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* 🔴 COMPACT UNCERTAIN CASE */}
      {result.status === "uncertain" ? (
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 text-center shadow-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-200 rounded-full blur-3xl opacity-20"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-red-200 to-red-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-7 h-7 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-black text-red-900 mb-2">Analysis Uncertain</h3>
            <p className="text-sm text-red-800 leading-relaxed font-medium max-w-md mx-auto">{result.message}</p>
            
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-red-300 text-red-700 text-xs font-black shadow-md">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Confidence: {result.confidence}%
            </div>
          </div>
        </div>
      ) : (
        <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/40 overflow-hidden">
          {/* Decorative gradient - smaller */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-50 via-teal-50 to-transparent opacity-40"></div>
          
          {/* COMPACT Header Section */}
          <div className="relative bg-gradient-to-br from-slate-50 to-white p-6 border-b border-slate-100">
            <div className="flex justify-between items-start mb-5">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1.5 rounded-xl uppercase tracking-wider border border-blue-200/50 shadow-sm mb-3">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  AI Analysis Result
                </span>
                
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-900 tracking-tight">
                  {result.disease}
                </h3>
              </div>
              
              <div className="text-right">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">Risk Level</p>
                <span className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase border shadow-md ${
                  result.risk_level === 'High' ? 'bg-gradient-to-r from-red-100 to-red-50 text-red-700 border-red-200' : 
                  result.risk_level === 'Medium' ? 'bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 border-amber-200' : 
                  'bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {result.risk_level}
                </span>
              </div>
            </div>

            {/* COMPACT Confidence Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-black">
                <span className="text-slate-600 uppercase tracking-wide">Diagnostic Confidence</span>
                <span className="text-blue-600 text-base">{result.confidence}%</span>
              </div>
              <div className="relative w-full bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: `${result.confidence}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

          {/* COMPACT Detailed Info Section */}
          <div className="p-6 grid md:grid-cols-2 gap-6 text-sm bg-white">
            <div className="space-y-5">
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">Description</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm font-medium pl-3 border-l-2 border-blue-100">{result.description}</p>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-wide">Suggested Treatment</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm font-medium pl-3 border-l-2 border-teal-100">{result.treatment}</p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-2xl border border-blue-100/50 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  <h4 className="font-black text-blue-900 text-sm">Doctor's Advice</h4>
                </div>
                <p className="text-blue-800 text-sm leading-relaxed font-medium italic">"{result.doctor_advice}"</p>
              </div>

              {result.lifestyle_tips && (
                <div>
                  <h4 className="font-black text-slate-900 mb-3 text-sm uppercase tracking-wide">Lifestyle & Care Tips</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {result.lifestyle_tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm font-medium p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* COMPACT Clinical Search CTA */}
          <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/30 border-t border-slate-100">
            <button
              onClick={onFindClinics}
              className="group relative w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-black shadow-xl shadow-blue-300/40 hover:shadow-blue-400/50 transition-all overflow-hidden hover:scale-[1.01] active:scale-100"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find Nearest Specialized Clinics
              </span>
            </button>
            
            {/* COMPACT AI Warning */}
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-[11px] text-amber-900 font-bold leading-relaxed">
                  <span className="uppercase tracking-wide">Important:</span> This is an AI-generated analysis and <span className="font-black">cannot replace a professional doctor's diagnosis</span>. Use this information for preliminary guidance only.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🏥 COMPACT CLINIC CARDS */}
      {clinics.length > 0 && (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex items-center gap-2 px-1">
            <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
            <h4 className="text-lg font-black text-slate-900 tracking-tight">Nearby Clinical Facilities</h4>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {clinics.map((c, idx) => (
              <div
                key={c.id}
                className="group bg-white border border-slate-100 p-4 rounded-xl flex justify-between items-center hover:shadow-xl hover:shadow-slate-200/40 hover:border-blue-200 transition-all hover:-translate-y-0.5"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s backwards`
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all shadow-md">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  <div>
                    <p className="font-black text-slate-800 group-hover:text-blue-600 transition-colors text-base">{c.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-[10px] font-bold text-slate-500">Distance:</span>
                      <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-tight border border-emerald-200">
                        {c.distance}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps?q=${c.lat},${c.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-slate-100 to-slate-50 text-blue-600 text-xs font-black hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  Open in Maps
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-wider pt-2 flex items-center justify-center gap-1.5">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Location data is processed locally and never stored
          </p>
        </div>
      )}
    </div>
  );
}