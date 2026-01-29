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
    <div className="fixed top-0 w-full flex flex-wrap bg-[#b51a1a]/[0.997] items-center z-30">
      <div className="flex flex-row flex-1">
        <div className="m-4">
          <img
            src="https://i.ibb.co/TxCccr45/logo-fotor-20251204224342.png"
            alt="logo"
            className="h-14"
          />
        </div>
        <div className="flex flex-1 flex-nowrap text-white self-center text-xl font-bold italic ml-1 text-shadow-black text-shadow-md [text-shadow:2px_2px_4px_#000000]">
          <h1>Foodie's Haven</h1>
        </div>

        <div className="px-4 h-10 self-center py-2 mr-1 sm:mr-2 rounded-[20px] border-0 bg-white text-[rgb(181,26,26)] font-bold cursor-pointer">
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
        <div className="bg-white self-center  text-red-600 m-2 p-2 rounded-md font-bold">
          {data.loggedInUser}
        </div>
      </div>

      <div className="flex whitespace-nowrap overflow-x-auto">
        <ul className="flex flex-row m-2 px-1 border-2 border-[rgb(133,13,13)] outline outline-[0.5px] outline-black bg-[rgba(208,53,53,0.997)] rounded-2xl">
          <li className="list-none text-white py-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-[5px] px-4 text-red-600 rounded-[25px] underline"
                  : "no-underline text-inherit py-[5px] px-4"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="list-none text-white py-2">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-[5px] px-4 text-red-600 rounded-[25px] underline"
                  : "no-underline text-inherit py-[5px] px-4"
              }
            >
              Cart{" "}
              <sup className="px-0.5 rounded-md bg-white text-red-600 font-bold">
                {cartItems.length}
              </sup>
              🛒
            </NavLink>
          </li>
          <li className="list-none text-white py-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-[5px] px-4 text-red-600 rounded-[25px] underline"
                  : "no-underline text-inherit py-[5px] px-4"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className="list-none text-white py-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-[5px] px-4 text-red-600 rounded-[25px] underline"
                  : "no-underline text-inherit py-[5px] px-4"
              }
            >
              Contact Us
            </NavLink>
          </li>

          <li className="list-none text-white py-2">
            <NavLink
              to="/grocery"
              className={({ isActive }) =>
                isActive
                  ? "bg-white py-[5px] px-4 text-red-600 rounded-[25px] underline"
                  : "no-underline text-inherit py-[5px] px-4"
              }
            >
              Grocery
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
