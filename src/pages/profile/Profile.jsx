import { Outlet } from "react-router-dom";
import ChannelInfo from "./components/ChannelInfo";
import CoverImage from "./components/CoverImage";
import Navigation from "./components/Navigation";

const Profile = () => {
  return (
    <div className=" py-8 text-white w-full">
      <CoverImage />

      <ChannelInfo />

      <Navigation />

      <div className="px-6">
        <Outlet />
      </div>
    </div>
  );
};
export default Profile;
