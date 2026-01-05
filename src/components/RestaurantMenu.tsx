import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMenuData } from "../utils/fetchMenuData";
import { menuCategory } from "../types/menuCategory";

import AccordionCategory from "../components/AccordionCategory";
import Shimmer from "../components/Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams<{ resId: string }>();

  const [categories, setCategories] = useState<menuCategory[] | null>(null);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!resId) return;

    const fetchData = async () => {
      try {
        setCategories(null);

        const data = await fetchMenuData(resId);

        const cards = data?.data?.cards;

        // Find the card containing grouped menu categories
        const groupedCardContainer = cards?.find(
          (c: any) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
        );

        const regularCards =
          groupedCardContainer?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        if (!regularCards) {
          setCategories([]);
          return;
        }

        // Normalize → always return { title, items[] }
        const categoryList: menuCategory[] = regularCards
          .filter((c: any) =>
            c?.card?.card?.["@type"]?.includes("ItemCategory")
          )
          .map((c: any) => {
            const card = c.card.card;

            // Swiggy returns items in many shapes — normalize all
            const rawItems =
              card.items ??
              card.itemCards ??
              card.categories?.flatMap((cat: any) => cat?.itemCards) ??
              [];

            const items = rawItems.map((i: any) => {
              const info = i?.card?.info ?? i;

              return {
                id: info?.id,
                name: info?.name,
                price: info?.price,
                defaultPrice: info?.defaultPrice,
                description: info?.description,
                imageId: info?.imageId,
              };
            });

            return {
              title: card.title,
              items,
            };
          });

        setCategories(categoryList);
      } catch (err) {
        console.error("Failed to fetch menu:", err);
        setError("Failed to load menu. Please try again.");
      }
    };

    fetchData();
  }, [resId]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  if (error) return <p className="text-red-500">{error}</p>;

  if (categories === null) return <Shimmer />;

  if (categories.length === 0) return <p>No menu available.</p>;

  return (
    <div className="space-y-4 mt-4">
      {categories.map((category, index) => (
        <AccordionCategory
          key={`${category.title}-${index}`}
          category={category}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
