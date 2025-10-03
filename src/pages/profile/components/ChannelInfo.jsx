import { Link } from "react-router-dom";

const ChannelInfo = () => {
  return (
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
          <div className="text-sm text-gray-500 space-x-2 mb-2">
            <span>1.2M subscribers</span>
            <span className="text-xs">•</span>
            <span>587 videos</span>
          </div>
          <Link
            to={"/dashboard"}
            className="border px-5 text-xs cursor-pointer py-1 rounded-full border-gray-400"
          >
            Go Dashboard
          </Link>
        </div>
      </div>
      <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 font-bold whitespace-nowrap transition-all text-sm shadow-xl shadow-pink-600/40">
        SUBSCRIBE
      </button>
    </div>
  );
};
export default ChannelInfo;
