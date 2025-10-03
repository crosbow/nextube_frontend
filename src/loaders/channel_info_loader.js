import { api } from "../api/api";

const channel_info_loader = async () => {
  try {
    const profileInfo = api("/users/current-user");
    const states = api("/dashboard/stats");

    const response = await Promise.all([profileInfo, states]);

    let data = {};

    for (let r = 0; r < response.length; r++) {
      if (r === 0) {
        data = { ...data, ...response[r].data.data };
      } else {
        data = { ...data, ...response[r].data.data[0] };
      }
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};
export default channel_info_loader;
