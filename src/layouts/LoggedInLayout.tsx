import { Archive, BookOpen, Trash } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function LoggedInLayout() {
  return (
    <div className=" w-full min-h-full flex">
      <div className=" h-full w-18 group hover:w-32 flex flex-col gap-4 px-2 pt-4 border-r border-r-slate-200 dark:border-r-slate-700">
        <NavLink
          to={"/notes"}
          className=" rounded-full p-2 flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700"
        >
          <BookOpen className=" w-5 h-5" />
          <span className=" hidden group-hover:block">Notes</span>
        </NavLink>
        <NavLink
          to={"/archive"}
          className=" rounded-full p-2 flex  items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-400  dark:border-r-slate-700 active:dark:bg-slate-500"
        >
          <Archive className=" w-5 h-5" />
          <span className=" hidden group-hover:block">Archive</span>
        </NavLink>
        <NavLink
          to={"/trash"}
          className=" rounded-full p-2 flex  items-center justify-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-400  dark:border-r-slate-700 active:dark:bg-slate-500"
        >
          <Trash className=" w-5 h-5" />
          <span className=" hidden group-hover:block">Trash</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
