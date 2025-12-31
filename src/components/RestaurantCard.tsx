import { RestaurantType } from "../types/restaurant";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  if (!restaurant) return null; // prevents crash if prop is missing

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
        <h4 className="rest-cuisines-name">{restaurant.cuisines.join(", ")}</h4>
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

//Higher Order component
//input - RetaurantCard  output-Promoted RestaurantCard

export const withPromotedLabel = (Component: any) => {
  return (props: any) => {
    return (
      <div className="promoted-wrapper">
        <label className="promoted-badge">Promoted</label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
