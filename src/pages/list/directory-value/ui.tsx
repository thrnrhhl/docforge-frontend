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
import { useParams } from "react-router-dom";
import { DirectoryValueForm } from "@/features/directory-value-form";
import {
  VocabularyDirectoryListDefaultResponse,
  jsonRpcApi,
} from "@/shared/jsonrpc";

type GenericTableRowType = VocabularyDirectoryListDefaultResponse[number];

export const DirectoryValueListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const params = useParams();

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });

  const { data: directoryValueList = [], refetch } =
    jsonRpcApi.useVocabularyDirectoryValueListDefaultQuery(
      {
        directoryId: params.id ?? "",
      },
      {
        skip: !params.id,
      }
    );

  const { data: directoryRead } =
    jsonRpcApi.useVocabularyDirectoryReadDefaultQuery(
      {
        id: params.id ?? "",
      },
      {
        skip: !params.id,
      }
    );
  const dataSource = directoryValueList;

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
        <Title>Справочник - {directoryRead?.name}</Title>

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
        header="Справочник"
        open={drawerRecord.isOpen}
        onOpenChange={handleCloseDrawer}
      >
        <DirectoryValueForm
          recordId={drawerRecord.recordId}
          directoryId={params.id ?? ""}
          onSubmitForm={handleSubmitFormDrawer}
          onClose={handleCloseDrawer}
        />
      </Drawer>
    </>
  );
};
