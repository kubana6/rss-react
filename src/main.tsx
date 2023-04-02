import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { Cards } from "./pages/Cards/Cards";
import { Form } from "./pages/Form/Form";

import "./index.scss";

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
      {
        path: "form",
        element: <Form />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
