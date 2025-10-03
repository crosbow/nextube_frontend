import axios from "axios";
const renderUrl = "https://nextube-backend-1.onrender.com/api/v1";
const localUrl = "http://localhost:8000/api/v1";

const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  return `Bearer ${accessToken}`;
};

export const api = axios.create({
  baseURL: localUrl,
  withCredentials: true,
});

let token = getToken();

api.interceptors.request.use(
  (config) => {
    config.headers = {
      Authorization: token,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
