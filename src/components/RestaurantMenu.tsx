import { useEffect } from "react";

const RestaurantMenu = () => {
  return (
    <div className="menu">
      <h1>Name of Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Dish 1 - $10</li>
        <li>Dish 2 - $15</li>
        <li>Dish 3 - $20</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
