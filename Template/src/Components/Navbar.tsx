import css from "../Styles/Navbar.module.css";
import Logo from "../Assets/Logo.png";

import { useState } from "react";
import { SlMenu as HamburgerMenu } from "react-icons/sl";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currNavMenu, setCurrNavMenu] = useState("portfolio");

  return (
    <div className={css.navOuter}>
      <HamburgerMenu
        className={css.hamburgerMenuCss}
        onClick={() => setOpenMenu((prev) => !prev)}
      />

      {openMenu && <div className={css.menuOuter}></div>}

      <img src={Logo} alt="Logo" className={css.logoCss} />

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
            style={{
              cursor: currNavMenu == navMenuItem?.to ? "default" : "pointer",
            }}
            className={
              currNavMenu == navMenuItem?.to ? css.activeNavMenu : undefined
            }
            key={navMenuItem?.name + navMenuInd}
          >
            {navMenuItem?.name}
          </p>
        ))}
      </div>

      <button className={css.getStartedBtn} type="button">
        GET STARTED NOW
      </button>
    </div>
  );
};

export default Navbar;
