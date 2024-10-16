import React from "react";
import "./navbar.css";
import logo_img from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo_img} alt="" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>

      <div className="btn">
        <button>Join</button>
      </div>
    </div>
  );
};

//15:33

export default Header;
