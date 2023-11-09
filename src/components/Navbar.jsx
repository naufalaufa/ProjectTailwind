import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import { MdOutlineImportContacts } from "react-icons/md";
import PropsTypes from "prop-types";

const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <nav
      id="navbar"
      className="navbar fixed mx-auto w-screen min-w-[300px]  lg:w-full flex px-8 py-4 lg:grid grid-flow-col justify-between items-center z-[9999999] bg-white/60 left-0 "
    >
      <div className="navbar-start">
        <h2 className="font-bold text-xs tracking-wide capitalize sm:text-2xl whitespace-nowrap mr-24">
          Mochamad Naufal Aufa Rifqi
        </h2>
      </div>
      <div className="grid ">
        <section className="navbar-center lg:static fixed grid  grid-flow-col bg-white/40  lg:flex gap-5 m-auto w-full max-w-max  p-1 rounded  left-0 right-0 bottom-5 ">
          <div className="flex justify-center gap-3 p-1 ">
            <a
              href="#about"
              className="text-xs p-1 rounded lg:btn btn-neutral whitespace-nowrap"
            >
              <span className="hidden lg:block ">Home</span>
              <span className="lg:hidden">
                <AiFillHome size={20} />
              </span>
            </a>
            <a
              href="#aboutme"
              className=" text-xs lg:btn btn-neutral rounded whitespace-nowrap p-1"
            >
              <span className="hidden lg:block">About</span>
              <span className="lg:hidden">
                <BsFillPersonFill size={20} />
              </span>
            </a>
            <a
              href="#project"
              className=" text-xs lg:btn btn-neutral p-1 whitespace-nowrap rounded"
            >
              <span className="hidden lg:block">Project</span>
              <span className="lg:hidden">
                <AiFillProject size={20} />
              </span>
            </a>
            <a
              href="#playlist"
              className="text-xs lg:btn btn-neutral whitespace-nowrap p-1 rounded"
            >
              <span className="hidden lg:block">Playlist</span>
              <span className="lg:hidden">
                <MdLibraryMusic size={20} />
              </span>
            </a>
            <a
              href="#contact"
              className="text-xs lg:btn btn-neutral whitespace-nowrap p-1 rounded"
            >
              <span className="hidden lg:block">Contact</span>
              <span className="lg:hidden">
                <MdOutlineImportContacts size={20} />
              </span>
            </a>
          </div>
        </section>
      </div>
      <section className="navbar-end w-full   ">
        <button
          className="p-2 bg-slate-300 rounded-md shadow-lg shadow-slate-800"
          onClick={() => setToggleNavbar(!toggleNavbar)}
        >
          {toggleNavbar ? (
            <span>
              <BsFillSunFill className="h-5 w-5 sm:w-9 sm:h-9  text-black" />
            </span>
          ) : (
            <span>
              <IoMdMoon className="h-5 w-5 sm:w-9 sm:h-9 " />
            </span>
          )}
        </button>
      </section>
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: PropsTypes.any,
  setToggleNavbar: PropsTypes.func,
};

export default Navbar;
