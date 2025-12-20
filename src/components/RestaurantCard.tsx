import { RestaurantType } from "../types/restaurant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="res-card">
        <div className="res-img">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant.cloudinaryImageId
            }
            alt={restaurant.name}
          />
        </div>
        <h3>{restaurant.name}</h3>
        <h4>{restaurant.cuisines.join(", ")}</h4>
        <h4>
          <span className="food-rating">{restaurant.avgRating} ★</span>
          <span className="deliveryTime">
            {" "}
            | {restaurant.deliveryTime} mins
          </span>
        </h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
