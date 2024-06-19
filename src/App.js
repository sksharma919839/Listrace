import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home";
import Workk from "./Page/Workk";
import Explorer from "./Page/Explorer";
import Revieww from "./Page/Revieww";
import Blogg from "./Page/Blogg";
import Contactt from "./Page/Contactt";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/works",
      element: <Workk />,
    },
    {
      path: "/explore",
      element: <Explorer />,
    },
    {
      path: "/review",
      element: <Revieww />,
    },
    {
      path: "/blog",
      element: <Blogg />,
    },
    {
      path: "/contact",
      element: <Contactt />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
