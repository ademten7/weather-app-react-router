import React from "react";
import logo from "../images/weatherLogo2.png";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation d-flex justify-content-between">
      <div className="logo">
        <img src={logo} alt="" width="100" />
      </div>
      <div className="links ">
        <ul className="list">
          <li>
            <NavLink exact to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/forcast">7 DAYS FORECAST</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
