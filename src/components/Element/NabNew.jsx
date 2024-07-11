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
    <div className="navbar bg-white fixed grid justify-between w-full place-items-center grid-flow-col z-[999999999999] top-0 left-0 right-0  ">
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-xs sm:text-xl">
          <p>
            <span className="text-blue-500  shadow-sm mx-1">Mochamad</span>
            Naufal Aufa Rifqi
          </p>
        </Link>
      </div>
      <div className="navbar max-w-max">
        <section className="flex gap-3">
          {DataNavLink.map((item) => {
            const { id, url, text } = item;
            return (
              <NavLink
                key={id}
                to={url}
                className="hidden text-xs p-1 lg:btn-primary rounded md:btn md:btn-primary md:text-xs whitespace-nowrap shadow-md shadow-slate-800 md:grid"
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
            const { id, url, text } = item;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            <button onClick={() => setToggleNavbar(!toggleNavbar)}>
              {toggleNavbar ? <BsFillSunFill /> : <IoMdMoon />}
            </button>
          </li>
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
