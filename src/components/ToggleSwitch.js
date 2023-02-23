import React from "react";
import "../styles/toggleSwitch.scss";
import { IoIosSunny } from "react-icons/io";
import { BsMoonFill } from "react-icons/bs";

const ToggleSwitch = ({ toggleTheme, theme }) => {
  return (
    <label className="switch">
      {theme === "light" ? (
        <IoIosSunny className="switch-icon" fontSize={22} color={"#9d4edd"} />
      ) : (
        <BsMoonFill className="switch-icon" fontSize={18} color={"#9d4edd"} />
      )}
      <input
        type="checkbox"
        className="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="slider"></div>
    </label>
  );
};

export default ToggleSwitch;
