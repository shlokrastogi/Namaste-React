import { RestaurantType } from "../types/restaurant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  return (
    <div className="res-card">
      <Link className="card-link" to={`/restaurant/${restaurant.id}`}>
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
      </Link>
    </div>
  );
};

export default RestaurantCard;
