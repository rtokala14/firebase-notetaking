import {
  type DocumentData,
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import Note from "./note";

function NotesList() {
  const [user, loading] = useAuthState(auth);
  const collectionRef = collection(db, !loading && user ? user.uid : "theVoid");
  const [notes, setNotes] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collectionRef, orderBy("lastUpdate", "desc"));

    const unsub = onSnapshot(q, (querySnapshot) => {
      const items: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setNotes(items);
    });

    return () => {
      unsub();
    };
  }, [loading]);

  return (
    // <div className=" w-full px-4 grid items-start justify-center gap-2 md:gap-4 md:grid-cols-4">
    <div className=" columns-1 [column-fill:_balance] md:columns-3 lg:columns-4 gap-4 h-full w-full px-4 space-y-4">
      {notes.map((note) => (
        <Note key={note.id} noteData={note} />
      ))}
    </div>
  );
}

export default NotesList;