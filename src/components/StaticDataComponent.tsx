/*
// STATIC DATA FOR RESTAURANT CARDS

const RestaurantCards = ({
  resName,
  cuisines,
  rating,
  deliveryTime,
}: {
  resName: string;
  cuisines: Array<string>;
  rating: string;
  deliveryTime: string;
}) => {
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
          alt="Meghna Foods"
        ></img>
      </div>
      <h3>{resName}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span className="food-rating">{rating} &#9733;</span>
        <span className="deliveryTime"> | {deliveryTime}</span>
      </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCards
          resName="Meghna Foods"
          cuisines={["Biriyani", "North Indian", "Asian"]}
          rating="4.2"
          deliveryTime="30 mins"
        />
        <RestaurantCards
          resName="KFC"
          cuisines={["Burger", "Fast Food"]}
          rating="4.0"
          deliveryTime="25 mins"
        />
      </div>
    </div>
  );
};

*/
