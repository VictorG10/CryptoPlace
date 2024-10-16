import React from "react";
import "./navbar.css";
import logo_img from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo_img} alt="" className="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Features</Link>
        </li>
        <li>
          <Link to="#">Pricing</Link>
        </li>
        <li>
          <Link to="#">Blog</Link>
        </li>
      </ul>

      <div className="nav-right">
        <select>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="naira">NGN</option>
        </select>
        <button>
          Sign up <img className="btn-icon" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
