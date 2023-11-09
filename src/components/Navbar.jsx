import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import PropsTypes from "prop-types";

const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <nav
      id="navbar"
      className="navbar  fixed mx-auto w-screen min-w-[300px]  lg:w-full flex px-8 py-1 lg:grid grid-flow-col justify-between items-center z-[9999999] bg-white/60 left-0 "
    >
      <div className="navbar-start">
        <NavLink
          to="/"
          className="font-bold text-xs tracking-wide capitalize sm:text-xl whitespace-nowrap mr-24"
        >
          <span className="text-blue-700">Mochamad</span> Naufal Aufa Rifqi
        </NavLink>
      </div>
      <div className="navbar navbar-center ">
        <section className="grid grid-flow-col gap-5">
          <NavLink
            to="/"
            className="hidden  text-xs p-1 lg:btn-primary rounded md:btn md:btn-primary md:text-xs whitespace-nowrap shadow-md shadow-slate-800 md:grid  "
          >
            Home Page
          </NavLink>

          <NavLink
            to="blogs"
            className="hidden  text-xs p-1 lg:btn-primary rounded md:btn md:btn-primary md:text-xs whitespace-nowrap shadow-md shadow-slate-800 md:grid "
          >
            Blog
          </NavLink>

          <NavLink
            to="about"
            className="hidden  text-xs p-1 lg:btn-primary rounded md:btn md:btn-primary md:text-xs whitespace-nowrap shadow-md shadow-slate-800 md:grid  "
          >
            About
          </NavLink>
        </section>
      </div>
      <section className="navbar navbar-end w-full h-[100%]">
        <div className="grid">
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
        </div>
      </section>
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: PropsTypes.any,
  setToggleNavbar: PropsTypes.func,
};

export default Navbar;
