import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <NavBar />
      <Outlet />
    </div>
  );
}
