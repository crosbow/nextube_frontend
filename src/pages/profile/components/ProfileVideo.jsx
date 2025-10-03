import { Link } from "react-router-dom";

const ProfileVideo = ({ video }) => {
  const { _id, duration, thumbnail, title, videoUrl, views, createdAt } =
    video || {};

  return (
    <Link
      to={`/watch/${_id}`}
      className={`video-card cursor-pointer rounded-2xl`}
    >
      <div className="relative rounded-xl overflow-hidden mb-4 group">
        <div
          className="aspect-video flex items-center justify-center"
          style={{
            backgroundImage: thumbnail,
          }}
        >
          <video poster={thumbnail} muted className="aspect-video">
            <source src={videoUrl} />
          </video>
        </div>
        <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black bg-opacity-70 text-xs font-semibold">
          {(duration / 100).toFixed(2)}
        </span>
      </div>
      <div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1 line-clamp-2 hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-xs text-gray-500 space-x-2">
            <span>{views} views</span>
            <span>•</span>
            <span>1 week ago</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProfileVideo;
