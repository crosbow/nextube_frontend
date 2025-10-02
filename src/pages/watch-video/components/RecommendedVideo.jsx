const RecommendedVideo = () => {
  return (
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
        <p className="text-xs text-gray-500">675K views • 4 days ago</p>
      </div>
    </div>
  );
};
export default RecommendedVideo;
