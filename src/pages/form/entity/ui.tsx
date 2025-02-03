import { EntityRow } from "@/features/entity-row";
import { grpcQuery, vocabularyServiceClient } from "@/shared/lib/grpc";
import { Button, Drawer, Field, Input, Label, Text, Title } from "@/shared/ui";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useToggle } from "@uidotdev/usehooks";
import {
  v1VocabularyEntityCreateDefaultRequest,
  v1VocabularyFieldListDefaultRequest,
  v1VocabularyFieldListDefaultResponse,
} from "grpc-web-gen";
import React, { useEffect, useRef, useState } from "react";

type DrawerFieldListType = {
  isOpen: boolean;
  data?: {
    rowIndex: number;
  };
};

export const EntityFormPage = () => {
  const [fieldList, setFieldList] = useState<
    v1VocabularyFieldListDefaultResponse.AsObject["fieldList"]
  >([]);

  const [drawerFieldList, setDrawerFieldList] = useState<DrawerFieldListType>({
    isOpen: false,
    data: undefined,
  });
  const [rowList, setRowList] = useState<
    v1VocabularyEntityCreateDefaultRequest.AsObject["rowsList"]
  >([]);

  const fetchData = async () => {
    try {
      const response: v1VocabularyFieldListDefaultResponse = await grpcQuery(
        vocabularyServiceClient.v1VocabularyFieldListDefault.bind(
          vocabularyServiceClient
        ),
        new v1VocabularyFieldListDefaultRequest()
      );

      setFieldList(response.toObject().fieldList);
    } catch (e) {}
  };

  const containerRef = useRef<null | HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | undefined>();

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    fetchData();
  }, []);

  if (!containerWidth) {
    return <div ref={containerRef}></div>;
  }

  const handleAddRow = () => {
    setRowList((prev) => [...prev, { detailfieldList: [] }]);
  };

  const handleSelectField = (fieldId: string) => {
    const rowListConcat = rowList.concat();

    if (!drawerFieldList.data) {
      return;
    }

    rowListConcat[drawerFieldList.data.rowIndex].detailfieldList.push({
      fieldid: fieldId,
      pos: 1,
      col: 2,
    });
    console.log(rowListConcat)
    setDrawerFieldList({ isOpen: false, data: undefined });
    setRowList(rowListConcat);
  };

  return (
    <div className="flex flex-col h-full">
      <Title>Конструктор сущности</Title>

      <div
        ref={containerRef}
        className="bg-white w-full h-full shadow-md rounded-xl border border-neutral-300 flex-1 mt-2 p-4"
      >
        <Field>
          <Label>Наименование</Label>

          <Input />
        </Field>

        <div className="flex flex-col gap-2 mt-4">
          {[...rowList].map((key, index) => (
            <EntityRow
              key={index}
              fields={key.detailfieldList}
              containerWidth={containerWidth - 33 - 76 - 16}
              onCreate={() =>
                setDrawerFieldList({
                  isOpen: true,
                  data: {
                    rowIndex: index,
                  },
                })
              }
            />
          ))}

          <Button className="h-16" onClick={handleAddRow}>
            Добавить конструктор ряда
          </Button>
        </div>
      </div>

      <Drawer
        header="Текстовое поле"
        open={drawerFieldList.isOpen}
        onOpenChange={() =>
          setDrawerFieldList((prev) => ({ ...prev, isOpen: false }))
        }
      >
        {fieldList.map((key) => (
          <React.Fragment key={key.id}>
            <div
              className="border border-neutral-400/70 border-dashed bg-blue-100/50 rounded-md p-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelectField(key.id)}
            >
              <p className="text-black text-sm font-medium">Поле: {key.name}</p>

              <Field className="pointer-events-none mt-2">
                <Label>{key.detail?.label}</Label>

                <Input
                  placeholder={key.detail?.placeholder || key.detail?.label}
                />
              </Field>
            </div>
          </React.Fragment>
        ))}
      </Drawer>
    </div>
  );
};
