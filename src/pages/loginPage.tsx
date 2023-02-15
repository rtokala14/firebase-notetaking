import { Button } from "../components/ui/button";
import {
  auth,
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInWithGoogleRedirect,
  signInWithGithubRedirect,
} from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [user, loading] = useAuthState(auth);

  if (user && !loading) {
    return <Navigate to={"/notes"} replace />;
  }
  return (
    <div className=" flex flex-col w-full items-center h-[90vh] justify-center ">
      <h2 className=" text-2xl font-bold mb-5">Login</h2>
      <div className=" border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center gap-4">
        <Button
          variant={"default"}
          className=" w-full hidden sm:block"
          onClick={signInWithGooglePopup}
        >
          Login with Google
        </Button>
        <Button
          variant={"default"}
          className=" w-full sm:hidden"
          onClick={signInWithGoogleRedirect}
        >
          Login with Google
        </Button>
        <Button
          variant={"default"}
          onClick={signInWithGithubPopup}
          className=" w-full hidden sm:block"
        >
          Login with GitHub
        </Button>
        <Button
          variant={"default"}
          className=" w-full sm:hidden"
          onClick={signInWithGithubRedirect}
        >
          Login with GitHub
        </Button>
        {/* <Button
          variant={"default"}
          onClick={signInWithTwitterPopup}
          className=" w-full"
        >
          Login with Twitter
        </Button> */}
      </div>
    </div>
  );
}
