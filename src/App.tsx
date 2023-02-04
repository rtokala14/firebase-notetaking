import { ChevronDown, Laptop, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className=" min-h-screen flex flex-col w-full">
      {/* NavBar */}
      <div className=" py-2 px-1 items-center justify-evenly w-full flex border border-b-black">
        <div className=" text-xl font-medium">Note-ify</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"subtle"}>
              <span>Theme</span>
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default App;
