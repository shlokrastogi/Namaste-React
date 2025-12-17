export const fetchMenuData = async (resId: string) => {
  try {
    const response = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" +
        resId
    );

    if (!response.ok) {
      throw new Error("Failed to fetch menu");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching menu data:", error);
    return null;
  }
};
