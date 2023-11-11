import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { DataNavLink } from "../../Data/DataNavLink";
import PropTypes from "prop-types";

const NabNew = ({ toggleNavbar, setToggleNavbar }) => {
  return (
    <div className="navbar  bg-white fixed grid grid-flow-col z-[999999999999] top-0 left-0 right-0 ">
      <div className="flex-1 navbar-start lg:ml-10">
        <Link to="/" className="btn btn-ghost normal-case text-xs sm:text-xl">
          <p>
            <span className="text-blue-500 mr-1 shadow-sm">Mochamad</span>Naufal
            Aufa Rifqi
          </p>
        </Link>
      </div>
      <div className="navbar navbar-center max-w-max">
        <section className="grid grid-flow-col gap-5">
          {DataNavLink.map((item) => {
            const { id, url, text } = item;
            return (
              <NavLink
                key={id}
                to={url}
                className="hidden  text-xs p-1 lg:btn-primary rounded md:btn md:btn-primary md:text-xs whitespace-nowrap shadow-md shadow-slate-800 md:grid"
              >
                {text}
              </NavLink>
            );
          })}
        </section>
      </div>
      <div>
        <button
          onClick={() => setToggleNavbar(!toggleNavbar)}
          className="hidden md:btn max-w-max "
        >
          <span>
            {toggleNavbar ? (
              <IoMdMoon size={30} />
            ) : (
              <BsFillSunFill size={30} />
            )}
          </span>
        </button>
      </div>
      <div className="dropdown dropdown-end md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="bg-blue-600 p-2 rounded text-white">
            <button>
              <RxHamburgerMenu />
            </button>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {DataNavLink.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <span onClick={() => setToggleNavbar(!toggleNavbar)}>
              {" "}
              {toggleNavbar ? (
                <IoMdMoon size={20} />
              ) : (
                <BsFillSunFill size={20} />
              )}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

NabNew.propTypes = {
  toggleNavbar: PropTypes.func,
  setToggleNavbar: PropTypes.func,
};

export default NabNew;
