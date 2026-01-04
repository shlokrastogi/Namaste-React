import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMenuData } from "../utils/fetchMenuData";
import { menuCategory } from "../types/MenuCategory";

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
        setCategories(null); // show loading
        const data = await fetchMenuData(resId);

        console.log(data);

        // Ensure categories exist
        if (!data?.categories) {
          setCategories([]);
          return;
        }

        setCategories(data.categories);
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
  if (categories === null) return <Shimmer />; // loading state

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
