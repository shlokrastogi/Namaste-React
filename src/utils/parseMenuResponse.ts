import { menuCategory } from "../types/menuCategory";

const parseMenuCategories = (data: any): menuCategory[] => {
  const cards = data?.data?.cards;

  const groupedCardContainer = cards?.find(
    (c: any) => c?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const regularCards =
    groupedCardContainer?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!regularCards) return [];

  return regularCards
    .filter((c: any) => c?.card?.card?.["@type"]?.includes("ItemCategory"))
    .map((c: any) => {
      const card = c.card.card;

      console.log("regular card:", card);

      const rawItems =
        card.items ??
        card.itemCards ??
        card.categories?.flatMap((cat: any) => cat?.itemCards) ??
        [];

      const items = rawItems.map((i: any) => {
        const info = i?.card?.info ?? i;

        // console.log("Item Info:", info.imageId);

        return {
          id: info?.id,
          name: info?.name,
          price: info?.price,
          defaultPrice: info?.defaultPrice,
          description: info?.description,
          imageId: info?.imageId,
        };
      });

      return { title: card.title, items };
    });
};

export default parseMenuCategories;
