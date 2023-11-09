import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineImportContacts } from "react-icons/md";

const Info = () => {
  return (
    <div className="fixed bottom-2 z-[9999999] rounded  left-2 ">
      <div className="flex flex-col justify-center gap-3 p-1 ">
        <a
          href="#about"
          className="text-xs p-1 lg:btn-secondary rounded lg:btn btn-secondary shadow-md shadow-slate-800 whitespace-nowrap"
        >
          <span>
            <AiFillHome size={20} />
          </span>
        </a>
        <a
          href="#aboutme"
          className=" text-xs lg:btn-secondary lg:btn btn-secondary rounded whitespace-nowrap p-1 shadow-md shadow-slate-800"
        >
          <span>
            <BsFillPersonFill size={20} />
          </span>
        </a>
        <a
          href="#project"
          className=" text-xs lg:btn-secondary lg:btn btn-secondary p-1 whitespace-nowrap rounded shadow-md shadow-slate-800"
        >
          <span>
            <AiFillProject size={20} />
          </span>
        </a>
        <a
          href="#playlist"
          className="text-xs lg:btn-secondary lg:btn btn-secondary whitespace-nowrap p-1 rounded shadow-md shadow-slate-800"
        >
          <span>
            <MdLibraryMusic size={20} />
          </span>
        </a>
        <a
          href="#contact"
          className="text-xs lg:btn-secondary lg:btn btn-secondary whitespace-nowrap p-1 rounded shadow-md shadow-slate-800"
        >
          <span>
            <MdOutlineImportContacts size={20} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Info;
