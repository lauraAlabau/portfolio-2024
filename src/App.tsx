import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutPg, Sections } from "./components";
import Projects from "./pages/projects";

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
    path: "/projects",
    element: (
      <>
        <LayoutPg />
        <Projects />
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
