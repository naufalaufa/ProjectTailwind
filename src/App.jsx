import { useState } from "react";
import { About, Navbar, AboutMe, Project, Contact, Footer } from "./components";
import Music from "./components/Music";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useSelector } from "react-redux";
import ModalBox from "./components/ModalBox";
import ModalBoxContact from "./components/ModalBoxContact";

AOS.init();
const App = () => {
  const { isOpen } = useSelector((state) => state.show);
  const { isOpenContact } = useSelector((state) => state.showContact);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div
      style={{
        transition: "0.8s",
        background: `${
          toggleNavbar
            ? "black"
            : "linear-gradient(#eeefeafa , #eaf , #eeeaffff)"
        }`,
        color: `${toggleNavbar ? "white" : "black"}`,
      }}
    >
      <div className="w-[100%] max-w-[95vw] m-auto">
        {isOpen && <ModalBox />}
        {isOpenContact && <ModalBoxContact />}
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
