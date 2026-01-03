import { useEffect, useState } from "react";
import { fetchMenuData } from "../utils/fetchMenuData";
import { menuItem } from "../types/menuItem";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();
  const [menuItems, setMenuItems] = useState<
    { title: string; items: menuItem[] }[]
  >([]);

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
      console.log(resId);
      console.log(data);

      //Restaurant Name
      setRestaurantName(data?.data?.cards?.[0]?.card?.card?.info?.name || "");

      // console.log(data?.data?.cards?.[0]);

      //Menu Items
      const menuCards = data?.data?.cards?.find((c: any) => c.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const categories: any[] = [];

      menuCards.forEach((card: any) => {
        const cardData = card?.card?.card;
        if (!cardData) return;

        // Case 1 — direct ItemCategory
        if (cardData?.itemCards?.length) {
          categories.push({
            title: cardData.title,
            items: cardData.itemCards.map((i: any) => i.card.info),
          });
        }

        // Case 2 — nested categories[]
        if (cardData?.categories?.length) {
          cardData.categories.forEach((cat: any) => {
            categories.push({
              title: cat.title,
              items: cat.itemCards?.map((i: any) => i.card.info) || [],
            });
          });
        }
      });

      const filtered = categories.filter((c) => c.items && c.items.length > 0);

      setMenuItems(filtered);
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
