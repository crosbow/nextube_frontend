import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div className="text-white">
      <Header />

      <div
        className={`flex gap-3 ${
          navigation.state === "loading"
            ? "opacity-25 transition-opacity duration-200 delay-200"
            : ""
        } max-w-7xl mx-auto px-6 `}
      >
        {/* <LeftNavigation /> */}
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
