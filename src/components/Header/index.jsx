import React, { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../context/Themes";
import { returnThemeColor } from "../../utils/common";

function Header() {
  const { themeData } = useContext(ThemeContext);
  return (
    <div>
      <div
        className="header"
        style={{ backgroundColor: returnThemeColor(themeData) }}
      >
        <div className="logo">
          <p>EVENTIFY</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
