import { BsFillSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { DataNavLink } from "../../Data/DataNavLink";
import PropTypes from "prop-types";

const NabNew = ({
  toggleNavbar,
  setToggleNavbar,
  hamburgerToggle,
  setHamburgetToggle,
}) => {
  return (
    <div className="navbar bg-white fixed grid grid-flow-col z-[999999999999] top-0 left-0 right-0  ">
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
      <details className="dropdown md:hidden">
        <summary
          className="m-1 btn"
          onClick={() => setHamburgetToggle(!hamburgerToggle)}
        >
          {hamburgerToggle ? <IoIosClose /> : <RxHamburgerMenu />}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24 translate-x-[-10px]">
          {DataNavLink.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </details>
    </div>
  );
};

NabNew.propTypes = {
  toggleNavbar: PropTypes.any,
  setToggleNavbar: PropTypes.any,
  hamburgerToggle: PropTypes.any,
  setHamburgetToggle: PropTypes.any,
};

export default NabNew;
