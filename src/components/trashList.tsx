import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import {
  type DocumentData,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Note from "./note";

function TrashList() {
  const [user, loading] = useAuthState(auth);
  const collectionRef = collection(db, "userNotes");
  const [notes, setNotes] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(
      collectionRef,
      orderBy("lastUpdate", "desc"),
      where("userId", "==", user ? user.uid : "null"),
      where("trash", "==", true),
      where("archive", "==", false)
    );

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
    <div className=" columns-1 [column-fill:_balance] md:columns-3 lg:columns-4 gap-4 h-full w-full px-4 space-y-4">
      {notes.map((note) => (
        <Note key={note.id} noteData={note} />
      ))}
    </div>
  );
}

export default TrashList;
