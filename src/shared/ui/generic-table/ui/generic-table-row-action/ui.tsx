import { PencilIcon } from "@heroicons/react/24/outline";
import { Button } from "@/shared/ui";
import { FC } from "react";

type Props = {
  onEdit: () => void;
};

export const GenericTableRowAction: FC<Props> = ({ onEdit }) => {
  return (
    <div className="w-full md:justify-end md:flex mt-2 md:mt-0">
      <Button
        variant="tertinary"
        className="w-full md:w-8 h-8 p-0 shrink-0"
        onClick={onEdit}
      >
        <PencilIcon className="hidden md:inline w-4 h-4" />
        
        <span className="md:hidden">Редактировать запись</span>
      </Button>
    </div>
  );
};