import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="container-navbar">
        <h4>Yonas Danga</h4>
        <ul className="myUl">
          <li style={decoration}>
            <Link to="/"> Home </Link>
          </li>
          <li style={decoration}>
            <Link to="/About"> About </Link>
          </li>
          <li style={decoration}>
            <Link to="/Contact"> Contact </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

const decoration = {
  textDecoration: "none",
  color: "#fff"
};
