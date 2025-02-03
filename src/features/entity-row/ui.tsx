
import { Button } from "@/shared/ui";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { v1VocabularyEntityCreateDefaultRequest, v1VocabularyFieldListDefaultResponse } from "grpc-web-gen";
import React, { FC, useEffect, useRef, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";

interface Item {
  id: string;
  gridPos: number;
  gridCol: number;
}

interface DraggableResizableInputProps {
  id: string;
  gridPos: number;
  gridCol: number;
  containerWidth: number;
  totalCols: number;
  onUpdate: (id: string, newProps: Partial<Item>) => void;
  onDelete: (id: string) => void;
}

const DraggableResizableInput: FC<DraggableResizableInputProps> = ({
  id,
  gridPos,
  gridCol,
  containerWidth,
  totalCols,
  onUpdate,
  onDelete,
}) => {
  const colWidth = containerWidth / totalCols;

  const handleDragStop = (_: DraggableEvent, data: DraggableData) => {
    const newColPos = Math.round(data.x / colWidth) + 1;
    onUpdate(id, { gridPos: newColPos });
  };

  // Изменение ширины в шагах колонок
  const handleResize = (delta: number) => {
    // Ограничение: не меньше 1 и не больше оставшихся колонок до конца сетки
    const newGridCol = Math.max(
      1,
      Math.min(gridCol + delta, totalCols - gridPos + 1)
    );
    onUpdate(id, { gridCol: newGridCol });
  };

  const handleResizeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Предотвращаем запуск перетаскивания элемента
    e.stopPropagation();
    const startX = e.clientX;
    const startGridCol = gridCol;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const colsChange = Math.round(dx / colWidth);
      const newGridCol = Math.max(
        1,
        Math.min(startGridCol + colsChange, totalCols - gridPos + 1)
      );
      onUpdate(id, { gridCol: newGridCol });
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  return (
    <Draggable
      axis="x"
      grid={[colWidth, 0]}
      bounds="parent"
      position={{ x: (gridPos - 1) * colWidth, y: 0 }}
      onStop={handleDragStop}
    >
      <div
        className="flex items-center absolute"
        style={{
          width: gridCol * colWidth,
          cursor: "grab",
          userSelect: "none",
        }}
      >
        <div

          className="flex-1 p-1 truncate flex items-center pointer-events-none bg-blue-100 h-9 border border-neutral-300 rounded-md"
        >
          <p className="truncate text-xs w-[calc(100%-70px)]">ПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПолеПоле</p>
        </div>

        <div className="absolute right-2 flex items-center gap-1">

          <Button
            variant="unstyled"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className=""
          >
            <TrashIcon className="w-5 h-5 text-black" />
          </Button>

          <div
          onMouseDown={handleResizeMouseDown}
          style={{
            width: 10,
            cursor: 'col-resize',
            height: '100%',
            position: 'absolute',
            right: 0,
            top: 0,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        />
        </div>
      </div>
    </Draggable>
  );
};

type P = {
  containerWidth: number;
  fields: v1VocabularyEntityCreateDefaultRequest.AsObject["rowsList"][0]["detailfieldList"];
  onCreate: () => void;
};
export const EntityRow: FC<P> = ({ containerWidth, fields, onCreate }) => {
  const [items, setItems] = useState<Item[]>([]);

  const totalCols = 12;

  const updateItem = (id: string, newProps: Partial<Item>) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...newProps } : item))
    );
  };

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Добавление нового инпута (на первой свободной позиции)
  // const addNewItem = () => {
  //   // Генерируем id
  //   const newId =
  //     items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1;
  //   // Для простоты добавляем новый инпут в первую колонку с шириной 3
  //   const newItem = { id: newId, gridPos: 1, gridCol: 3 };
  //   setItems((prev) => [...prev, newItem]);
  // };

  const rootRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    console.log(123);
    setItems(fields.map(key => ({ id: key.fieldid, gridCol: key.col, gridPos: key.pos })));
  }, [fields]);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Button className="w-9 h-9 p-0" onClick={onCreate}>
          <PlusIcon className="text-black w-4 h-4" />
        </Button>

        <Button variant="tertinary" className="w-9 h-9 p-0">
          <TrashIcon className="w-4 h-4" />
        </Button>
      </div>

      <div
        ref={rootRef}
        className="grid grid-cols-12 border border-neutral-300 border-dashed rounded-md relative w-full items-center"
        style={{ width: containerWidth, height: 50 }}
      >
        <EntityGridPlaceholder />

        {items.map((item, index) => (
          <DraggableResizableInput
            key={index}
            id={item.id}
            gridPos={item.gridPos}
            gridCol={item.gridCol}
            containerWidth={containerWidth}
            totalCols={totalCols}
            onUpdate={updateItem}
            onDelete={deleteItem}
          />
        ))}
      </div>
    </div>
  );
};


const EntityGridPlaceholder = () => {
  return <div className="absolute grid grid-cols-12 w-full h-full">
  {Array(12)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="border-r border-r-neutral-300 border-dashed last:border-r-0" />
    ))}
</div>
};