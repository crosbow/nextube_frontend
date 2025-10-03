import { useLoaderData } from "react-router-dom";
import ProfileVideo from "./components/ProfileVideo";

const Videos = () => {
  const videos = useLoaderData();

  return (
    <div className="grid grid-cols-4 gap-3">
      {videos.data.map((video) => (
        <ProfileVideo key={video._id} video={video} />
      ))}
    </div>
  );
};
export default Videos;
