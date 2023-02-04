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
        className=" text-xl font-semibold"
        onClick={() => navigate("/")}
      >
        Note-ify
      </Button>

      {/* Test Login Button */}
      <div className=" flex gap-2 items-center">
        {location.pathname !== "/login" && (
          <Button
            onClick={user ? logout : () => navigate("/login")}
            variant={user ? "outline" : "default"}
          >
            {user ? "Log Out" : "Sign in"}
          </Button>
        )}
        {/* Theme DropDown */}
        <ThemeDropdown />
      </div>
    </nav>
  );
};

export default NavBar;