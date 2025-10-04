import { useContext } from "react";
import { VideoUploadQueueContext } from "../providers/VideoUploadQueueProvider";

const VideoUploadStatus = () => {
  const { video, isUploading } = useContext(VideoUploadQueueContext);

  if (!isUploading) return;

  const url = URL.createObjectURL(video.video);

  return (
    <div
      className="fixed bottom-2 right-2 p-3  z-40 bg-gray-800
     rounded-md shadow-2xl shadow-gray-500/20"
    >
      <div>
        <div className="flex gap-2 items-center ">
          <video
            src={url}
            className="h-14 aspect-video bg-gray-600 rounded-md animate-pulse"
          ></video>
          <div>
            <h6> {video.title?.slice(0, 20)}... </h6>
            <p className="text-gray-300 text-sm"> Uploading... </p>
          </div>
        </div>

        <span className="text-gray-300 border-t pt-2 border-gray-500/50 mt-4 block">
          Please don't reload or exit this page
        </span>
      </div>
    </div>
  );
};
export default VideoUploadStatus;
