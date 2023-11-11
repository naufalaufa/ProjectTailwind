import { LandingComponents } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blogs, ErrorPage, LandingPage } from "./Pages";

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
        path: "blogs",
        element: <Blogs />,
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
