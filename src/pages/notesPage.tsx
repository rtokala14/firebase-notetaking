import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { useDetectClickOutside } from "react-detect-click-outside";

function NotesPage() {
  const [formOpen, setFormOpen] = useState(false);

  const ref = useDetectClickOutside({ onTriggered: () => setFormOpen(false) });

  return (
    <div className=" w-full flex flex-col items-center pt-10">
      <form
        ref={ref}
        className=" w-4/5 md:w-2/4 border dark:border-slate-700 border-slate-200 rounded-md flex flex-col gap-2 p-2 h-fit"
      >
        {formOpen && <Input placeholder="Title" />}
        <Textarea
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
    </div>
  );
}

export default NotesPage;
