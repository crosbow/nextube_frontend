import { NavLink } from "react-router-dom";
import Account from "../assets/icons/Account";
import HomeIcon from "../assets/icons/HomeIcon";
import ShortsIcon from "../assets/icons/ShortsIcon";
import SubscriptionIcon from "../assets/icons/SubscriptionIcon";

const navigation = [
  {
    id: 1,
    icon: <HomeIcon />,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    icon: <ShortsIcon />,
    label: "Shorts",
    href: "/shorts",
  },
  {
    id: 3,
    icon: <SubscriptionIcon />,
    label: "Subscriptions",
    href: "/subscription",
  },
  {
    id: 4,
    icon: <Account />,
    label: "Account",
    href: "/account",
  },
];

const LeftNavigation = () => {
  return (
    <div className="w-52 relative">
      <div className="fixed top-20 left-2  space-y-5">
        {navigation.map((nav) => (
          <NavLink
            to={nav.href}
            className="flex flex-col justify-center items-center "
          >
            <span>{nav.icon}</span>
            <span className="text-xs text-gray-800">{nav.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
export default LeftNavigation;
