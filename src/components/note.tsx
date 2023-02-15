import {
  type DocumentData,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from "./ui/dropdown-menu";
import {
  Archive,
  MoreVertical,
  Palette,
  Pin,
  PinOff,
  Trash,
  Undo,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "../lib/utils";

function Note({ noteData }: { noteData: DocumentData }) {
  const [theme, setTheme] = useState(
    noteData.theme ? noteData.theme : "default"
  );
  const ref = doc(db, `/userNotes/${noteData.id}`);

  function handleDelete() {
    const ret = updateDoc(ref, { trash: true, archive: false });
  }

  function handleArchive() {
    const ret = updateDoc(ref, { archive: true, trash: false });
  }

  function undoDelete() {
    const ret = updateDoc(ref, { archive: false, trash: false });
  }

  function deletePerm() {
    const ret = deleteDoc(ref);
  }

  function addPin() {
    const ret = updateDoc(ref, { pinned: true });
  }

  function removePin() {
    const ret = updateDoc(ref, { pinned: false });
  }

  function handletheme(newTheme: string) {
    setTheme(newTheme);
    const ret = updateDoc(ref, { theme: newTheme });
  }

  return (
    <div
      className={cn(
        " relative max-h-[440px] break-inside-avoid mb-4 rounded-md group min-h-[140px] border gap-1 dark:border-slate-700 border-slate-200 flex flex-col items-start p-2 pb-8",
        theme === "Red" && "bg-[#c74e46] text-black",
        theme === "Orange" && "bg-[#f8ab63] text-black",
        theme === "Green" && "bg-[#68AB8E] text-black",
        theme === "Blue" && "bg-[#5C93B8] text-black",
        theme === "Purple" && "bg-[#A8A5C9] text-black"
      )}
    >
      <div className=" flex justify-between items-center w-full">
        <div className=" text-xl font-medium py-2">{noteData.title}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className=" rounded-full p-3" variant={"ghost"}>
              <MoreVertical className=" h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {noteData.archive || noteData.trash ? (
              <></>
            ) : noteData.pinned ? (
              <DropdownMenuItem
                className=" flex items-center"
                onClick={() => removePin()}
              >
                <PinOff className=" mr-2 h-4 w-4" />
                <span>Remove Pin</span>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                className=" flex items-center"
                onClick={() => addPin()}
              >
                <Pin className=" mr-2 h-4 w-4" />
                <span>Pin Note</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              className=" items-center flex"
              onClick={() => (noteData.trash ? undoDelete() : handleDelete())}
            >
              {noteData.trash ? (
                <Undo className=" mr-2 h-4 w-4" />
              ) : (
                <Trash className=" mr-2 h-4 w-4" />
              )}
              <span>{noteData.trash ? "Recover note" : "Move to Trash"}</span>
            </DropdownMenuItem>
            {noteData.trash && (
              <DropdownMenuItem
                className=" flex items-center"
                onClick={() => deletePerm()}
              >
                <Trash className=" text-red-400 mr-2 h-4 w-4" />
                <span className=" text-red-400">Delete Permanently</span>
              </DropdownMenuItem>
            )}
            {!noteData.trash && !noteData.archive && (
              <DropdownMenuItem
                className=" flex items-center"
                onClick={() => handleArchive()}
              >
                <Archive className=" mr-2 h-4 w-4" />
                <span>Move to Archive</span>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className=" hover:cursor-pointer flex items-center">
                <Palette className=" mr-2 h-4 w-4" />
                <span>Customize Color</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuLabel>Colors</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={theme === "default"}
                  onCheckedChange={() => handletheme("default")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-transparent border"></div>
                  <span>Default</span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "Red"}
                  onCheckedChange={() => handletheme("Red")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-[#c74e46] border"></div>
                  <span>Red</span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "Orange"}
                  onCheckedChange={() => handletheme("Orange")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-[#f8ab63] border"></div>
                  <span>Orange</span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "Green"}
                  onCheckedChange={() => handletheme("Green")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-[#68AB8E] border"></div>
                  <span>Green</span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "Blue"}
                  onCheckedChange={() => handletheme("Blue")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-[#5C93B8] border"></div>
                  <span>Blue</span>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={theme === "Purple"}
                  onCheckedChange={() => handletheme("Purple")}
                >
                  <div className=" h-4 w-4 rounded-full mr-2 bg-[#A8A5C9] border"></div>
                  <span>Purple</span>
                </DropdownMenuCheckboxItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr
        className={cn(
          theme === "default"
            ? " bg-slate-200 dark:bg-slate-700 w-full border-none h-[1px]"
            : "bg-black dark:bg-black w-full border-none h-[1px]"
        )}
      />
      <div className=" break-all">{noteData.body}</div>
    </div>
  );
}

export default Note;
