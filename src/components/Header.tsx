import { useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Grocery
            </NavLink>
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
