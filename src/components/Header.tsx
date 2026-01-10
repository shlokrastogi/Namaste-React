import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("Login");

  // Consuming context value using useContext hook
  // We can also use change value of context through <UserContext.Provider> in App.tsx it will
  // change the value throughout the component tree
  const data = useContext(UserContext);
  // console.log(data);

  // Suscribing to the Store using a useSelector hook
  const cartItems = useSelector((store: any) => store.cart.items);

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

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Cart 🛒{" "}
              <sup className="p-0.5 rounded-md bg-white text-red-600 font-bold">
                {cartItems.length}
              </sup>
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

      <div className="bg-white text-red-600 m-2 p-2 rounded-md font-bold">
        {data.loggedInUser}
      </div>
    </div>
  );
};

export default Header;
