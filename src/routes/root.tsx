import { Outlet } from "react-router-dom";
import { LayoutPg } from "../components";

export const Root = () => {
  return (
    <>
      <LayoutPg />

      <Outlet />
    </>
  );
};
