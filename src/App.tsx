import { ChevronDown, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

import { darkTheme } from "./lib/themer";
import { auth, logout, signInWithGooglePopup } from "./lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // Theme Stuff
  const { theme, setTheme } = darkTheme();

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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"subtle"}>
              <span>Theme</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem
              checked={theme === "light"}
              onCheckedChange={() => setTheme("light")}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={theme === "dark"}
              onCheckedChange={() => setTheme("dark")}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div>
        {user ? `Logged in as ${user.displayName}` : "User not logged in"}
      </div>
    </div>
  );
}

export default App;
