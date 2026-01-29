import { RestaurantType } from "../types/restaurant";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { fetchRestaurantsData } from "../utils/fetchRestaurant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State variable to hold the list of restaurants to display
  const [list, setList] = useState<RestaurantType[]>([]);

  const [allList, setAllList] = useState<RestaurantType[]>([]);

  const [loading, setLoading] = useState(true);

  const [searchText, setSearchText] = useState("");

  const OnlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    const fetchData = async () => {
      const restData = await fetchRestaurantsData();

      // Conditional rendering based on data availability
      if (!restData) {
        setLoading(false);
        return;
      }

      const apiList =
        restData?.data?.cards?.find(
          (c: any) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      const restList: RestaurantType[] = apiList.map((item: any) => {
        const info = item.info;
        return {
          id: info.id,
          name: info.name,
          cuisines: info.cuisines,
          cloudinaryImageId: info.cloudinaryImageId,
          avgRating: info.avgRating,
          deliveryTime: info.sla.deliveryTime,

          //Mark promoted
          promoted: Number(info.avgRating) >= 4.5,
        };
      });
      setList(restList);
      setAllList(restList);
      setLoading(false);
    };
    fetchData();
  }, []);

  //Checking if the User is Offline or Online
  if (OnlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your Internet Connection.
      </h1>
    );
  }

  return (
    <div className="px-5 no-scrollbar overflow-scroll w-full">
      {/* Search Bar & Buttons (always visible) */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5 justify-center">
        <div className="flex">
          <div className="flex flex-1 mr-2">
            <input
              type="text"
              data-testid="searchInput"
              className="w-full h-10 py-2 px-4 rounded-lg border border-gray-500"
              placeholder="Search Restaurants"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <button
            className="py-2 px-4 h-10 rounded-lg bg-blue-500 text-white font-bold cursor-pointer"
            onClick={() => {
              const filteredList = allList.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="py-2 whitespace-nowrap h-10 px-4 rounded-lg bg-green-500 text-white font-bold cursor-pointer"
          onClick={() => {
            setList(allList.filter((res) => Number(res.avgRating) >= 4.5));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List / Shimmer */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:justify-between">
        {loading ? (
          <Shimmer /> // Only show shimmer while loading
        ) : (
          list.map((res) => {
            const Card = res.promoted ? RestaurantCardPromoted : RestaurantCard;
            return <Card key={res.id} restaurant={res} />;
          })
        )}
      </div>
    </div>
  );
};
export default Body;
