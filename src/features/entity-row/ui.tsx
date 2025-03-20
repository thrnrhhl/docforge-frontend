import { VocabularyFieldListDefaultResponse } from "@/shared/jsonrpc";
import { Button, DraggableResizableBlock } from "@/shared/ui";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { FC, useEffect, useRef, useState } from "react";

interface Item {
  id: string;
  gridPos: number;
  gridCol: number;
}

type Props = {
  containerWidth: number;
  fields: {
    col: number;
        fieldId: string;
        pos: number;
  }[]
  fieldList: VocabularyFieldListDefaultResponse
  onCreate: () => void;
  onChange: (data: Item[]) => void;
  onRemoveRow: () => void;
};
export const EntityRow: FC<Props> = ({
  containerWidth,
  fields,
  fieldList,
  onCreate,
  onChange,
  onRemoveRow
}) => {
  const [items, setItems] = useState<Item[]>([]);

  const updateItem = (id: string, newProps: Partial<Item>) => {

    const updatedItems = items.map((item) => {

      if(item.id === id) {

        return { ...item, ...newProps }
      }

      return item
    })
    onChange(updatedItems);
    setItems(updatedItems);
  };

  const deleteItem = (id: string) => {
    const itemsConcat = items.concat();
    const filterItems = itemsConcat.filter((item) => item.id !== id);

    setItems(filterItems);
    onChange(filterItems);
  };

  const rootRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    setItems(
      fields.map((key) => ({
        id: key.fieldId,
        gridCol: key.col,
        gridPos: key.pos,
      }))
    );
  }, [fields.length]);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <Button variant="tertinary" className="w-6 h-6 p-0" onClick={onCreate}>
          <PlusIcon className="text-black w-3 h-3" />
        </Button>

        <Button variant="tertinary" className="w-6 h-6 p-0" onClick={onRemoveRow}>
          <TrashIcon className="w-3 h-3" />
        </Button>
      </div>

      <div
        ref={rootRef}
        className="grid grid-cols-12 border h-9 border-neutral-300 border-dashed rounded-md relative w-full items-center"
        style={{ width: containerWidth }}
      >
        <EntityGridPlaceholder />

        {items.map((item, index) => (
          <DraggableResizableBlock
            key={index}
            id={item.id}
            fieldList={fieldList}
            grid={{
              col: item.gridCol,
              pos:item.gridPos
            }}
            containerWidth={containerWidth}
            onUpdate={updateItem}
            onDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};

const EntityGridPlaceholder = () => {
  return (
    <div className="absolute grid grid-cols-12 w-full h-full">
      {Array(12)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="border-r border-r-neutral-300 border-dashed last:border-r-0"
          />
        ))}
    </div>
  );
};
