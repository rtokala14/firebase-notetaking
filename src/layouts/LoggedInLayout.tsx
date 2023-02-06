import { Outlet } from "react-router-dom";

export function LoggedInLayout() {
  return (
    <div>
      <h2>Logged Layout</h2>
      <Outlet />
    </div>
  );
}
