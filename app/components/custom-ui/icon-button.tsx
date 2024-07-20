import { cn } from "@/lib/utils";

interface IconButtonProps {
  onclick: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  onclick
}) => {
  return (
    <>
      <button
        onClick={onclick}
        className={cn(
          "rounded-full flex items-center justify-center bg-white border shadow-md"
        )}
      >

      </button>
    </>
  )
};
export default IconButton;