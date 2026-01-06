import { menuItem } from "../types/menuItem";
import { CDN_URL } from "../utils/constants";

interface MenuItemsBodyProps {
  items: menuItem[];
}

const MenuItemsBody = ({ items }: MenuItemsBodyProps) => {
  return (
    <div className="mt-2 space-y-3">
      {items.map((item) => {
        const price = (item.price ?? item.defaultPrice ?? 0) / 100;

        return (
          <div
            key={item.id}
            className="border-b py-2 flex last:border-none first:border-t-2"
          >
            <div className="w-28 h-28 rounded-md overflow-hidden flex-shrink-0">
              {item.imageId && (
                <img
                  src={CDN_URL + item.imageId}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="pl-4 flex flex-col">
              <p className="font-medium">{item.name}</p>

              {price > 0 && (
                <p className="text-sm text-gray-600 font-medium">₹ {price}</p>
              )}

              {item.description && (
                <p className="text-sm text-gray-500">{item.description}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItemsBody;
