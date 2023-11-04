import LogoImage from "../assets/logo-image.png";
import { DiReact } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { showBoxContact } from "../features/showBoxContact";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";

const AboutMe = () => {
  const dispatch = useDispatch();
  const { isOpenContact } = useSelector((state) => state.showContact);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      id="aboutme"
      className="text-center w-full min-w-[300px] m-auto sm:w-full  max-h-[500px]  mt-[200px]  "
    >
      <span className="text-center text-4xl mb-10 font-bold my-40 border-b-4">
        About Me
      </span>
      <div className="flex justify-center mt-10">
        <div className="grid  xl:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={LogoImage}
              alt={LogoImage}
              className="w-[100%] max-w-[600px] bg-gradient-to-r from-blue-100 to-blue-500 rounded-md mb-5 m-auto"
            />
            <button
              className="absolute top-0 bg-blue-500 p-2 text-white font-bold rounded-sm px-4 hover:bg-slate-400"
              onClick={() => dispatch(showBoxContact(!isOpenContact))}
            >
              Contact Me
            </button>
          </div>
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl mb-5">
              Hi iam <span className="text-blue-500 font-bold">Naufal </span>
            </h1>
            <p className="text-sm mb-20 sm:text-sm">
              Iam Front End Developer , focus in user interfaces and user
              experience , familiar with using technologies such as react js ,
              tailwind css, javascript, html, css. Live in Jakarta Indonesia.
            </p>
            <h1 className="text-2xl p-2 rounded font-bold  ">
              Tech Stack <span className="text-blue-500">Overview</span>
            </h1>
            <div className="flex justify-center mt-5 flex-wrap gap-4 ">
              <DiReact size={40} />
              <SiRedux size={40} />
              <BiLogoTailwindCss size={40} />
              <IoLogoJavascript size={40} />
              <BsGit size={40} />
              <SiCss3 size={40} />
              <AiFillHtml5 size={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
