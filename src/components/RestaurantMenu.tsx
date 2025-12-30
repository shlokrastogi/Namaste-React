import { useEffect, useState } from "react";
import { fetchMenuData } from "../utils/fetchMenuData";
import { MenuItem } from "../types/menu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [restaurantName, setRestaurantName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!resId) return;

    const getMenuData = async () => {
      const data = await fetchMenuData(resId);
      if (!data) {
        setLoading(false);
        return;
      }

      //Restaurant Name
      setRestaurantName(data?.data?.cards?.[0]?.card?.card?.info?.name || "");

      //Menu Items
      const menuCards = data?.data?.cards?.find((c: any) => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const items: MenuItem[] = [];

      menuCards.forEach((card: any) => {
        card?.card?.card?.itemCards?.forEach((item: any) => {
          items.push(item.card.info);
        });
      });

      const uniqueItems = Array.from(
        new Map(items.map((item) => [item.id, item])).values()
      );

      setMenuItems(uniqueItems);
      setLoading(false);
    };

    getMenuData();
  }, [resId]);

  if (loading) return <Shimmer />;

  return (
    <div className="menu">
      <h1 className="menu-res-name">{restaurantName}</h1>
      <h2>Menu</h2>

      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ₹{(item.price ?? 0) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
