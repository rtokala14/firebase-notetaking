import { Button } from "../components/ui/button";
import {
  auth,
  signInWithGooglePopup,
  signInWithGithubPopup,
  signInWithTwitterPopup,
} from "../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div className=" flex flex-col w-full items-center h-[90vh] justify-center ">
      <h2 className=" text-2xl font-bold mb-5">Login</h2>
      <div className=" border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex flex-col items-center gap-4">
        <Button
          variant={"default"}
          className=" w-full"
          onClick={signInWithGooglePopup}
        >
          Login with Google
        </Button>
        <Button
          variant={"default"}
          onClick={signInWithGithubPopup}
          className=" w-full"
        >
          Login with GitHub
        </Button>
        <Button
          variant={"default"}
          onClick={signInWithTwitterPopup}
          className=" w-full"
        >
          Login with Twitter
        </Button>
      </div>
    </div>
  );
}
