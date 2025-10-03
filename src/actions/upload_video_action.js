import { api } from "../api/api";

const upload_video_action = async ({ request }) => {
  const formData = await request.formData();

  try {
    const response = await api.post("/videos/upload", formData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default upload_video_action;
