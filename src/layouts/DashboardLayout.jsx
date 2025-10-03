import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import TopProgresser from "../components/TopProgresser";

const DashboardLayout = () => {
  console.log("loaded");

  return (
    <div className="text-white flex min-h-screen">
      <TopProgresser />
      <DashboardSidebar />

      <Outlet />
    </div>
  );
};
export default DashboardLayout;
