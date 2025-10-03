import { api } from "../api/api";

const get_video_loader = async ({ params }) => {
  try {
    const response = await api(`/videos/watch/${params.videoId}`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default get_video_loader;
