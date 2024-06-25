import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NavbarProvider } from "./context/NavbarContext.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Sections } from "./components";
import AllProjects from "./pages/AllProjects";
import AllExperience from "./pages/AllExperience";
import { Root } from "./routes/root.tsx";
import { ErrorPage } from "./routes/error-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Sections />,
      },
      {
        path: "/all-projects",
        element: <AllProjects />,
      },
      {
        path: "/all-experience",
        element: <AllExperience />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavbarProvider>
      <RouterProvider router={router} />
    </NavbarProvider>
  </React.StrictMode>
);
