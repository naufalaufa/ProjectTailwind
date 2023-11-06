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
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setToggleNavbar(!toggleNavbar)}
        className="bg-slate-300 p-2 rounded-xl shadow-sm shadow-slate-400 "
      >
        {toggleNavbar ? (
          <BsFillSunFill className="text-black" size={30} />
        ) : (
          <IoMdMoon size={30} />
        )}
      </span>
    </nav>
  );
};

Navbar.propTypes = {
  toggleNavbar: PropsTypes.any,
  setToggleNavbar: PropsTypes.func,
};

export default Navbar;
