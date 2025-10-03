import { NavLink } from "react-router-dom";
import AnalyticsIcon from "../assets/icons/AnalyticsIcon";
import ContentIcon from "../assets/icons/ContentIcon";
import MenuIcon from "../assets/icons/MenuIcon";

const dashboardLinks = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: <MenuIcon />,
  },
  {
    label: "Manage Videos",
    href: "manage-videos",
    icon: <ContentIcon />,
  },
  {
    label: "Analytics",
    href: "analytics",
    icon: <AnalyticsIcon />,
  },
  {
    label: "Earn",
    href: "earn",
    icon: <h2 className="text-2xl font-bold">$</h2>,
  },
];

const DashboardSidebar = () => {
  return (
    <div className="hidden lg:block w-64 flex-shrink-0 bg-gray-900 border-r border-gray-800 p-6 space-y-6">
      <h2 className="text-3xl font-extrabold mb-8 text-white">Studio</h2>
      <nav className="space-y-3">
        {dashboardLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) => {
              const baseClasses =
                "flex items-center space-x-3 p-3 rounded-xl  transition-all";

              const activeClasses = isActive
                ? " bg-purple-700 text-white font-bold shadow-md shadow-purple-900/40"
                : " text-gray-400 hover:bg-gray-800 hover:text-white";

              return baseClasses + activeClasses;
            }}
          >
            <span>{link.icon}</span> <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
export default DashboardSidebar;
