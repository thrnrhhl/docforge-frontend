"use client";

import { FC, useState } from "react";

import {
  Button,
  Drawer,
  GenericTableRowAction,
  GenericTable,
  Title,
  useGenericTableFilter,
  Text,
} from "@/shared/ui";
import { PlusIcon } from "@heroicons/react/24/outline";
import { FieldForm } from "@/features/field-form";
import { VocabularyFieldListDefaultResponse, jsonRpcApi } from "@/shared/jsonrpc";

type GenericTableRowType =
  VocabularyFieldListDefaultResponse[number]

export const FieldListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });
  
  const {data: fieldList = [], refetch} = jsonRpcApi.useVocabularyFieldListDefaultQuery({});

  const dataSource = fieldList;

  const handleEditRecord = (row: GenericTableRowType) => {
    setDrawerRecord({
      isOpen: true,
      recordId: row.id,
    });
  };

  const handleCreateRecord = () => {
    setDrawerRecord({
      isOpen: true,
      recordId: "",
    });
  };

  const handleCloseDrawer = () => {
    setDrawerRecord((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmitFormDrawer = () => {
    handleCloseDrawer();
    refetch();
  };

  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <Title>Поля</Title>

        <Button className="gap-1.5" onClick={handleCreateRecord}>
          <PlusIcon className="text-black w-4 h-4" />

          <Text as="span">Добавить</Text>
        </Button>
      </div>

      <div className="table-container">
        <GenericTable
          columns={[
            {
              title: "Название",
              key: "name",
              dataIndex: "name",
            },
            {
              title: "Код",
              key: "code",
              dataIndex: "code",
            },
            {
              title: "",
              key: "",
              dataIndex: "",
              render: (row: GenericTableRowType) => (
                <GenericTableRowAction onEdit={() => handleEditRecord(row)} />
              ),
            },
          ]}
          dataSource={dataSource}
          pagination={{
            pageNumber: Number(filter.pn),
            pageSize: Number(filter.ps),
            recordsCount: 0,
          }}
        />
      </div>

      <Drawer
        header="Поле"
        open={drawerRecord.isOpen}
        onOpenChange={handleCloseDrawer}
      >
        <FieldForm
          recordId={drawerRecord.recordId}
          onSubmitForm={handleSubmitFormDrawer}
          onClose={handleCloseDrawer}
        />
      </Drawer>
    </>
  );
};
