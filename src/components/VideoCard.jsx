const VideoCard = ({ glass }) => {
  return (
    <div
      className={`video-card cursor-pointer rounded-2xl ${
        glass && "glass p-4"
      }`}
    >
      <div className="relative rounded-xl overflow-hidden mb-4 group">
        <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black bg-opacity-70 text-xs font-semibold">
          25:18
        </span>
      </div>
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="font-semibold mb-1 line-clamp-2 hover:text-purple-400 transition-colors">
            Travel Vlog: Exploring Hidden Paradise Islands
          </h3>
          <p className="text-sm text-gray-400 mb-1">Adventure Seekers</p>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span>3.5M views</span>
            <span>•</span>
            <span>1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
