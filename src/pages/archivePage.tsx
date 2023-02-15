import ArchiveList from "../components/archiveList";

function ArchivePage() {
  return (
    <div className=" w-full gap-7 flex flex-col items-center pt-10">
      <h2 className=" text-xl font-bold self-start ml-4">Archive</h2>
      <ArchiveList />
    </div>
  );
}

export default ArchivePage;
