import { useEffect, useState } from "react";
import { api } from "../api/api";

const useUserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let ignore = false;
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const getUserInfo = async () => {
        const response = await api("/users/current-user");
        if (!ignore) {
          setUser(response.data.data);
        }
      };
      getUserInfo();
    }

    return () => {
      ignore = true;
    };
  }, []);

  return user;
};
export default useUserProfile;
