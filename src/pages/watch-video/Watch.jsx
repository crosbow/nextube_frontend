const Watch = () => {
  return (
    <div className="pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/40">
              <div className="aspect-video bg-gradient-to-br from-purple-800 to-indigo-900 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-white opacity-80"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-lg text-sm font-semibold">
                  45:30
                </span>
              </div>
            </div>
            <h1 className="text-3xl font-extrabold">
              The Future of Web Development: AI &amp; Beyond - Full Stream
            </h1>
            <div className="border-b border-gray-800 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className=" rounded-full mb-4 flex-shrink-0">
                    <div>
                      <p className="font-bold hover:text-purple-400 cursor-pointer">
                        Tech Talks Live
                        <span
                          className="text-blue-400 text-sm align-top ml-1"
                          id="check-icon"
                        />
                      </p>
                      <p className="text-sm text-gray-400">1.2M subscribers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-sm font-semibold">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 font-bold whitespace-nowrap transition-all action-button-glow shadow-lg shadow-pink-600/30">
                      SUBSCRIBE
                    </button>
                    <div className="flex rounded-full bg-gray-800/80 divide-x divide-gray-700 overflow-hidden action-button-glow">
                      <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 transition-colors">
                        <span id="like-icon" />
                        <span>45K</span>
                      </button>
                      <button className="px-4 py-2 hover:bg-gray-700 transition-colors transform rotate-180">
                        <span id="like-icon" />
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors">
                      <span id="share-icon" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center px-2 py-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors">
                      <span id="more-icon" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-800/70">
                <div className="flex flex-wrap items-center text-sm text-gray-300 font-semibold mb-3 space-x-4">
                  <span>5.8M views</span>
                  <span>•</span>
                  <span>1 day ago</span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-600/50 text-purple-200 font-bold">
                    #Technology
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-purple-600/50 text-purple-200 font-bold">
                    #AI
                  </span>
                </div>
                <p className="text-gray-300 line-clamp-3 hover:line-clamp-none transition-all duration-300 cursor-pointer text-base leading-relaxed">
                  Join us for an exclusive live discussion with industry experts
                  about the cutting-edge technologies shaping tomorrow. This
                  session covers the impact of AI on frontend and backend
                  development, the rise of serverless architecture, and what
                  Web3 truly means for the average user. We explore practical
                  examples and future predictions that will shape your career in
                  the next five years.
                </p>
                <button className="text-purple-400 text-sm font-semibold mt-3">
                  Show Transcript
                </button>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-6 flex items-center">
                  <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400">
                    3,450 Comments
                  </span>
                </h2>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Add a public comment..."
                        className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none pb-2 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <div>
                          <p className="text-sm font-semibold hover:text-purple-400 cursor-pointer">
                            @User_Dev{" "}
                            <span className="text-xs font-normal text-gray-500 ml-2">
                              2 hours ago
                            </span>
                          </p>
                          <p className="text-gray-300 mt-1">
                            The section on serverless architecture was
                            mind-blowing! Great job breaking down such a complex
                            topic.
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-gray-500 text-xs font-medium">
                            <button className="hover:text-purple-400 transition-colors">
                              👍 1.2K
                            </button>
                            <button className="hover:text-purple-400 transition-colors">
                              👎
                            </button>
                            <button className="hover:text-purple-400 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 pt-0 lg:pt-0 sidebar-scroll ">
            <h2 className="text-xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-400 to-red-400">
              Recommended Videos
            </h2>
            <div className="space-y-4">
              <div className="flex space-x-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="relative flex-shrink-0 w-2/5 aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center">
                    <span className="text-xs font-bold bg-black/70 px-2 py-0.5 rounded absolute bottom-1 right-1">
                      12:45
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-sm font-semibold line-clamp-2 hover:text-purple-400">
                    Music Production Tutorial: Making Lo-Fi Beats
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Beat Makers Lab</p>
                  <p className="text-xs text-gray-500">
                    675K views • 4 days ago
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="relative flex-shrink-0 w-2/5 aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center">
                    <span className="text-xs font-bold bg-black/70 px-2 py-0.5 rounded absolute bottom-1 right-1">
                      19:33
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-sm font-semibold line-clamp-2 hover:text-purple-400">
                    Photography Masterclass: Perfect Portrait Lighting
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Photo Pro Tips</p>
                  <p className="text-xs text-gray-500">
                    542K views • 6 days ago
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="relative flex-shrink-0 w-2/5 aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xs font-bold bg-black/70 px-2 py-0.5 rounded absolute bottom-1 right-1">
                      14:50
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-sm font-semibold line-clamp-2 hover:text-purple-400">
                    Fashion Haul: Latest Streetwear Trends 2025
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Style Maven</p>
                  <p className="text-xs text-gray-500">
                    920K views • 3 days ago
                  </p>
                </div>
              </div>
              <div className="flex space-x-3 cursor-pointer p-3 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
                <div className="relative flex-shrink-0 w-2/5 aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center">
                    <span className="text-xs font-bold bg-black/70 px-2 py-0.5 rounded absolute bottom-1 right-1">
                      28:40
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-0.5">
                  <h3 className="text-sm font-semibold line-clamp-2 hover:text-purple-400">
                    Documentary: The Rise of Electric Vehicles
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">Future Vision</p>
                  <p className="text-xs text-gray-500">
                    2.1M views • 1 month ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Watch;
