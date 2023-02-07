import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const [user, loading] = useAuthState(auth);

  if (user && !loading) {
    return <Navigate to={"/notes"} replace />;
  }
  return (
    <div className=" h-[90vh]">
      {user ? `Logged in as ${user.displayName}` : "User is not logged in"}
    </div>
  );
}
