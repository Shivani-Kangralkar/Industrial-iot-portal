import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBody from "./components/MainBody";
import Login from "./components/AuthForm/Login";

export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/auth",
      element: <Login />,
    },
    {
      path: "/",
      element: <MainBody />,
    },
  ]);

  return (
    <>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}
