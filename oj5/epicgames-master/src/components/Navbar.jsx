import React from "react";
import logo from "../img/logo.png";
import Style from "./Navbar.module.css";
import globe from "../img/globe.png";
import user from "../img/user.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <div className={Style.nav}>
        <div className={Style.leftNav}>
          <img src={logo} alt="Logo" />
          <p>STORE</p>
          <p>FAQ</p>
          <p>HELP</p>
          <p>UNREAL ENGINE</p>
        </div>
        <div className={Style.rightNav}>
          <button>DOWNLOAD</button>

          <button>SIGN IN</button>
          <img src={user} alt="User" />
          <img src={globe} alt="Internet" />
        </div>
      </div>
    </div>
  );
};
