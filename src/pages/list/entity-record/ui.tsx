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
import { useParams } from "react-router";
import { VocabularyFieldListDefaultResponse, jsonRpcApi } from "@/shared/jsonrpc";


type GenericTableRowType =
  VocabularyFieldListDefaultResponse[number]

const EntityRecordForm = React.lazy(() => import("@/features/entity-record-form"));

export const EntityRecordListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });
  const params = useParams<{ entityId: string }>()

  const {data: entityRecordList = [], refetch} = jsonRpcApi.useVocabularyEntityRecordListDefaultQuery({entityId: params.entityId ?? ""}, {skip: !params.entityId})
  const {data: entityRead} = jsonRpcApi.useVocabularyEntityReadDefaultQuery({id: params.entityId ?? ""}, {skip: !params.entityId})


  const dataSource = entityRecordList;


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
        <Title>{entityRead?.name}</Title>

        <Button onClick={handleCreateRecord}>
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
          <EntityRecordForm entity={entityRead} recordId={drawerRecord.recordId} onSubmitForm={handleSubmitFormDrawer} onClose={handleCloseDrawer}/>
        </Suspense>
      </Drawer>
    </>
  );
};
