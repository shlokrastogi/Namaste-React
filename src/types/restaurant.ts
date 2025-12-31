export interface RestaurantType {
  id: string;
  name: string;
  cuisines: string[];
  cloudinaryImageId: string;
  avgRating: string;
  deliveryTime: number; // final value

  promoted?: boolean;
}
