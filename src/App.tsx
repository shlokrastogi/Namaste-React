import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav-items
 *
 * Body
 * -search
 * restaurant-container
 * restaurant-card
 *
 * Footer
 * -copyright
 * -links
 * -address
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.ibb.co/TxCccr45/logo-fotor-20251204224342.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <div className="app"></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Header />);
