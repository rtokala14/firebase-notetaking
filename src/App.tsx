import { ChevronDown, Laptop, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

import { darkTheme } from "./lib/themer";

function App() {
  const { theme, setTheme } = darkTheme();
  return (
    <div className="flex flex-col w-full ">
      {/* NavBar */}
      <div className=" py-2 px-1 items-center justify-evenly w-full flex border-b border-b-slate-200 dark:border-b-slate-700">
        <div className=" text-xl font-medium">Note-ify</div>
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
  );
}

export default App;
