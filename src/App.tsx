import { ChevronDown, Laptop, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

import { darkTheme } from "./lib/themer";

import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./lib/fireConfig";
import { useState } from "react";

function App() {
  // Dark Mode stuff
  const { theme, setTheme } = darkTheme();

  // Auth stuff
  const [isSignedIn, setIsSignedIn] = useState(false);
  const provider = new GoogleAuthProvider();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });
  function signIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  function signOutG() {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  }
  return (
    <div className="flex flex-col w-full ">
      {/* NavBar */}
      <div className=" py-2 px-1 items-center justify-evenly w-full flex border-b border-b-slate-200 dark:border-b-slate-700">
        {/* Logo */}
        <div className=" text-xl font-medium">Note-ify</div>
        <div className=" gap-2 flex">
          {/* Login */}
          <Button
            variant={isSignedIn ? "outline" : "default"}
            onClick={isSignedIn ? signOutG : signIn}
          >
            {isSignedIn ? "Sign Out" : "Sign In with Google"}
          </Button>

          {/* DarkMode Dropdown */}
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
      </div>

      {/* Checking User authentication */}
      {isSignedIn ? <div>User signed in</div> : <div>User not signed in</div>}
    </div>
  );
}

export default App;
