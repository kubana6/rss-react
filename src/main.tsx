import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Cards } from "./pages/Cards/Cards";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Cards />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
