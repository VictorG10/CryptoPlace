import React, { useContext } from "react";
import "./navbar.css";
import logo_img from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { Link } from "react-router-dom";
import { CoinContext } from "../../contexts/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  // const currencyHandler = (e) => {
  //   switch (e.target.value) {
  //     case "usd":
  //       {
  //         setCurrency((c) => (c = { name: "usd", symbol: "$" }));
  //       }
  //       break;
  //     case "eur":
  //       {
  //         setCurrency((c) => (c = { name: "eur", symbol: "€" }));
  //       }
  //       break;
  //     case "ngn":
  //       {
  //         setCurrency((c) => (c = { name: "ngn", symbol: "₦" }));
  //       }
  //       break;

  //     default:
  //       setCurrency((c) => (c = { name: "usd", symbol: "$" }));
  //       break;
  //   }
  // };

  const currencyHandler = (e) => {
    const value = e.target.value;

    setCurrency((c) =>
      value === "usd"
        ? { name: "usd", symbol: "$" }
        : value === "eur"
        ? { name: "eur", symbol: "€" }
        : value === "ngn"
        ? { name: "ngn", symbol: "₦" }
        : { name: "usd", symbol: "$" }
    );
  };

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
        <select onChange={(e) => currencyHandler(e)}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ngn">NGN</option>
        </select>
        <button>
          Sign up <img className="btn-icon" src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
