import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.jsx";
import UploadPdf from "./routes/UploadPdf.jsx";
import Documents from "./routes/Documents.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/upload",
    element: <UploadPdf />,
  },
  {
    path: "/documents",
    element: <Documents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
