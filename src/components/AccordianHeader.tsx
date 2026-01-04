interface AccordionHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionHeader = ({ title, isOpen, onToggle }: AccordionHeaderProps) => {
  return (
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg"
    >
      <span className="font-medium text-gray-900">{title}</span>

      <span className="text-lg">{isOpen ? "-" : "+"}</span>
    </button>
  );
};

export default AccordionHeader;
