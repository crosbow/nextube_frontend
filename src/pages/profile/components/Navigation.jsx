import { NavLink, useLocation } from "react-router-dom";

const profileLinks = [
  {
    label: "HOME",
    href: "/profile",
    end: true,
  },
  {
    label: "VIDEOS",
    href: "videos",
  },
  {
    label: "PLAYLISTS",
    href: "playlists",
  },
  {
    label: "TWEETS",
    href: "tweets",
  },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <div className="border-b border-gray-800 mb-8 px-6">
      <div className="flex space-x-8 overflow-x-auto whitespace-nowrap pb-2 scroll-smooth">
        {profileLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) => {
              const baseClasses =
                "py-3 text-sm border-b-2 transition-colors whitespace-nowrap font-semibold";

              const activeClasses = isActive
                ? " text-purple-400 border-purple-500" // Active style
                : " text-gray-400 border-transparent hover:text-white hover:border-gray-500"; // Inactive style

              if (link.href === "/profile" && location.pathname !== link.href) {
                return `${baseClasses} "font-semibold text-gray-400 border-transparent hover:text-white hover:border-gray-500"`;
              }
              return `${baseClasses} ${activeClasses}`;
            }}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
