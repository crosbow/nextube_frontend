import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Watch from "./pages/watch-video/Watch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
