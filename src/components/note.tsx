import { type DocumentData, updateDoc, doc } from "firebase/firestore";
import { Archive, Trash } from "lucide-react";
import { db } from "../lib/firebase";

function Note({ noteData }: { noteData: DocumentData }) {
  const ref = doc(db, `/userNotes/${noteData.id}`);

  function handleDelete() {
    const ret = updateDoc(ref, { trash: true, archive: false });
  }

  function handleArchive() {
    const ret = updateDoc(ref, { archive: true, trash: false });
  }

  return (
    <div className=" relative max-h-[440px] break-inside-avoid mb-4 rounded-md group min-h-[140px] border gap-1 dark:border-slate-700 border-slate-200 flex flex-col items-start p-2 pb-8">
      <div className=" text-xl font-medium">{noteData.title}</div>
      <hr className=" bg-slate-200 dark:bg-slate-700 w-full h-[1px]" />
      <div className=" overflow-hidden">{noteData.body}</div>
      <div className=" absolute bottom-2 w-full hidden group-hover:flex gap-2">
        <Trash
          className=" h-5 w-5 hover:cursor-pointer text-red-400"
          onClick={() => handleDelete()}
        />
        <Archive
          className=" h-5 w-5 hover:cursor-pointer "
          onClick={() => handleArchive()}
        />
      </div>
    </div>
  );
}

export default Note;
