import { Github, StickyNote } from "lucide-react";
import { auth, logout, signInWithGooglePopup } from "../lib/firebase";
import ThemeDropdown from "./themeDropdown";
import { Button } from "./ui/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useLocation } from "react-router-dom";

const NavBar = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className=" py-2 px-2 items-center justify-between w-full flex border-b border-b-slate-200 dark:border-b-slate-700">
      {/* Logo */}
      <Button
        variant={"ghost"}
        className=" text-2xl font-semibold animate-in slide-in-from-top-6 duration-700"
        onClick={() => navigate("/")}
      >
        <StickyNote className=" mr-2 h-6 w-6" />
        <span className=" hidden sm:block">Note-ify</span>
      </Button>

      {/* Test Login Button */}
      <div className=" flex gap-2 items-center">
        <Button variant={"link"} className=" rounded-full">
          <a
            href="https://github.com/rtokala14/firebase-notetaking"
            rel={"noreferrer"}
            target="_blank"
          >
            <Github className=" h-4 w-4" />
          </a>
        </Button>
        {location.pathname !== "/login" && (
          <Button
            onClick={user ? logout : () => navigate("/login")}
            variant={user ? "outline" : "default"}
          >
            {user && !loading ? (
              <div className=" flex gap-2 items-center">
                <img
                  src={user.photoURL!}
                  alt={`${user.displayName}'s profile picture`}
                  className=" rounded-full h-7 w-7"
                />
                <span>Log Out</span>
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
        )}
        {/* Theme DropDown */}
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default NavBar;
