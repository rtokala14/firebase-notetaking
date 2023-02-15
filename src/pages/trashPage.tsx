import TrashList from "../components/trashList";

function TrashPage() {
  return (
    <div className=" w-full gap-7 flex flex-col items-center pt-10">
      <h2 className=" text-xl font-bold self-start ml-4">Trash</h2>
      <TrashList />
    </div>
  );
}

export default TrashPage;
