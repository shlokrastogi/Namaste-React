import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.ibb.co/TxCccr45/logo-fotor-20251204224342.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="heading">
        <h1>Foodie's Haven</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-links">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-links">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="login-btn">
        <button
          onClick={() =>
            setIsLoggedIn((isLoggedIn) => {
              return isLoggedIn === "Login" ? "Logout" : "Login";
            })
          }
        >
          {isLoggedIn}
        </button>
      </div>
    </div>
  );
};

export default Header;
