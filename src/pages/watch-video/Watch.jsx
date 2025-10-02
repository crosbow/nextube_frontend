import Recommended from "./components/Recommended";
import VideoDetails from "./components/VideoDetails";

const Watch = () => {
  return (
    <div className="pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-12">
          <VideoDetails />

          <Recommended />
        </div>
      </div>
    </div>
  );
};
export default Watch;
