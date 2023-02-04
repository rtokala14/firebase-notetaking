import { Button } from "./components/ui/button";

import { auth, logout, signInWithGooglePopup } from "./lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";
import ThemeDropdown from "./components/themeDropdown";

function App() {
  // Theme Stuff

  // Auth Stuff
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="flex flex-col w-full ">
      {/* NavBar */}
      <div className=" py-2 px-1 items-center justify-evenly w-full flex border-b border-b-slate-200 dark:border-b-slate-700">
        {/* Logo */}
        <div className=" text-xl font-medium">Note-ify</div>

        {/* Test Login Button */}
        <Button
          onClick={user ? logout : signInWithGooglePopup}
          variant={user ? "outline" : "default"}
        >
          {user ? "Log Out" : "Sign in with Google"}
        </Button>
        {/* Theme DropDown */}
        <ThemeDropdown />
      </div>
      <div>
        {user ? `Logged in as ${user.displayName}` : "User not logged in"}
      </div>
    </div>
  );
}

export default App;
