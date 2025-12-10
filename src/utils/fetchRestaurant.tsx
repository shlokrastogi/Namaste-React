export const fetchRestaurantsData = async () => {
  try {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    return await data.json();
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    throw error;
  }
};
