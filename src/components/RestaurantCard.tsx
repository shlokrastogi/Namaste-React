import { RestaurantType } from "../types/restaurant";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => (
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
      <span className="deliveryTime"> | {restaurant.deliveryTime} mins</span>
    </h4>
  </div>
);
export default RestaurantCard;
