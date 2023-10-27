import LogoIcon from "../assets/programmer.svg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div
      id="about"
      className="grid sm:grid-cols-2  h-[100vh] items-center mb-12"
    >
      <div className="p-10">
        <h1 className="text-4xl text-blue-500 font-extrabold mb-5  ">
          Front End Developer
        </h1>
        <div>
          <TypeAnimation
            speed={150}
            repeat={Infinity}
            sequence={[
              "A Dedicated Frontend ' Developer with a strong passion for programming and an instiable curiosity. Interested in technology and design",
              "Lets Enjoy For The Experiences",
            ]}
          />
        </div>
        <button className="bg-blue-500 p-2 text-white rounded-2xl px-5 mt-5 hover:bg-slate-400">
          <a href="#aboutme" className="font-extrabold">
            Show More
          </a>
        </button>
      </div>
      <div>
        <img
          src={LogoIcon}
          className="w-[100%] max-w-[400px] max-h-[400px] m-auto"
          alt="error"
        />
      </div>
    </div>
  );
};

export default About;
