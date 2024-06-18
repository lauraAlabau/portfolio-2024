import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutPg, Sections } from "./components";
import AllProjects from "./pages/AllProjects";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
