import AccordionHeader from "./AccordianHeader";
import AccordionBody from "./AccordianBody";
import { menuCategory } from "../types/MenuCategory";

interface AccordionCategoryProps {
  category: menuCategory;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionCategory = ({
  category,
  isOpen,
  onToggle,
}: AccordionCategoryProps) => {
  return (
    <div className="border rounded-xl p-3 bg-white shadow-sm">
      <AccordionHeader
        title={`${category.title} (${category.items.length})`}
        isOpen={isOpen}
        onToggle={onToggle}
      />

      {isOpen && <AccordionBody items={category.items} />}
    </div>
  );
};

export default AccordionCategory;
