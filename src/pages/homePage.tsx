import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (user && !loading) {
    return <Navigate to={"/notes"} replace />;
  }
  return (
    <div className=" h-[90vh] hero">
      <div className="hero-content">
        <div className=" flex flex-col gap-1">
          <h1 className="text-5xl font-medium">Hello There!</h1>
          <p className=" py-6 text-lg">
            Our platform is designed to help you capture your ideas, thoughts,
            and important information in a fast and efficient way. With our
            easy-to-use note taking tools, you can keep track of everything from
            meeting notes to personal to-do lists. Say goodbye to the hassle of
            flipping through pages of notebooks or searching through stacks of
            paper. Our digital note taking system offers you the convenience of
            accessing your notes anytime, anywhere, from any device.
          </p>
          <p className="py-6 text-lg">
            Whether you're a student, a professional, or just someone who likes
            to stay organized, our note taking website has everything you need
            to make your life easier. So why wait? Sign in today and start
            taking your note-taking game to the next level!
          </p>
          <div className=" flex gap-2 items-center justify-center">
            <Button onClick={() => navigate("/login")}>Sign in</Button>
            <p className=" text-lg">to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
}
