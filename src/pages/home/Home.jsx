import FeaturedVideo from "./components/FeaturedVideo";
import RecommendedVideos from "./components/RecommendedVideos";
import TrendingVideos from "./components/TrendingVideos";

const Home = () => {
  return (
    <div className="py-8 ">
      <div>
        <FeaturedVideo />
        {/* Trending Now Section */}
        <TrendingVideos />
        {/* Recommended For You Section */}
        <RecommendedVideos />
      </div>
    </div>
  );
};
export default Home;
