import { FC } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { Button } from "..";
import { TrashIcon } from "@heroicons/react/24/outline";
import { VocabularyFieldListDefaultResponse } from "@/shared/jsonrpc";

interface Item {
  id: string;
  gridPos: number;
  gridCol: number;
}

interface Props {
  id: string;
  grid: {
    pos: number;
    col: number;
  }
  containerWidth: number;
  fieldList: VocabularyFieldListDefaultResponse
  onUpdate: (id: string, newProps: Partial<Item>) => void;
  onDelete: (id: string) => void;
}

export const DraggableResizableBlock: FC<Props> = ({
  id,
  grid: { col, pos },
  containerWidth,
  fieldList,
  onUpdate,
  onDelete,
}) => {
  const TOTAL_COLS = 12;
  const colWidth = containerWidth / TOTAL_COLS;

  const handleDragStop = (_: DraggableEvent, data: DraggableData) => {
    const newColPos = Math.round(data.x / colWidth) + 1;
    onUpdate(id, { gridPos: newColPos });
  };

  const handleResizeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const startX = e.clientX;
    const startGridCol = col;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const dx = moveEvent.clientX - startX;
      const colsChange = Math.round(dx / colWidth);
      const newGridCol = Math.max(
        1,
        Math.min(startGridCol + colsChange, TOTAL_COLS - pos + 1)
      );
      onUpdate(id, { gridCol: newGridCol });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const field = fieldList.find((item) => item.id === id);

  return (
    <Draggable
      axis="x"
      grid={[colWidth, 0]}
      bounds="parent"
      position={{ x: (pos - 1) * colWidth, y: 0 }}
      onStop={handleDragStop}
    >
      <div
        className="flex items-center absolute"
        style={{
          width: col * colWidth,
          cursor: "grab",
          userSelect: "none",
        }}
      >
        <div className="flex-1 p-1 truncate flex items-center pointer-events-none bg-neutral-200 h-8 border border-neutral-300 rounded-md">
          <p className="truncate text-xs w-[calc(100%-30px)]">{field?.name}</p>
        </div>

        <div className="absolute right-2 flex items-center gap-1">
          <Button
            variant="unstyled"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id);
            }}
            className="mr-2"
          >
            <TrashIcon className="w-4 h-4 text-black" />
          </Button>

          <div
            onMouseDown={handleResizeMouseDown}
            className="w-1.5 h-[1.5rem] cursor-col-resize -right-1 -top-1 bg-black/50 absolute rounded-full"
          />
        </div>
      </div>
    </Draggable>
  );
};