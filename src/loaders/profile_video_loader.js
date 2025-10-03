import { api } from "../api/api";

const profile_video_loader = async ({ params }) => {
  try {
    const response = await api("/dashboard/videos");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default profile_video_loader;
