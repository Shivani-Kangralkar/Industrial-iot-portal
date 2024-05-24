import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody";
import Login from "./components/AuthForm/Login";
import User_Management from "./components/UserManagement/User_Management";
import User from "./components/UserManagement/User";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/auth",
      element: <Login />,
    },

    {
      path: "/",
      element: <MainBody />,
      children: [
        {
          path: "/",
          element: <User_Management />,
        },
        {
          path: "/user_Management",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}
