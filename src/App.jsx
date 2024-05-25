import React, { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import User_Management from "./components/UserManagement/User_Management";
import User from "./components/UserManagement/User";

const Login = lazy(() => import("./components/AuthForm/Login"));
const MainBody = lazy(() => import("./components/MainBody"));

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/",
      element: <Navigate to="/auth" />, // Redirect root to /auth
    },
    {
      path: "/app",
      element: <MainBody />,
      children: [
        {
          path: "/app",
          element: <User_Management />,
        },
        {
          path: "/app/user_management",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={routes} />
      </Suspense>
    </>
  );
}
