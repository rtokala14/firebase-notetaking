import { Archive, BookOpen, Trash } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function LoggedInLayout() {
  return (
    <div className=" w-full min-h-full flex">
      <div className=" h-full w-14 flex flex-col gap-4 px-2 pt-4">
        <NavLink
          to={"/notes"}
          className=" rounded-full p-1 flex flex-col items-center justify-center gap-1 active:bg-slate-400 border-r border-r-slate-200 dark:border-r-slate-700 active:dark:bg-slate-500"
        >
          <BookOpen className=" w-4 h-4" />
          <span>Notes</span>
        </NavLink>
        <Archive className=" w-4 h-4" />
        <Trash className=" w-4 h-4" />
      </div>
      <Outlet />
    </div>
  );
}
