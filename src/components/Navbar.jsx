import { IoMdMoon } from "react-icons/io";
import { BsFillSunFill } from "react-icons/bs";
import PropsTypes from "prop-types";
const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <nav className="mx-auto w-[100%] flex px-8 py-4 sm:flex justify-between items-center mb-10 ">
      <h2 className="font-bold text-sm tracking-wide capitalize sm:text-2xl">
        Mochamad Naufal Aufa Rifqi
      </h2>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => setToggleNavbar(!toggleNavbar)}
        className="bg-slate-200 p-2 rounded-xl "
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
  toggleNavbar: PropsTypes.func,
  setToggleNavbar: PropsTypes.func,
};

export default Navbar;
