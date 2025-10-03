import { api } from "../api/api";

const login_action = async ({ request }) => {
  const formdata = await request.formData();

  const bodyData = Object.fromEntries(formdata);

  try {
    const response = await api.post("/auth/login", bodyData);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default login_action;
