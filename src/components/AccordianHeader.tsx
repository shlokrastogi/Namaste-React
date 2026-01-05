interface AccordionHeaderProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionHeader = ({ title, isOpen, onToggle }: AccordionHeaderProps) => {
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

export default AccordionHeader;
