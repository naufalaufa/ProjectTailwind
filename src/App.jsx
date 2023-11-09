import { useState } from "react";
import { About, Navbar, AboutMe, Project, Contact, Footer } from "./components";
import Music from "./components/Music";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { useSelector } from "react-redux";
import ModalBox from "./components/ModalBox";
import ModalBoxContact from "./components/ModalBoxContact";
import ChatBuble from "./components/ChatBuble";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

AOS.init();

const themes = {
  dark: "black",
  linear: "linear-gradient(#eeefeafa , #eaf , #eeeaffff)",
};

const App = () => {
  const { isOpen } = useSelector((state) => state.show);
  const { isOpenContact } = useSelector((state) => state.showContact);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <div
      style={{
        transition: "0.8s",
        background: toggleNavbar ? `${themes.dark}` : `${themes.linear}`,
        color: `${toggleNavbar ? "white" : "black"}`,
      }}
    >
      <div className="w-[100%] max-w-[95vw] m-auto">
        <ToastContainer position="top-center" autoClose={50} />
        {isOpen && <ModalBox />}
        {isOpenContact && <ModalBoxContact />}
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
        <div className=" w-[120px] h-[120px] rounded-e-sm right-0  absolute opacity-10 overflow-hidden blur-sm rounded-full bg-gradient-to-r from-blue-300 to-blue-900 top-[90px] sm:w-[200px] sm:h-[400px] md:w-[400px] md:h-[620px] md:top-[300px] -z-10] lg:top-[110px] lg:w-[580px]"></div>
        <About />
        <div className=" w-[200px] h-[500px] blur-sm absolute opacity-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-900 top-[750px]  sm:w-[300px] sm:h-[500px] sm:top-[750px] -z-10] md:top-[1200px] lg:top-[900px] 2xl:top-[1000px]"></div>
        <AboutMe />
        <ChatBuble />
        <Project />
        <Music />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
