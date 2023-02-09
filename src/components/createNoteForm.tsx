import { type FormEvent, useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { cn } from "../lib/utils";
import { auth, db } from "../lib/firebase";
import { v4 as uuidv4 } from "uuid";
import { collection, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

function CreateNoteForm() {
  // handle displaying the form on focus
  const [formOpen, setFormOpen] = useState(false);
  const ref = useDetectClickOutside({ onTriggered: () => setFormOpen(false) });

  // Store input and handle submit
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, loading] = useAuthState(auth);

  const collectionRef = collection(db, !loading && user ? user.uid : "theVoid");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newNote = {
      title,
      body,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      lastUpdate: serverTimestamp(),
    };

    try {
      const noteRef = doc(collectionRef, newNote.id);
      await setDoc(noteRef, newNote);
      setTitle("");
      setBody("");
      setFormOpen(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form
      ref={ref}
      onSubmit={handleSubmit}
      className=" w-4/5 md:w-2/4 border dark:border-slate-700 border-slate-200 rounded-md flex flex-col gap-2 p-2 h-fit"
    >
      {formOpen && (
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
      )}
      <Textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={formOpen ? "Note body" : "Create Note"}
        className={cn("h-10 resize-none", formOpen && "h-32")}
        onFocus={() => setFormOpen(true)}
      />
      {formOpen && (
        <Button variant={"default"} className=" self-end">
          Create
        </Button>
      )}
    </form>
  );
}

export default CreateNoteForm;
