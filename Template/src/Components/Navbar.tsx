import css from "../Styles/Navbar.module.css";
import Logo from "../Assets/Logo.png";

import { useState, MouseEvent, useEffect } from "react";
import { SlMenu as HamburgerMenu } from "react-icons/sl";
import { RiCloseLargeFill as CloseIcon } from "react-icons/ri";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currNavMenu, setCurrNavMenu] = useState("portfolio");

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openMenu]);

  return (
    <div className={css.navOuter}>
      <HamburgerMenu
        className={css.hamburgerMenuCss}
        onClick={() => setOpenMenu(true)}
      />

      {openMenu && (
        <div
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            setOpenMenu(false);
          }}
          className={css.menuOverlay}
        >
          <span></span>
          <div
            onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            className={css.menuOuter}
          >
            <div>
              <CloseIcon onClick={() => setOpenMenu(false)} />
              <span></span>
            </div>

            <div className={css.smallMenuLinksCont}>
              {[
                { name: "Portfolio", to: "portfolio" },
                { name: "Review", to: "review" },
                { name: "Pricing", to: "pricing" },
                { name: "Contact Us", to: "contact" },
              ]?.map((navMenuItem: any, navMenuInd: number) => (
                // temporarly using p tag, can be replaced with a tag later
                <p
                  onClick={() => {
                    setOpenMenu(false);
                    setCurrNavMenu(navMenuItem?.to);
                  }}
                  style={{
                    cursor:
                      currNavMenu == navMenuItem?.to ? "default" : "pointer",
                  }}
                  className={
                    currNavMenu == navMenuItem?.to
                      ? css.activeNavMenu
                      : undefined
                  }
                  key={navMenuItem?.name + navMenuInd}
                >
                  {navMenuItem?.name}
                </p>
              ))}

              <button className={css.smallScreenGetStartedBtn} type="button">
                GET STARTED NOW
              </button>
            </div>
          </div>
        </div>
      )}

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
