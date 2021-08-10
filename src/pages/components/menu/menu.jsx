import React from "react";
import "./menu.scss";
import Logo from "../../../assets/image/logo-render.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faGamepad } from "@fortawesome/free-solid-svg-icons";

export function Menu() {
  return (
    <>
      <input id="navbar-enabler" type="checkbox" />
      <label className="navbar-enabler-icon" htmlFor="navbar-enabler">
        <div className="arrow-one">
          <div className="top-bar"></div>
          <div className="bottom-bar"></div>
        </div>
        <div className="arrow-two">
          <div className="top-bar"></div>
          <div className="bottom-bar"></div>
        </div>
      </label>
      <nav className="navbar-body">
        <img src={Logo} alt="" />
        <ul>
          <li>
            <center>
              <a href="#void">
                <FontAwesomeIcon icon={faHome} /> HOME
              </a>
            </center>
          </li>
          <li>
            <center>
              <a href="#void">
                <FontAwesomeIcon icon={faGamepad} /> ABOUT
              </a>
            </center>
          </li>
        </ul>
      </nav>
    </>
  );
}
