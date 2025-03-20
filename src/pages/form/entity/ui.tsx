import { EntityRow } from "@/features/entity-row";
import { VocabularyEntityCreateDefaultRequest, VocabularyFieldListDefaultResponse, jsonRpcApi } from "@/shared/jsonrpc";
import { Button, Drawer, Field, Input, Label, Title } from "@/shared/ui";
import { useEffect, useRef, useState } from "react";

type DrawerFieldListType = {
  isOpen: boolean;
  data?: {
    rowIndex: number;
  };
};

type FieldRecord =
  VocabularyFieldListDefaultResponse[number]

export const EntityFormPage = () => {
  const [vocabularyEntityCreateDefaultQuery] = jsonRpcApi.useLazyVocabularyEntityCreateDefaultQuery()
  const {data: fieldList = []} = jsonRpcApi.useVocabularyFieldListDefaultQuery({});

  const [drawerFieldList, setDrawerFieldList] = useState<DrawerFieldListType>({
    isOpen: false,
    data: undefined,
  });
  const [rowList, setRowList] = useState<
    VocabularyEntityCreateDefaultRequest["rows"]
  >([]);


  const containerRef = useRef<null | HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  if (!containerWidth) {
    return <div ref={containerRef}></div>;
  }

  const handleAddRow = () => {
    setRowList((prev) => [...prev, []]);
  };

  const handleSelectField = (field: FieldRecord) => {
    const rowListConcat = rowList.concat();

    if (!drawerFieldList.data) {
      return;
    }

    rowListConcat[drawerFieldList.data.rowIndex].push({
      fieldId: field.id,
      pos: 1,
      col: 2,
    });

    setDrawerFieldList({ isOpen: false, data: undefined });
    setRowList(rowListConcat);
  };

  const handleSubmit = async () => {
    try {
      const rowListData = rowList.map((row) => {
        const detailfieldListData = row.map((detailField) => {
          return {
            col: detailField.col,
            pos: detailField.pos,
            fieldId: detailField.fieldId
          };
        });

        return detailfieldListData;
      });

      await vocabularyEntityCreateDefaultQuery({
        name: "",
        rows: rowListData
      });
    } catch (e) {
      //
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Title>Конструктор сущности</Title>

      <Button onClick={handleSubmit}>Сохранить</Button>

      <div
        ref={containerRef}
        className="bg-white w-full h-full shadow-md rounded-xl border border-neutral-300 flex-1 mt-2 p-4"
      >
        <Field>
          <Label>Наименование</Label>

          <Input />
        </Field>

        <div className="flex flex-col gap-2 mt-4">
          {rowList.map((key, index) => (
            <EntityRow
              key={index}
              fields={[...key]}
              fieldList={fieldList}
              containerWidth={containerWidth - 33 - 76 - 16}
              onCreate={() =>
                setDrawerFieldList({
                  isOpen: true,
                  data: {
                    rowIndex: index,
                  },
                })
              }
              onChange={() => {}}
              onRemoveRow={() => {}}
            />
          ))}

          <Button className="h-16" onClick={handleAddRow}>
            Добавить конструктор ряда
          </Button>
        </div>
      </div>

      <Drawer
        header="Поля"
        open={drawerFieldList.isOpen}
        onOpenChange={() =>
          setDrawerFieldList((prev) => ({ ...prev, isOpen: false }))
        }
      >
        <div className="flex flex-col gap-3">
          {fieldList.map((key) => (
            <Button variant="unstyled" onClick={() => handleSelectField(key)}>
              {key.name}
            </Button>
          ))}
        </div>
      </Drawer>
    </div>
  );
};
