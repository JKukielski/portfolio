import "../styles/landingPage.scss";
import React from "react";
import Logo from "./Logo";
import BurgerMenuIcon from "./BurgerMenuIcon";
import ToggleSwitch from "./ToggleSwitch";

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <main className="landing-page">
      <section className="landing-page-navbar">
        <Logo />
        <div className="landing-page-menu">
          <p className="landing-page-menu-element">
            <a href="#" className="landing-page-menu-link">{`<BIO/>`}</a>
          </p>
          <p className="landing-page-menu-element">
            <a href="#" className="landing-page-menu-link">{`<PORTFOLIO/>`}</a>
          </p>
          <p className="landing-page-menu-element">
            <a href="#" className="landing-page-menu-link">{`<CONTACT ME/>`}</a>
          </p>
        </div>
        <ToggleSwitch toggleTheme={toggleTheme} theme={theme} />
        <BurgerMenuIcon />
      </section>
      <section className="landing-page-hero"></section>
    </main>
  );
};

export default LandingPage;
