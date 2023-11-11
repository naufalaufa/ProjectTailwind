import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdLibraryMusic, MdOutlineImportContacts } from "react-icons/md";

export const DataInfo = [
  {
    id: 1,
    path: "#about",
    style:
      "text-xs grid place-content-center p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap",
    icons: (
      <>
        <AiFillHome />
      </>
    ),
  },
  {
    id: 2,
    path: "#aboutme",
    style:
      "text-xs grid place-content-center p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap",
    icons: (
      <>
        <BsFillPersonFill />
      </>
    ),
  },
  {
    id: 3,
    path: "#project",
    style:
      "text-xs grid place-content-center p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap",
    icons: (
      <>
        <AiFillProject />
      </>
    ),
  },
  {
    id: 4,
    path: "#playlist",
    style:
      "text-xs grid place-content-center p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap",
    icons: (
      <>
        <MdLibraryMusic />
      </>
    ),
  },
  {
    id: 5,
    path: "#contact",
    style:
      "text-xs grid place-content-center p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap",
    icons: (
      <>
        <MdOutlineImportContacts />
      </>
    ),
  },
];
