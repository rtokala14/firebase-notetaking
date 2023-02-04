import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

export default function HomePage() {
  const [user] = useAuthState(auth);
  return (
    <div className=" h-[90vh]">
      {user ? `Logged in as ${user.displayName}` : "User is not logged in"}
    </div>
  );
}
