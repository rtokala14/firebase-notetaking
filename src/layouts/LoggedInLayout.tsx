import { Archive, BookOpen, Trash } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export function LoggedInLayout() {
  return (
    <div className=" w-full min-h-full flex">
      <div className=" h-[93vh] w-18 group hover:w-32 flex flex-col items-center hover:items-start gap-4 px-2 hover:px-0 pt-4 border-r border-r-slate-200 dark:border-r-slate-700">
        <NavLink
          to={"/notes"}
          className={({ isActive }) =>
            isActive
              ? "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center bg-slate-400 dark:bg-slate-700 gap-3 hover:bg-slate-200 dark:hover:bg-slate-800 dark:border-r-slate-700"
              : "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700"
          }
        >
          <BookOpen className=" group-hover:ml-2 w-5 h-5" />
          <span className=" hidden group-hover:block">Notes</span>
        </NavLink>
        <NavLink
          to={"/archive"}
          className={({ isActive }) =>
            isActive
              ? "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center bg-slate-400 dark:bg-slate-700 gap-3 hover:bg-slate-200 dark:hover:bg-slate-800 dark:border-r-slate-700"
              : "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700"
          }
        >
          <Archive className=" group-hover:ml-2 w-5 h-5" />
          <span className=" hidden group-hover:block">Archive</span>
        </NavLink>
        <NavLink
          to={"/trash"}
          className={({ isActive }) =>
            isActive
              ? "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center bg-slate-400 dark:bg-slate-700 gap-3 hover:bg-slate-200 dark:hover:bg-slate-800 dark:border-r-slate-700"
              : "rounded-full group-hover:rounded-l-none p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700"
          }
        >
          <Trash className=" group-hover:ml-2 w-5 h-5" />
          <span className=" hidden group-hover:block">Trash</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
