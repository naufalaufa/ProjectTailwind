import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <div className="grid place-items-center bg-slate-800 p-10 rounded text-white font-bold relative mt-5 w-full min-w-[300px] sm:grid sm:grid-cols-2 sm:place-items-center ">
      <div>
        <h1 className="text-sm sm:text-2xl mt-5 whitespace-nowrap ">
          Mochamad Naufal Aufa Rifqi
        </h1>
        <p className="flex justify-center text-sm font-extralight my-2 sm:justify-normal">
          All rights reserved{" "}
          <AiFillCopyrightCircle className="ml-1" size={20} />
        </p>
        <p className="mt-2 text-center text-xs font-light sm:text-left">
          Mochamad Naufal Aufa Rifqi 2023{" "}
        </p>
      </div>
      <div>
        <h1 className="my-2">Get In Touch!</h1>
        <div className="flex gap-5 justify-center ">
          <a
            href="mailto:muhamadnaufalaufarifqi@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MdEmail
              size={30}
              className="shadow-md shadow-slate-400 p-1 cursor-pointer "
            />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@tememp1k_?_t=8h7ihR0DwH9&_r=1"
            rel="noreferrer"
          >
            <SiTiktok
              size={30}
              className="shadow-md shadow-slate-400 p-1 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
