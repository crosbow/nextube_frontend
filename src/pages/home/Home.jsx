import VideoCard from "../../components/VideoCard";

const Home = () => {
  return (
    <div className="flex m-2">
      <div className="md:px-6 px-1 w-full">
        <div className="flex flex-col overflow-scroll h-screen pb-[12%] ">
          <div className="grid grid-cols-3 gap-4">
            {/* youtube video  */}
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
