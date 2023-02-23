import React from "react";
import "../styles/burgerMenuIcon.scss";

const BurgerMenuIcon = ({ burgerClass, toggleMenuChange }) => {
  return (
    <div className="menu-icon" onClick={toggleMenuChange}>
      <span className={burgerClass}></span>
      <span className={burgerClass}></span>
      <span className={burgerClass}></span>
    </div>
  );
};

export default BurgerMenuIcon;
