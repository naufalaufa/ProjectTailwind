import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PropsTypes from "prop-types";
import { DataNavLink } from "../../Data/DataNavLink";

const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <nav
      id="navbar"
      className="navbar fixed mx-auto w-screen min-w-[300px]  lg:w-full flex px-8 py-1 lg:grid grid-flow-col justify-between items-center z-[9999999] bg-white/95 left-0 "
    >
      <div className="navbar-start">
        <NavLink
          to="/"
          className="font-bold text-xs tracking-wide capitalize sm:text-xl whitespace-nowrap mr-24"
        >
          <span className="text-blue-700 shadow-md slate-800">Mochamad</span>{" "}
          Naufal Aufa Rifqi
        </NavLink>
      </div>
      <div className="navbar navbar-center ">
        <section className="grid grid-flow-col gap-5">
          {DataNavLink.map((item) => {
            const { id, url, text } = item;
            return (
              <NavLink key={id} to={url}>
                {text}
              </NavLink>
            );
          })}
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
