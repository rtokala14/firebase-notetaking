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
} from "./ui/dropdown-menu";
import { Archive, MoreVertical, Pin, PinOff, Trash, Undo } from "lucide-react";
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

  function deletePerm() {
    const ret = deleteDoc(ref);
  }

  function addPin() {
    const ret = updateDoc(ref, { pinned: true });
  }

  function removePin() {
    const ret = updateDoc(ref, { pinned: false });
  }

  return (
    <div className=" relative max-h-[440px] break-inside-avoid mb-4 rounded-md group min-h-[140px] border gap-1 dark:border-slate-700 border-slate-200 flex flex-col items-start p-2 pb-8">
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <hr className=" bg-slate-200 dark:bg-slate-700 w-full h-[1px]" />
      <div className=" overflow-hidden">{noteData.body}</div>
    </div>
  );
}

export default Note;
