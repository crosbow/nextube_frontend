import { createContext, useState } from "react";

export const VideoUploadQueueContext = createContext();

// user can upload one video at a time
const VideoUploadQueueProvider = ({ children }) => {
  const [video, setVideo] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  return (
    <VideoUploadQueueContext.Provider
      value={{ video, setVideo, isUploading, setIsUploading }}
    >
      {children}
    </VideoUploadQueueContext.Provider>
  );
};
export default VideoUploadQueueProvider;
