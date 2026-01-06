import AccordionHeader from "./MenuItemsHeader";
import AccordionBody from "./MenuItemsBody";
import { menuCategory } from "../types/menuCategory";

interface MenuItemsCategoryProps {
  category: menuCategory;
  isOpen: boolean;
  onToggle: () => void;
}

const MenuItemsCategory = ({
  category,
  isOpen,
  onToggle,
}: MenuItemsCategoryProps) => {
  return (
    <div className="w-4/6 flex m-auto flex-col border rounded-xl p-3 bg-white shadow-sm">
      <AccordionHeader
        title={`${category.title} (${category.items.length})`}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      {isOpen && <AccordionBody items={category.items} />}
    </div>
  );
};

export default MenuItemsCategory;
