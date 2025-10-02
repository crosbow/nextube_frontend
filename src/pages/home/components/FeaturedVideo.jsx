const FeaturedVideo = () => {
  return (
    <div className="mb-12">
      <div className="relative rounded-3xl overflow-hidden gradient-border cursor-pointer group">
        <div className=" h-[400px] w-full bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900 flex items-center justify-center relative">
          <svg
            className="w-24 h-24 text-white opacity-80 group-hover:scale-110 transition-transform"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <div className="absolute inset-0 thumbnail-overlay" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center space-x-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-red-600 text-xs font-bold">
                LIVE
              </span>
              <span className="px-3 py-1 rounded-full bg-gray-900 bg-opacity-70 text-xs font-semibold">
                Featured
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              The Future of Web Development: AI &amp; Beyond
            </h2>
            <p className="text-gray-300 mb-3">
              Join us for an exclusive live discussion with industry experts
              about the cutting-edge technologies shaping tomorrow.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500" />
                <span className="font-semibold">Tech Talks Live</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">12.5K watching</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedVideo;
