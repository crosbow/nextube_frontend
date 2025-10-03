import { useLoaderData } from "react-router-dom";

const VideoDetails = () => {
  const video = useLoaderData();

  const {
    comments,
    title,
    description,
    likesCount,
    subscribersCount,
    thumbnail,
    views,
    duration,
    videoUrl,
  } = video.data || {};

  console.log(video);

  return (
    <div className="lg:col-span-2 space-y-8">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-900/40">
        <div
          className=" flex items-center justify-center"
          style={{
            backgroundImage: thumbnail,
          }}
        >
          <video autoPlay controls className="aspect-video">
            <source src={videoUrl} />
          </video>
        </div>
      </div>
      <h1 className="text-3xl font-extrabold">{title}</h1>
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
                <p className="text-sm text-gray-400">
                  {subscribersCount} subscribers
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-sm font-semibold">
              <button className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 font-bold whitespace-nowrap transition-all action-button-glow shadow-lg shadow-pink-600/30">
                SUBSCRIBE
              </button>
              <div className="flex rounded-full bg-gray-800/80 divide-x divide-gray-700 overflow-hidden action-button-glow">
                <button className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700 transition-colors">
                  <span id="like-icon" />
                  <span>{likesCount}K</span>
                </button>
                <button className="px-4 py-2 hover:bg-gray-700 transition-colors transform rotate-180">
                  <span id="like-icon" />
                </button>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors">
                <span id="share-icon" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
        <div className="p-6 rounded-2xl bg-gray-800/70">
          <div className="flex flex-wrap items-center text-sm text-gray-300 font-semibold mb-3 space-x-4">
            <span>{views} views</span>
            <span>•</span>
            <span>1 day ago</span>
          </div>
          <p className="text-gray-300 line-clamp-3 transition-all duration-300 cursor-pointer text-base leading-relaxed">
            {description}
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-400">
              {comments?.length} Comments
            </span>
          </h2>

          {/* Write comment */}
          <div className="mb-6 flex-shrink-0">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Add a public comment..."
                className="w-full bg-transparent border-b border-gray-700 focus:border-purple-500 outline-none pb-2 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-start space-x-4 mb-8">
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
                      The section on serverless architecture was mind-blowing!
                      Great job breaking down such a complex topic.
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
  );
};
export default VideoDetails;
