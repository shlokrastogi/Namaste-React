import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMenuData } from "../utils/fetchMenuData";
import { menuCategory } from "../types/MenuCategory";

import AccordionCategory1 from "../components/AccordianCategory1";
import Shimmer from "../components/Shimmer";

const RestaurantMenu1 = () => {
  const { resId } = useParams<{ resId: string }>();
  const [categories, setCategories] = useState<menuCategory[] | null>(null);
  const [opoenindex, setOpenIndex] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!resId) return;

    const fetchData = async () => {
      try {
        setCategories(null); // show loading
        const data = await fetchMenuData(resId);

        // Confirming categories exist
        if (!data?.categories) {
          setCategories([]);
          return;
        }

        setCategories(data.categories);
      } catch (err) {
        console.log("Error in fetching menu: ", err);
        setError("Failed to laod menuplease try again");
      }
    };

    fetchData();
}, [resId]);
  });
};
