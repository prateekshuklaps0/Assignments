import css from "../Styles/Navbar.module.css";
import Logo from "../Assets/Logo.png";

import { useState } from "react";

const Navbar = () => {
  const [currNavMenu, setCurrNavMenu] = useState("portfolio");

  return (
    <div className={css.navOuter}>
      <img src={Logo} alt="Logo" className={css.logoOuter} />

      <div className={css.navMenuCont}>
        {[
          { name: "Portfolio", to: "portfolio" },
          { name: "Review", to: "review" },
          { name: "Pricing", to: "pricing" },
          { name: "Contact Us", to: "contact" },
        ]?.map((navMenuItem: any, navMenuInd: number) => (
          // temporarly using p tag, can be replaced with a tag later
          <p
            onClick={() => setCurrNavMenu(navMenuItem?.to)}
            key={navMenuItem?.name + navMenuInd}
          >
            {navMenuItem?.name}
          </p>
        ))}
      </div>

      <button type="button">GET STARTED NOW</button>
    </div>
  );
};

export default Navbar;
