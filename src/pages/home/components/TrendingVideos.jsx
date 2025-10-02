import VideoCard from "../../../components/VideoCard";

const TrendingVideos = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Trending Now
        </span>
        <svg
          className="w-6 h-6 ml-2 text-pink-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 10h7l-9 13v-9H4l9-13z" />
        </svg>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <VideoCard />
      </div>
    </div>
  );
};
export default TrendingVideos;
