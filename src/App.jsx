import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Layout from "./Layout";
import PostDetails from "./PostDetails";
import About from "./About";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "about", element: <About /> },
      { path: "/post/:id", element: <PostDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
