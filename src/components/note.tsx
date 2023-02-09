import { type DocumentData } from "firebase/firestore";

function Note({ noteData }: { noteData: DocumentData }) {
  return (
    <div className=" break-inside-avoid mb-4 rounded-md min-h-[140px] border gap-1 dark:border-slate-700 border-slate-200 flex flex-col items-start p-2">
      <div>{noteData.title}</div>
      <hr className=" bg-slate-200 dark:bg-slate-700 w-full h-[1px]" />
      <div>{noteData.body}</div>
    </div>
  );
}

export default Note;
