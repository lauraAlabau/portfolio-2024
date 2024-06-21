import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutPg, Sections } from "./components";
import AllProjects from "./pages/AllProjects";
import AllExperience from "./pages/AllExperience";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <LayoutPg />
        <Sections />
      </>
    ),
  },
  {
    path: "/all-projects",
    element: (
      <>
        <LayoutPg />
        <AllProjects />
      </>
    ),
  },
  {
    path: "/all-experience",
    element: (
      <>
        <LayoutPg />
        <AllExperience />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
