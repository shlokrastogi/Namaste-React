import { RestaurantType } from "../types/restaurant";
import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantType }) => {
  if (!restaurant) return null; // prevents crash if prop is missing

  // console.log(restaurant);

  return (
    <div
      className="w-full h-max sm:[250px] sm:w-[200px] rounded-[5px] p-[5px] shadow-md bg-gradient-to-b from-[#dddddd] from-[40%] via-[#f0f0f0] via-[75%] to-white    hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)] hover:scale-[0.98] cursor-pointer"
      data-testid="res-card"
    >
      <Link
        className="no-underline text-inherit"
        to={`/restaurant/${restaurant.id}`}
      >
        <div className="overflow-hidden w-full justify-center">
          <img
            className="h-[200px] sm:h-[150px] w-full rounded"
            src={CDN_URL + restaurant.cloudinaryImageId}
            alt={restaurant.name}
          />
        </div>
        <h3 className="my-2 text-lg">{restaurant.name}</h3>
        <h4 className="my-2 text-base font-thin">
          {restaurant.cuisines.join(", ")}
        </h4>
        <h4>
          <span className="  bg-gradient-to-br from-[rgb(85,85,85)] from-[0%] via-[rgb(56,56,56)] via-[40%] to-[rgb(11,11,11)] text-white px-[6px] py-[2px] rounded-[4px]">
            {restaurant.avgRating} ★
          </span>
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
      <div className="relative block h-auto">
        <label className="absolute top-[10px] left-0 bg-gradient-to-br from-[#ff8a00] to-[#ff4d00] text-white px-[12px] py-[6px] text-[12px] font-semibold uppercase tracking-[0.5px] rounded-tr-[6px] rounded-br-[6px] shadow-[0_2px_6px_rgba(0,0,0,0.25)] z-[2] after:content-[''] after:absolute after:top-full after:left-0 after:border-t-[6px] after:border-t-[#c53b00] after:border-l-[6px] after:border-l-transparent">
          Promoted
        </label>
        <Component {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
