import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import TopProgresser from "../components/TopProgresser";

const MainLayout = () => {
  const navigation = useLocation();

  return (
    <div className="text-white">
      <TopProgresser />
      <Header />

      <div
        className={`flex gap-3 ${
          navigation.state === "loading"
            ? "opacity-25 transition-opacity duration-200 delay-200"
            : ""
        } max-w-7xl mx-auto px-6 `}
      >
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
