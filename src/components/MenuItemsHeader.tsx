interface MenuItemsHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const MenuItemsHeader = ({ title, isOpen, onToggle }: MenuItemsHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center text-lg font-semibold"
    >
      <span>{title}</span>
      <span>{isOpen ? "▲" : "▼"}</span>
    </button>
  );
};

export default MenuItemsHeader;
