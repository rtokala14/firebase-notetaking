import NavBar from "../components/navBar";
import { Outlet } from "react-router-dom";

export function BaseLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
