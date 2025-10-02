const VideoCard = () => {
  return (
    <div className="flex flex-col pt-3">
      <div className="rounded-lg  overflow-hidden relative cursor-pointer">
        <img
          className=""
          src="https://i.ytimg.com/vi/npfvZd7Vt9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA05jvnxCVT2CSwpforthQcu91scg"
          alt="thambnail"
        />
        <span className="font-bold text-white px-1 py-[1px] bg-black bg-opacity-80 text-sm rounded-md absolute right-1 bottom-1">
          8:10
        </span>
      </div>
      {/* video title and description */}
      <div className="flex pt-3 gap-2 group cursor-pointer">
        <div className="pt-1">
          <img
            className="rounded-full object-cover w-11"
            src="https://avatars.githubusercontent.com/u/158416334?s=400&u=8b107573aea2d1c92bf09fa0f98703746f2a2815&v=4"
            alt="Channel Logo"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between pr-1">
            <p className="font-medium text-[16px] w-[95%]">
              Date With Girl I Met on OMEGLE 😍
            </p>
            <i className="fa-solid fa-ellipsis-vertical invisible group-hover:visible" />
          </div>
          <p className="flex text-gray-500 text-sm items-center gap-1 mt-[0.15rem]">
            Adarsh Singh Extra
            <i className="fa-solid fa-circle-check text-[0.7rem]" />
          </p>
          <p className="flex text-gray-500 text-sm items-center">
            3.5M views <i className="fa-solid fa-circle text-[0.2rem] mx-2" /> 3
            weeks ago
          </p>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
