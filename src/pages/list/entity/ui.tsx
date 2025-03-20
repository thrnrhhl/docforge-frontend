"use client";

import React, { FC, Suspense, useState } from "react";

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
import {
  VocabularyEntityListDefaultResponse,
  jsonRpcApi,
} from "@/shared/jsonrpc";

type GenericTableRowType = VocabularyEntityListDefaultResponse[number];

const EntityForm = React.lazy(() => import("@/widgets/entity-form"));

export const EntityListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });

  const { data: entityList = [], refetch } =
    jsonRpcApi.useVocabularyEntityListDefaultQuery({});

  const dataSource = entityList;

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
        <Title>Сущности</Title>

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
        header="Сущность"
        open={drawerRecord.isOpen}
        onOpenChange={handleCloseDrawer}
      >
        <Suspense fallback={<>Загрузка</>}>
          <EntityForm
            recordId={drawerRecord.recordId}
            onSubmitForm={handleSubmitFormDrawer}
            onClose={handleCloseDrawer}
          />
        </Suspense>
      </Drawer>
    </>
  );
};
