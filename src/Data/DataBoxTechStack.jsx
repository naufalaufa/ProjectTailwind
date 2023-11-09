import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiDaisyui, SiRedux } from "react-icons/si";

export const IconBox = [
  {
    id: 1,
    name: "React js",
    icon: (
      <>
        <DiReact size={50} color="white" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },

  {
    id: 2,
    icon: (
      <>
        <SiRedux size={50} color="blue" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 3,
    icon: (
      <>
        <BiLogoTailwindCss size={50} className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 4,
    icon: (
      <>
        <IoLogoJavascript size={50} color="yellow" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 5,
    icon: (
      <>
        <SiDaisyui size={50} color="#eaeaeaea" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 6,
    icon: (
      <>
        <BsGit size={50} color="red" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 7,
    icon: (
      <>
        <SiCss3 size={50} color="red" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
  {
    id: 8,
    icon: (
      <>
        <AiFillHtml5 size={50} color="blue" className="p-1" />
      </>
    ),
    style:
      "text-slate-100 shadow-md shadow-slate-500 2xl:w-[50px] 2xl:h-[50px] cursor-pointer",
  },
];
