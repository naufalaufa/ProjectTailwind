import { FaLinkedin } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="bg-blue-900  p-10 rounded w-full lg:grid md:grid md:grid-cols-4 lg:grid-cols-4 lg:place-items-center gap-28 text-center sm:text-start min-h-[200px] shadow-md shadow-slate-900">
      <div className="my-5 text-center">
        <h1 className="font-bold text-white text-2xl whitespace-nowrap ">
          Naufal Aufa
        </h1>
        <p className="text-xs sm:text-sm text-white whitespace-nowrap mt-5 ">
          Mochamad Naufal Aufa
        </p>
        <p className="text-white text-xs text-center md:text-left">
          Rifqi Portfolio
        </p>
      </div>
      <div className="my-5 text-center">
        <h1 className="font-bold text-2xl text-white">Pages</h1>
        <ul className="grid gap-2 mt-5 text-white">
          <li className="text-sm">About</li>
          <li className="text-sm">Blog</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-2xl text-white my-5 whitespace-nowrap text-center">
          Social Media
        </h1>
        <ul className="grid gap-2 mt-5 text-white">
          <li className="text-sm">
            <a
              className="flex items-center gap-1 justify-center"
              target="_blank"
              href="https://www.linkedin.com/in/naufal-aufa-a7a415257/"
              rel="noreferrer"
            >
              <span>Linkedin</span>
              <span>
                <FaLinkedin size={20} />
              </span>
            </a>
          </li>
          <li className="text-sm">
            <a
              className="flex items-center justify-center"
              target="_blank"
              href="https://www.instagram.com/_opal.jpg/?hl=id"
              rel="noreferrer"
            >
              <span>Instagram</span>
              <span>
                <BiLogoInstagramAlt size={20} />
              </span>
            </a>
          </li>
          <li className="text-sm">
            <a
              className="flex items-center justify-center gap-2"
              target="_blank"
              href="https://github.com/naufalaufa"
              rel="noreferrer"
            >
              <span>Github</span>
              <span>
                <FaGithub size={20} />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="my-5">
        <h1 className="text-xl text-white font-bold  text-center">Contact</h1>
        <ul className="text-white mt-5">
          <li className="text-xs whitespace-nowrap flex items-center gap-2 justify-center">
            <span>
              <FaPhone />
            </span>
            <span>+62-851-5680-2452</span>
          </li>
          <li className="whitespace-nowrap text-xs flex items-center gap-3 mt-2 justify-center">
            <span>
              <FaLocationDot />
            </span>
            <span>Jakarta Indonesia</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer2;
