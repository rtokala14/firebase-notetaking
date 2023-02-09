import { type DocumentData, updateDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "./ui/dropdown-menu";
import { Archive, ArrowDown, Trash, Undo } from "lucide-react";
import { Button } from "./ui/button";

function Note({ noteData }: { noteData: DocumentData }) {
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

  return (
    <div className=" relative max-h-[440px] break-inside-avoid mb-4 rounded-md group min-h-[140px] border gap-1 dark:border-slate-700 border-slate-200 flex flex-col items-start p-2 pb-8">
      <div className=" flex justify-between items-center w-full">
        <div className=" text-xl font-medium py-2">{noteData.title}</div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className=" rounded-full p-3" variant={"ghost"}>
              <ArrowDown className=" h-4 w-4 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
            <DropdownMenuItem
              className=" flex items-center"
              onClick={() => handleArchive()}
            >
              <Archive className=" mr-2 h-4 w-4" />
              <span>Move to Archive</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr className=" bg-slate-200 dark:bg-slate-700 w-full h-[1px]" />
      <div className=" overflow-hidden">{noteData.body}</div>
    </div>
  );
}

export default Note;
