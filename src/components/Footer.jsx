import { AiFillCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-gradient-to-t from-slate-400 to-blue-500 p-5 rounded text-white font-bold  relative text-center"
    >
      <button className="p-2 bg-white text-black rounded px-3 absolute top-[-20px] translate-x-[-10px] border border-solid">
        <a href="#about">^</a>
      </button>
      <div>
        <h1 className="text-sm sm:text-xl mt-5">Mochamad Naufal Aufa Rifqi</h1>
      </div>
      <div className="flex justify-center mt-5">
        <p className="flex items-center text-sm font-extralight">
          {" "}
          Copyright 2023 <AiFillCopyrightCircle /> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
