import { RestaurantType } from "../types/restaurant";
import RestaurantCard from "./RestaurantCard";
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
          (c: any) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
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

  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-input"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn"
          onClick={() => {
            const filteredList = allList.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setList(filteredList);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            setList(allList.filter((res) => Number(res.avgRating) >= 4.5));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {list.map((res) => (
          <RestaurantCard key={res.id} restaurant={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
