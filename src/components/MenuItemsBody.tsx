import { menuItem } from "../types/menuItem";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

interface MenuItemsBodyProps {
  items: menuItem[];
}

const MenuItemsBody = ({ items }: MenuItemsBodyProps) => {
  const dispatch = useDispatch();

  const handleAddItemToCart = (item: menuItem) => {
    //dispatch an action to add items to cart
    dispatch(addItem(item));
  };

  return (
    <div className="mt-2 space-y-3">
      {items.map((item, index) => {
        const price = (item.price ?? item.defaultPrice ?? 0) / 100;

        return (
          <div
            key={`${item.id}-${index}`}
            className="border-b py-2 flex last:border-none first:border-t-2"
          >
            <div className="flex-1 flex-col" data-testid="foodItems">
              <p className="font-medium">{item.name}</p>

              {price > 0 && (
                <p className="text-sm text-gray-600 font-medium">₹ {price}</p>
              )}

              {item.description && (
                <p className="text-sm text-gray-500">{item.description}</p>
              )}
            </div>
            <div className="w-28 h-32 pl-4 rounded-md overflow-hidden flex-shrink-0 relative">
              {item.imageId && (
                <img
                  src={CDN_URL + item.imageId}
                  alt={item.name}
                  className="w-full h-28 object-cover rounded-md"
                />
              )}
              <button
                className="absolute bottom-5 right-3 translate-y-1/2 z-10 text-green-600 font-weight-600 bg-white border border-green-600  px-3 py-1 rounded-md hover:bg-green-600 hover:text-white transition"
                onClick={() => handleAddItemToCart(item)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemsBody;
