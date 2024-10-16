import React from "react";
import "./home.css";

const HomePage = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>

        <form>
          <input type="search" name="" id="" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
