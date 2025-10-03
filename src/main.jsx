import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import login_action from "./actions/login_action";
import signup_action from "./actions/signup_action";
import upload_video_action from "./actions/upload_video_action";
import ErrorPage1 from "./components/ErrorPage1";
import "./index.css";
import DashboardLayout from "./layouts/DashboardLayout";
import MainLayout from "./layouts/MainLayout";
import channel_info_loader from "./loaders/channel_info_loader";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import Overview from "./pages/dashboard/Overview";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Watch from "./pages/watch-video/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage1 />,
    action: upload_video_action,
    children: [
      {
        errorElement: <ErrorPage1 />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/profile",
            element: <Profile />,
            loader: channel_info_loader,
            children: [
              {
                index: true,
                element: <h2>Home</h2>,
              },
              {
                path: "videos",
                element: <h2>Videos</h2>,
              },
              {
                path: "playlists",
                element: <h2>Playlists</h2>,
              },
              {
                path: "tweets",
                element: <h2>Tweets</h2>,
              },
            ],
          },
          {
            path: "/watch/3soSxt",
            element: <Watch />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage1 />,
    action: login_action,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage1 />,
    action: signup_action,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <ErrorPage1 />,
    children: [
      {
        errorElement: <ErrorPage1 />,
        children: [
          {
            index: true,
            element: <Overview />,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
