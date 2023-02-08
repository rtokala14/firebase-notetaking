import {
  type DocumentData,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

function NotesList() {
  const [user, loading] = useAuthState(auth);
  const collectionRef = collection(db, !loading && user ? user.uid : "theVoid");
  const [notes, setNotes] = useState<DocumentData[]>([]);

  useEffect(() => {
    const q = query(collectionRef);

    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
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
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </div>
  );
}

export default NotesList;
