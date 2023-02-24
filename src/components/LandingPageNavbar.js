import React, { useState } from "react";
import "../styles/landingPageNavbar.scss";
import BurgerMenuIcon from "./BurgerMenuIcon";
import Logo from "./Logo";
import ToggleSwitch from "./ToggleSwitch";

const LandingPageNavbar = ({ theme, toggleTheme }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("smallscreen-menu hidden");
  const [burgerClass, setBurgerClass] = useState("menu-icon-bar unclicked");

  const toggleMenuChange = () => {
    if (!toggleMenu) {
      setBurgerClass("menu-icon-bar clicked");
      setMenuClass("smallscreen-menu visible");
    } else {
      setBurgerClass("menu-icon-bar unclicked");
      setMenuClass("smallscreen-menu hidden");
    }
    setToggleMenu(!toggleMenu);
  };

  return (
    <section className="landing-page-navbar section-padding">
      <Logo />
      <div className="landing-page-menu">
        <p className="landing-page-menu-element">
          <a href="#" className="landing-page-menu-link">
            {`<`}
            <span>BIO</span>
            {`/>`}
          </a>
        </p>
        <p className="landing-page-menu-element">
          <a href="#" className="landing-page-menu-link">
            {`<`}
            <span>PORTFOLIO</span>
            {`/>`}
          </a>
        </p>
        <p className="landing-page-menu-element">
          <a href="#" className="landing-page-menu-link">
            {`<`}
            <span>CONTACT ME</span>
            {`/>`}
          </a>
        </p>
      </div>
      <div className={menuClass}>
        <p className="smallscreen-menu-element">
          <a href="#" className="smallscreen-menu-link">
            {`<`}
            <span>BIO</span>
            {`/>`}
          </a>
        </p>
        <p className="smallscreen-menu-element">
          <a href="#" className="smallscreen-menu-link">
            {`<`}
            <span>PORTFOLIO</span>
            {`/>`}
          </a>
        </p>
        <p className="smallscreen-menu-element">
          <a href="#" className="smallscreen-menu-link">
            {`<`}
            <span>CONTACT ME</span>
            {`/>`}
          </a>
        </p>
      </div>
      <div className="landing-page-inner-container">
        <ToggleSwitch toggleTheme={toggleTheme} theme={theme} />
        <BurgerMenuIcon
          burgerClass={burgerClass}
          toggleMenuChange={toggleMenuChange}
        />
      </div>
    </section>
  );
};

export default LandingPageNavbar;
