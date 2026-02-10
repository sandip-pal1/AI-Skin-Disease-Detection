import { diseases } from "../../data/diseases";

export default function DiseaseCards() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-teal-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 text-xs font-bold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Supported Conditions
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Supported Skin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Conditions
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed font-medium">
            Our AI model has been trained and evaluated using hundreds to
            thousands of clinically validated skin lesion images, covering a
            wide range of common and critical skin conditions.
          </p>

          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mt-6 mx-auto"></div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((d, i) => {
            const wikipediaLink = `https://en.wikipedia.org/wiki/${encodeURIComponent(d.name)}`;

            return (
              <div
                key={i}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${i * 0.05}s backwards`,
                }}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-teal-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                <div className="relative bg-white rounded-[2rem] p-1 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-slate-100 hover:border-blue-200 flex flex-col h-full group-hover:-translate-y-2">
                  <div className="p-7 flex flex-col h-full bg-gradient-to-br from-white to-slate-50/50 rounded-[1.75rem]">
                    {/* Enhanced Badge */}
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-1.5 text-[9px] font-black text-blue-700 bg-gradient-to-r from-blue-100 to-blue-50 px-3 py-1.5 rounded-xl uppercase tracking-[0.15em] border border-blue-200/50 shadow-sm">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Clinical Category
                      </span>
                    </div>

                    {/* Disease Name */}
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                      {d.name}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow font-medium mb-6">
                      {d.desc}
                    </p>

                    {/* Enhanced Bottom Accent */}
                    <div className="pt-5 border-t-2 border-slate-100 flex items-center justify-between group-hover:border-blue-100 transition-colors">
                      <span className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.15em]">
                        Learn More
                      </span>

                      <a
                        href={wikipediaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-100 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 text-slate-600 group-hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
