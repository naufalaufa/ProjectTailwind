import { LandingComponents } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blogs, ErrorPage, HomeBlog, LandingPage, SingleBlogs } from "./Pages";

import { loader as SingleBlogsLoader } from "./pages/SingleBlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingComponents />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "blog",
        element: <HomeBlog />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <SingleBlogs />,
        loader: SingleBlogsLoader,
      },
    ],
  },
]);

AOS.init();

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
