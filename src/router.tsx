import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "./layouts/BaseLayout";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";

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
        ],
      },
    ],
  },
]);
