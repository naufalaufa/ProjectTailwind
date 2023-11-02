import { useState } from "react";
import { About, Navbar, AboutMe, Project, Contact, Footer } from "./components";
import Music from "./components/Music";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

AOS.init();
const App = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div
      style={{
        transition: "0.8s",
        backgroundColor: `${toggleNavbar ? "black" : "white"}`,
        color: `${toggleNavbar ? "white" : "black"}`,
      }}
    >
      <div className="w-[100%] max-w-[95vw] m-auto ">
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
        <About />
        <AboutMe />
        <Project />
        <Music />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
