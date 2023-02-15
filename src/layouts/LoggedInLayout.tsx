import {
  Archive,
  BookOpen,
  SidebarCloseIcon,
  SidebarOpenIcon,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { cn } from "../lib/utils";

export function LoggedInLayout() {
  const [sideOpen, setIsSideOpen] = useState(false);
  return (
    <div className=" w-full min-h-full flex">
      {/* Sidebar */}
      <div
        className={cn(
          " h-[93vh] w-18 group flex flex-col items-center gap-4 px-2  pt-4 border-r border-r-slate-200 dark:border-r-slate-800 transition-width duration-700 delay-500",
          sideOpen && "w-36 px-0"
        )}
      >
        <div
          className={cn(
            !sideOpen && "w-full flex items-center justify-center ",
            sideOpen && "flex items-center w-full justify-end pr-2"
          )}
        >
          {sideOpen ? (
            <div
              onClick={() => setIsSideOpen(false)}
              className="hover:cursor-pointer rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <SidebarCloseIcon className=" h-5 w-5 " />
            </div>
          ) : (
            <div
              onClick={() => setIsSideOpen(true)}
              className="hover:cursor-pointer rounded-full p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              <SidebarOpenIcon className=" h-5 w-5 " />
            </div>
          )}
        </div>
        <hr className={cn(" text-slate-200 w-full border")} />
        <NavLink
          to={"/notes"}
          className={({ isActive }) =>
            isActive
              ? cn(
                  "rounded-full p-2 w-full flex items-center bg-slate-200 dark:bg-slate-700 gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
              : cn(
                  "rounded-full p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
          }
        >
          <BookOpen className=" w-5 h-5" />
          <span className={cn(" hidden ", sideOpen && "block")}>Notes</span>
        </NavLink>
        <NavLink
          to={"/archive"}
          className={({ isActive }) =>
            isActive
              ? cn(
                  "rounded-full p-2 w-full flex items-center bg-slate-200 dark:bg-slate-700 gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
              : cn(
                  "rounded-full p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
          }
        >
          <Archive className=" w-5 h-5" />
          <span className={cn(" hidden ", sideOpen && "block")}>Archive</span>
        </NavLink>
        <NavLink
          to={"/trash"}
          className={({ isActive }) =>
            isActive
              ? cn(
                  "rounded-full p-2 w-full flex items-center bg-slate-200 dark:bg-slate-700 gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
              : cn(
                  "rounded-full p-2 w-full flex items-center gap-3 hover:bg-slate-100 dark:hover:bg-slate-800 dark:border-r-slate-700",
                  sideOpen && "rounded-l-none"
                )
          }
        >
          <Trash className=" w-5 h-5" />
          <span className={cn(" hidden ", sideOpen && "block")}>Trash</span>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
