import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { NavbarProvider } from "./context/NavbarContext.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AllExperience } from "./routes/all-experience.tsx";
import { AllProjects } from "./routes/all-projects.tsx";
import { ErrorPage } from "./routes/error-page.tsx";
import { Index } from "./routes/index.tsx";
import { Project, loader as projectLoader } from "./routes/project.tsx";
import { Root } from "./routes/root.tsx";
import { ALL_EXPERIENCE, ALL_PROJECTS, BASE_URL, SLUG_PROJECT } from "./utils/routes_index.ts";

const router = createBrowserRouter([
  {
    path: BASE_URL,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: ALL_PROJECTS,
        element: <AllProjects />,
      },
      {
        path: SLUG_PROJECT,
        element: <Project />,
        loader: projectLoader,
      },
      {
        path: ALL_EXPERIENCE,
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
  </React.StrictMode>,
);
