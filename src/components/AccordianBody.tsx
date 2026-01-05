import { menuItem } from "../types/menuItem";

interface AccordionBodyProps {
  items: menuItem[];
}

const AccordionBody = ({ items }: AccordionBodyProps) => {
  return (
    <div className="mt-2 space-y-3">
      {items.map((item) => {
        const price = (item.price ?? item.defaultPrice ?? 0) / 100;

        return (
          <div key={item.id} className="border-b pb-2 last:border-none">
            <p className="font-medium">{item.name}</p>

            {price > 0 && (
              <p className="text-sm text-gray-600 font-medium">₹ {price}</p>
            )}

            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default AccordionBody;
