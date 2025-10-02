import RecommendedVideo from "./RecommendedVideo";

const Recommended = () => {
  return (
    <div className="lg:col-span-1 pt-0 lg:pt-0 sidebar-scroll ">
      <h2 className="text-xl font-bold mb-6 gradient-text bg-gradient-to-r from-pink-400 to-red-400">
        Recommended Videos
      </h2>
      <div className="space-y-4">
        <RecommendedVideo />
      </div>
    </div>
  );
};
export default Recommended;
