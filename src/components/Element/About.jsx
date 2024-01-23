import LogoIcon from "../../assets/react.svg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      id="about"
      className="grid sm:grid-cols-2 h-[100vh] items-center  mb-12 w-full min-w-[300px] m-auto sm:w-full sm:max-w-[1200px] "
    >
      <div className="p-10 mt-10">
        <div className="mb-10 relative">
          <div className="absolute grid place-content-center p-1 w-16 h-16 bg-gradient-to-r from-slate-400 to-blue-600 rounded-full shadow-md shadow-slate-800 top-8 right-[-20px] sm:hidden ">
            <img
              src={LogoIcon}
              alt="logo logo-icon"
              className="object-contain bg-center w-full"
            />
          </div>
          <span className=" font-bold  border-b-4 border-solid sm:hidden">
            <span className="text-blue-500 text-3xl">N</span>aufaL Rifqi
          </span>
        </div>
        <h1 className="text-4xl text-blue-500 font-extrabold mb-5 bg-gradient-to-r from-slate-100 to-blue-300  p-4 rounded-e-md rounded-b-lg shadow-sm shadow-slate-800 z-20 lg:text-6xl  ">
          Front End Developer
        </h1>
        <div className=" lg:text-md 2xl:text-2xl">
          <TypeAnimation
            speed={150}
            repeat={Infinity}
            sequence={[
              "A Dedicated Frontend ' Developer with a strong passion for programming and an instiable curiosity. Interested in technology and design",
              "Lets Enjoy For The Experiences",
            ]}
          />
        </div>
        <button className="bg-blue-500 p-2 text-white rounded-2xl px-5 mt-5 hover:bg-slate-400 shadow-sm shadow-slate-800">
          <a href="#aboutme" className="font-extrabold">
            Show More
          </a>
        </button>
      </div>
      <div>
        <img
          src={LogoIcon}
          className=" sm:w-[100%] max-w-[400px] max-h-[400px] m-auto hidden sm:block"
          alt="logo logo-icon"
        />
      </div>
    </div>
  );
};

export default About;
