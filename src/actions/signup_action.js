import { api } from "../api/api";

const signup_action = async ({ request }) => {
  const formData = await request.formData();

  try {
    const response = await api.post("/auth/register", formData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default signup_action;
