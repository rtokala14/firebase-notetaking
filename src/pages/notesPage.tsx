import CreateNoteForm from "../components/createNoteForm";
import NotesList from "../components/notesList";

function NotesPage() {
  return (
    <div className=" w-full gap-7 flex flex-col items-center pt-10">
      <CreateNoteForm />
      <NotesList />
    </div>
  );
}

export default NotesPage;
