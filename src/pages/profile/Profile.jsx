import { Outlet } from "react-router-dom";
import ChannelInfo from "./components/ChannelInfo";
import Navigation from "./components/Navigation";

const Profile = () => {
  return (
    <div className=" py-8 text-white w-full">
      <ChannelInfo />

      <Navigation />

      <div className="px-6">
        <Outlet />
      </div>
    </div>
  );
};
export default Profile;
