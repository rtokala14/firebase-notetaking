import {
  type DocumentData,
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import Note from "./note";

function NotesList() {
  const [user, loading] = useAuthState(auth);
  const collectionRef = collection(db, "userNotes");
  const [notes, setNotes] = useState<DocumentData[]>([]);

  const pinnedNotes: DocumentData[] = notes.filter((note) => {
    if (note.pinned) return note;
  });

  useEffect(() => {
    const q = query(
      collectionRef,
      orderBy("lastUpdate", "desc"),
      where("userId", "==", user ? user.uid : "null"),
      where("trash", "==", false),
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
    <div className=" w-full h-full px-4">
      <p>Pinned</p>
      <div className="mb-4 columns-1 [column-fill:_balance] md:columns-3 lg:columns-4 gap-4 w-full space-y-4">
        {pinnedNotes.length > 0 ? (
          pinnedNotes.map((note) => <Note key={note.id} noteData={note} />)
        ) : (
          <div className=" pt-1 text-sm italic">
            No pins yet. Pin a note to see it here.
          </div>
        )}
      </div>
      <p>Notes</p>
      <div className=" columns-1 [column-fill:_balance] md:columns-3 lg:columns-4 gap-4 w-full space-y-4">
        {notes.map((note) => {
          if (!note.pinned) {
            return <Note key={note.id} noteData={note} />;
          }
        })}
      </div>
    </div>
  );
}

export default NotesList;
