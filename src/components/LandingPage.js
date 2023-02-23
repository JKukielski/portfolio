import "../styles/landingPage.scss";
import React from "react";
import Logo from "./Logo";
import BurgerMenuIcon from "./BurgerMenuIcon";
import ToggleSwitch from "./ToggleSwitch";
import LandingPageNavbar from "./LandingPageNavbar";

const LandingPage = ({ toggleTheme, theme }) => {
  return (
    <main className="landing-page">
      <LandingPageNavbar toggleTheme={toggleTheme} theme={theme} />
      <section className="landing-page-hero"></section>
    </main>
  );
};

export default LandingPage;
