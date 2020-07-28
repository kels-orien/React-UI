import React from "react";
import profileDefault from "../../svg/profile-pix.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-modify">
      <a className="navbar-brand color-modify" href="#">
        Hotel App
      </a>
      <ul className="nav justify-content-end">
        <li className="nav-item-modify">
          <img alt="Person Icon" src={profileDefault}></img>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-link btn-link-modify color-modify"
          >
            Account
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
