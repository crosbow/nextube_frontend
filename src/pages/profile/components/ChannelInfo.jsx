import { Link, useLoaderData } from "react-router-dom";

const ChannelInfo = () => {
  const channelInfos = useLoaderData();

  const { fullname, username, avatar, coverImage, subscribers, totalVideo } =
    channelInfos || {};

  return (
    <>
      {coverImage && (
        <div className="h-48 md:h-48 rounded-2xl overflow-hidden mb-6 mx-6 ">
          <img
            src={coverImage}
            className="h-full w-full bg-cover object-cover"
            alt="cover image"
          />
        </div>
      )}

      <div className="px-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex items-center space-x-6 mb-4 md:mb-0">
          <div
            className="w-32 h-32 rounded-full bg-gray-900 flex-shrink-0 border-4 border-transparent p-1 gradient-shadow"
            style={{
              borderRadius: "50%",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
          >
            <img
              src={avatar}
              alt={fullname}
              className="rounded-full shadow-md "
            />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold mb-1">{fullname}</h1>
            <p className="text-gray-400 mb-2 font-medium">@{username} </p>
            <div className="text-sm text-gray-500 space-x-2 mb-2">
              <span>{subscribers} subscribers</span>
              <span className="text-xs">•</span>
              <span>{totalVideo} videos</span>
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
    </>
  );
};
export default ChannelInfo;
