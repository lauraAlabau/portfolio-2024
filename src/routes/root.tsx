import { Outlet, useLocation } from "react-router-dom";
import { LayoutPg } from "../components";
import { useEffect } from "react";

export const Root = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView();
        }
      }, 10);
    }
  }, []);

  return (
    <>
      <LayoutPg />
      <Outlet />
    </>
  );
};
