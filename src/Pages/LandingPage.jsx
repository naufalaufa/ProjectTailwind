import { useSelector } from "react-redux";
import {
  About,
  AboutMe,
  ChatBuble,
  Contact,
  Footer,
  Info,
  ModalBox,
  ModalBoxContact,
  Music,
  Project,
} from "../components";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const LandingPage = () => {
  const { isOpen } = useSelector((state) => state.show);
  const { isOpenContact } = useSelector((state) => state.showContact);
  const [toggleInfo, setToggleInfo] = useState(false);
  return (
    <>
      <div className="w-[100%] max-w-[95vw] m-auto ">
        <ToastContainer position="bottom-center" autoClose={50} />
        {isOpen && <ModalBox />}
        {isOpenContact && <ModalBoxContact />}
        <div className=" w-[120px] h-[50px] rounded-e-sm right-0  absolute opacity-10 overflow-hidden blur-sm rounded-full bg-gradient-to-r from-blue-300 to-blue-900 top-[90px] sm:w-[200px] sm:h-[400px] md:w-[400px] md:h-[620px] md:top-[300px] -z-10] lg:top-[90px] lg:w-[580px]"></div>
        <About />
        <div className=" w-[200px] h-[500px] blur-sm absolute opacity-10 rounded-full bg-gradient-to-r from-blue-300 to-blue-900 top-[750px]  sm:w-[300px] sm:h-[500px] sm:top-[750px] -z-10] md:top-[1200px] lg:top-[900px] 2xl:top-[1000px]"></div>
        <Info toggleInfo={toggleInfo} setToggleInfo={setToggleInfo} />
        <AboutMe />
        <ChatBuble />
        <Project />
        <Music />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;