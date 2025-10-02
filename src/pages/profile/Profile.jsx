import { NavLink, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();

  return (
    <div className="pt-12 pb-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="h-48 md:h-64 rounded-3xl overflow-hidden mb-6 mx-6 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1518770660439-4630ee79deb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
        </div>
        <div className="px-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <div
              className="w-32 h-32 rounded-full bg-gray-900 flex-shrink-0 border-4 border-transparent p-1 gradient-shadow"
              style={{
                backgroundImage:
                  "linear-gradient(#0f172a, #0f172a), linear-gradient(to right, #a855f7, #f472b6)",
                borderRadius: "50%",
                backgroundOrigin: "border-box",
                backgroundClip: "content-box, border-box",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-4xl font-bold">
                T T L
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold mb-1">
                Tech Talks Live{" "}
                <span className="text-blue-400 text-sm align-top">✔</span>
              </h1>
              <p className="text-gray-400 mb-2 font-medium">@TechTalksLive</p>
              <div className="text-sm text-gray-500 space-x-2">
                <span>1.2M subscribers</span>
                <span className="text-xs">•</span>
                <span>587 videos</span>
              </div>
            </div>
          </div>
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 font-bold whitespace-nowrap transition-all text-sm shadow-xl shadow-pink-600/40">
            SUBSCRIBE
          </button>
        </div>
        <div className="border-b border-gray-800 mb-8 px-6">
          <div className="flex space-x-8 overflow-x-auto whitespace-nowrap pb-2 scroll-smooth">
            <NavLink
              to={"/profile"}
              className={({ isActive }) =>
                `${
                  isActive && location.pathname == "/profile"
                    ? "font-semibold text-purple-400 border-purple-500"
                    : "text-gray-400 hover:text-white  border-transparent"
                } py-3 text-sm  border-b-2  transition-colors`
              }
            >
              HOME
            </NavLink>
            <NavLink
              to={"/profile/videos"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-purple-400 border-purple-500"
                    : "text-gray-400 hover:text-white  border-transparent"
                } py-3 text-sm  border-b-2  transition-colors`
              }
            >
              VIDEOS
            </NavLink>

            <NavLink
              to={"/profile/playlists"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-purple-400 border-purple-500"
                    : "text-gray-400 hover:text-white  border-transparent"
                } py-3 text-sm  border-b-2  transition-colors`
              }
            >
              PLAYLISTS
            </NavLink>
            <NavLink
              to={"/profile/tweets"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-purple-400 border-purple-500"
                    : "text-gray-400 hover:text-white  border-transparent"
                } py-3 text-sm  border-b-2  transition-colors`
              }
            >
              TWEETS
            </NavLink>
          </div>
        </div>
        <div className="px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Profile;
