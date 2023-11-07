import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import PropsTypes from "prop-types";
const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <nav
      id="navbar"
      className="mx-auto w-full min-w-[300px] sm:w-full flex px-8 py-4 sm:flex justify-between items-center mb-10 "
    >
      <h2 className="font-bold text-xs tracking-wide capitalize sm:text-2xl whitespace-nowrap">
        Mochamad Naufal Aufa Rifqi
      </h2>
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
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: PropsTypes.any,
  setToggleNavbar: PropsTypes.func,
};

export default Navbar;
