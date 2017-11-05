import React from "react";
import "./Header.css";
import react from "./../../react.png";
import giphy from "./../../giphy.gif";

const Header = () => {
  return(
    <div className="header">
      <img id="react-logo" className="logo img-fluid rounded img-responsive" src={react} alt="react"/> <img className="logo" src={giphy} alt="giphy"/>
    </div>
  )
};

export default Header;
