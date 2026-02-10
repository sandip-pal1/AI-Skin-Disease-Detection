export default function Capabilities() {
  const categories = [
    {
      title: "Cancerous Diseases",
      items: "Melanoma, Basal Cell Carcinoma",
      color: "blue",
      description:
        "Critical conditions requiring immediate professional attention.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      ),
    },
    {
      title: "Non-Cancerous Diseases",
      items: "Moles, Benign Keratoses",
      color: "emerald",
      description: "Common skin growths that are typically non-threatening.",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Infectious & Inflammatory",
      items: "Eczema, Psoriasis, Fungal & Viral",
      color: "purple",
      description: "Autoimmune and surface-level skin reactions.",
      icon: (
        <svg
          className="w-7 h-7"
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
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-slate-50/50 py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Clinical Categories
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Diagnostic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Capabilities
            </span>
          </h2>

          <p className="text-slate-600 mt-4 max-w-2xl text-lg font-medium leading-relaxed">
            Our AI is optimized to identify anomalies across three major
            clinical categories with industry-leading accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
              }}>
              {/* Gradient border effect */}
              <div
                className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl
                ${cat.color === "blue" ? "bg-gradient-to-br from-blue-400 to-blue-600" : ""}
                ${cat.color === "emerald" ? "bg-gradient-to-br from-emerald-400 to-emerald-600" : ""}
                ${cat.color === "purple" ? "bg-gradient-to-br from-purple-400 to-purple-600" : ""}
              `}></div>

              <div className="relative bg-white border-2 border-slate-100 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:border-slate-200 hover:-translate-y-2 flex flex-col h-full">
                {/* Enhanced Icon with gradient background */}
                <div
                  className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                  ${cat.color === "blue" ? "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:text-white" : ""}
                  ${cat.color === "emerald" ? "bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-600 group-hover:from-emerald-500 group-hover:to-emerald-600 group-hover:text-white" : ""}
                  ${cat.color === "purple" ? "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 group-hover:from-purple-500 group-hover:to-purple-600 group-hover:text-white" : ""}
                `}>
                  {cat.icon}
                </div>

                <h3
                  className={`text-2xl font-black mb-4 transition-colors duration-300
                  ${cat.color === "blue" ? "text-blue-900 group-hover:text-blue-600" : ""}
                  ${cat.color === "emerald" ? "text-emerald-900 group-hover:text-emerald-600" : ""}
                  ${cat.color === "purple" ? "text-purple-900 group-hover:text-purple-600" : ""}
                `}>
                  {cat.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed font-medium flex-grow">
                  {cat.description}
                </p>

                {/* Enhanced Tag Style Items */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                    Key Identifiers
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.split(", ").map((item, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-300 group-hover:scale-105
                          ${cat.color === "blue" ? "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-100" : ""}
                          ${cat.color === "emerald" ? "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-100" : ""}
                          ${cat.color === "purple" ? "bg-purple-50 text-purple-700 border-purple-200 group-hover:bg-purple-100" : ""}
                        `}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
