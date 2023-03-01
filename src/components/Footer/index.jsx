import React from "react";
import "./Footer.css";
import ThemeColorBox from "../ThemeColorBox";

function Footer() {
  return (
    <div className="footer">
      <div className="foot">
        <div className="themeText">
          <h3>Theme</h3>
        </div>
        <div className="themeColor" />
        <ThemeColorBox />
      </div>
    </div>
  );
}

export default Footer;
