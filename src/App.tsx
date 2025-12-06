import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav-items
 *
 * Body
 * -search
 * restaurant-container
 *    -res-card
 *     -img
 *     -res-name
 *     -cuisines
 *     -rating
 *     -delivery-time
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
      <div className="heading">
        <h1>Foodie's Haven</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCards = () => {
  return (
    <div className="res-card">
      <div className="card-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
          alt="Meghna Foods"
        ></img>
      </div>
      <h3>Meghna Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      {/* <h4>4.2 ⭐ | 30 mins</h4> */}
      <h4>
        <span className="food-rating">4.2 &#9733;</span> | 30 mins
      </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
        <RestaurantCards />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<AppLayout />);
