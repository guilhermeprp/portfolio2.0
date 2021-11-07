import React from 'react';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <input id="navbar-enabler" type="checkbox" />
      <label className="navbar-enabler-icon" htmlFor="navbar-enabler">
        <div className="arrow-one">
          <div className="top-bar" />
          <div className="bottom-bar" />
        </div>
        <div className="arrow-two">
          <div className="top-bar" />
          <div className="bottom-bar" />
        </div>
      </label>
      <nav className="navbar-body">
        <img
          src={`${process.env.PUBLIC_URL}/assets/image/logo-render.png`}
          alt=""
        />
        <ul>
          <li>
            <center>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} /> HOME
              </Link>
            </center>
          </li>
          <li>
            <center>
              <Link to="/about">
                <FontAwesomeIcon icon={faGamepad} /> ABOUT
              </Link>
            </center>
          </li>
        </ul>
      </nav>
    </>
  );
}
