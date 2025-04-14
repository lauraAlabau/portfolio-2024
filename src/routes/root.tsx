import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutPg } from "../components";

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
  }, [location.hash]);

  return (
    <>
      <LayoutPg />
      <Outlet />
    </>
  );
};
