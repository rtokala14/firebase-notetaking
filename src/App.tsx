import { auth } from "./lib/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  // Theme Stuff

  // Auth Stuff
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="flex flex-col w-full ">
      {/* NavBar */}

      <div>
        {user ? `Logged in as ${user.displayName}` : "User not logged in"}
      </div>
    </div>
  );
}

export default App;
