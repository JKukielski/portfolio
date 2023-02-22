import "../styles/landingPage.scss";
import React from "react";
import Logo from "./Logo";

const LandingPage = () => {
  return (
    <main className="landing-page">
      <section className="landing-page-navbar">
        <Logo />
      </section>
      <section className="landing-page-hero"></section>
    </main>
  );
};

export default LandingPage;
