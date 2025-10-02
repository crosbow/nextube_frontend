import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import LeftNavigation from "../components/LeftNavigation";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header />

      <div
        className={`flex gap-3 ${
          navigation.state === "loading"
            ? "opacity-25 transition-opacity duration-200 delay-200"
            : ""
        }`}
      >
        <LeftNavigation />
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
