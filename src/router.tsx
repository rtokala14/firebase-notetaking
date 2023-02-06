import { Navigate, createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import { LoggedInLayout } from "./layouts/LoggedInLayout";
import NotesPage from "./pages/notesPage";
import ArchivePage from "./pages/archivePage";
import TrashPage from "./pages/trashPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./lib/firebase";

export const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
          {
            element: (
              <RequireAuth>
                <LoggedInLayout />
              </RequireAuth>
            ),
            children: [
              {
                path: "/notes",
                element: <NotesPage />,
              },
              {
                path: "/archive",
                element: <ArchivePage />,
              },
              {
                path: "/trash",
                element: <TrashPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function RequireAuth({ children }: { children: JSX.Element }) {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}
