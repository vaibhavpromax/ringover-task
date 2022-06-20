import React from "react";
import "./Navbar.scss";

//assets
import ringoverLogo from "../../assets/ringoverLogo.png";
import sampleUser from "../../assets/sampleUser.png";
import switchLogo from "../../assets/switchLogo.png";
import exit from "../../assets/exit.png";
import search from "../../assets/search.png";
import menu from "../../assets/menu.png";

const Navbar = ({ showRight, setShowRight }) => {
  return (
    <div className="navbar">
      <div className="name">
        <img src={ringoverLogo} alt="company logo" />
        <p>Sales machine</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <img className="search-icon" src={search} alt="" />
      </div>
      <div className="user">
        <img className="user-icon" src={sampleUser} alt="" />
        <img src={switchLogo} alt="" />
        <img src={exit} alt="" />
        <img
          onClick={() => {
            setShowRight(true);
          }}
          className="menu-icon"
          src={menu}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
