import { Navbar } from "../components";
import PropTypes from "prop-types";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NabNew from "./NabNew";

const themes = {
  dark: "black",
  linear: "linear-gradient(#eeefeafa , #eaf , #eeeaffff)",
};

const LandingComponents = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <>
      <div className="grid">
        <div>
          <NabNew
            toggleNavbar={toggleNavbar}
            setToggleNavbar={setToggleNavbar}
          />
        </div>
        <div
          style={{
            background: toggleNavbar ? themes.dark : themes.linear,
            color: toggleNavbar ? "white" : "black",
            transition: "0.4s",
          }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

LandingComponents.propTypes = {
  toggleNavbar: PropTypes.func,
  setToggleNavbar: PropTypes.func,
};

export default LandingComponents;
