export default function ImageUpload({
  preview,
  onImageSelect,
  onPredict,
  loading,
}) {
  return (
    <div className="space-y-6">
      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={(e) => onImageSelect(e.target.files[0])}
        className="hidden"
      />

      {/* Upload / Preview Area */}
      {!preview ? (
        /* Upload Placeholder */
        <label
          htmlFor="file-upload"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all cursor-pointer group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
            <p className="mb-2 text-sm text-slate-700 font-bold">
              Click to upload skin image
            </p>
            <p className="text-xs text-slate-400 font-medium">
              PNG, JPG or JPEG (Max 5MB)
            </p>
          </div>
        </label>
      ) : (
        <div className="relative">
          <div
            className="
              relative
              aspect-video
              w-full
              overflow-hidden
              rounded-[2rem]
              border
              border-slate-200
              bg-gradient-to-br from-slate-50 to-slate-100
              shadow-inner
              flex
              items-center
              justify-center
            ">
            <img
              src={preview}
              alt="Uploaded skin lesion preview"
              className="
                max-h-full
                max-w-full
                object-contain
                rounded-xl
              "
            />
          </div>

          {/* Replace Image */}
          <label
            htmlFor="file-upload"
            className="
              absolute
              top-4
              right-4
              bg-white/95
              backdrop-blur
              px-3
              py-1.5
              rounded-full
              text-[10px]
              font-bold
              text-slate-700
              shadow-md
              cursor-pointer
              hover:bg-white
              transition-colors
              uppercase
              tracking-wider
            ">
            Replace Image
          </label>
        </div>
      )}

      {/* Analysis Button */}
      <button
        onClick={onPredict}
        disabled={loading || !preview}
        className={`
          relative w-full py-4 rounded-2xl font-bold text-white transition-all overflow-hidden
          ${
            loading
              ? "bg-slate-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-100 active:scale-[0.98]"
          }
        `}>
        <span className="relative z-10 flex items-center justify-center gap-2">
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing Clinical Data...
            </>
          ) : (
            "Start AI Analysis"
          )}
        </span>
      </button>
    </div>
  );
}
