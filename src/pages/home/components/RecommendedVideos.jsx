import VideoCard from "../../../components/VideoCard";

const RecommendedVideos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Recommended For You
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Video Card */}
        <VideoCard glass={true} />
      </div>
    </div>
  );
};
export default RecommendedVideos;
