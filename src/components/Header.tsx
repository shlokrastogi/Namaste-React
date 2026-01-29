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

  // Suscribing to the Store using a useSelector hookz
  const cartItems = useSelector((store: any) => store.cart.items);

  return (
    <div className="fixed top-0 w-full bg-[#b51a1a]/[0.997] z-30">
      {/* Top Row */}
      <div className="flex flex-row sm:items-center sm:justify-between px-2 sm:px-4">
        {/* Left: Logo + Title */}
        <div className="flex flex-1 items-center gap-2 py-2">
          <img
            src="https://i.ibb.co/TxCccr45/logo-fotor-20251204224342.png"
            alt="logo"
            className="h-12 sm:h-14"
          />
          <h1 className="text-xl sm:text-2xl text-white font-bold italic text-shadow-black [text-shadow:2px_2px_4px_#000000]">
            Foodie's Haven
          </h1>
        </div>

        {/* Right: Login + User */}
        <div className="flex items-center mx-2 gap-2 pb-2 sm:pb-0">
          <button
            className="px-4 py-1 rounded-[20px] bg-white text-[rgb(181,26,26)] font-bold"
            onClick={() =>
              setIsLoggedIn((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {isLoggedIn}
          </button>

          <div className="bg-white text-red-600 px-3 py-1 rounded-md font-bold text-sm">
            {data.loggedInUser}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="w-100 mx-1 scrollbar-hide overflow-x-auto mb-1">
        <ul className="w-max sm:w-full flex justify-between sm:justify-between gap-2 px-2 py-2 border-2 border-[rgb(133,13,13)] bg-[rgba(208,53,53,0.997)] rounded-2xl whitespace-nowrap">
          {[
            { to: "/", label: "Home" },
            {
              to: "/cart",
              label: (
                <>
                  Cart{" "}
                  <sup className="px-1 bg-white text-red-600 rounded">
                    {cartItems.length}
                  </sup>{" "}
                  🛒
                </>
              ),
            },
            { to: "/about", label: "About Us" },
            { to: "/contact", label: "Contact Us" },
            { to: "/grocery", label: "Grocery" },
          ].map((item) => (
            <li key={item.to} className="text-white">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white text-red-600 px-4 py-1 rounded-[25px] underline"
                    : "px-4 py-1"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
