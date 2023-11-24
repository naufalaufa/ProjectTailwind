import { useState } from "react";
import { Outlet } from "react-router-dom";
import NabNew from "./NabNew";

const themes = {
  dark: "black",
  linear: "linear-gradient(#eeefeafa , #eaf , #eeeaffff)",
};

const LandingComponents = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  const [hamburgerToggle, setHamburgerToggle] = useState(false);

  return (
    <>
      <div className="grid">
        <div>
          <NabNew
            toggleNavbar={toggleNavbar}
            setToggleNavbar={setToggleNavbar}
            hamburgerToggle={hamburgerToggle}
            setHamburgetToggle={setHamburgerToggle}
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

export default LandingComponents;
