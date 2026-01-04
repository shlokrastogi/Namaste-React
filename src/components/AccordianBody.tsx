import { menuItem } from "../types/menuItem";

interface AccordionBodyProps {
  items: menuItem[];
}

const AccordionBody = ({ items }: AccordionBodyProps) => {
  return (
    <div className="mt-2 space-y-3">
      {items.map((item) => (
        <div
          key={item.id} // ✔ UNIQUE + STABLE KEY
          className="flex justify-between items-start border-b pb-2"
        >
          <div>
            <p className="font-semibold text-gray-800">{item.name}</p>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </div>

          {item.price && (
            <p className="font-medium">₹{(item.price / 100).toFixed(0)}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccordionBody;
