import { LandingComponents } from "./components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Blogs, LandingPage } from "./Pages";
import AboutPages from "./Pages/AboutPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingComponents />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "about",
        element: <AboutPages />,
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
