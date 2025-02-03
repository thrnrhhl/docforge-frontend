"use client";

import { FC, useEffect, useState } from "react";

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
import { vocabularyServiceClient, grpcQuery, } from "@/shared/lib/grpc";
import { DirectoryForm } from "@/features/directory-form";
import { v1VocabularyDirectoryListDefaultRequest, v1VocabularyDirectoryListDefaultResponse } from "grpc-web-gen";

type GenericTableRowType =
v1VocabularyDirectoryListDefaultResponse.AsObject["directoryList"][0];

export const DirectoryListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });
  const [directoryList, setDirectoryList] = useState<
  v1VocabularyDirectoryListDefaultResponse.AsObject["directoryList"]
  >([]);

  const dataSource = directoryList;

  const fetchData = async () => {
    try {
      const request = new v1VocabularyDirectoryListDefaultRequest();

        const response: v1VocabularyDirectoryListDefaultResponse = await grpcQuery<
        v1VocabularyDirectoryListDefaultRequest,
        v1VocabularyDirectoryListDefaultResponse
        >(vocabularyServiceClient.v1VocabularyDirectoryListDefault.bind(vocabularyServiceClient), request);


      setDirectoryList(response.toObject().directoryList);
    } catch (e) {
      console.log(e);
    }
  };

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
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-start justify-between mb-4">
        <Title>Справочники</Title>

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
                <GenericTableRowAction
                  onEdit={() => handleEditRecord(row)}
                />
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
        <DirectoryForm
          recordId={drawerRecord.recordId}
          onSubmitForm={handleSubmitFormDrawer}
          onClose={handleCloseDrawer}
        />
      </Drawer>
    </>
  );
};
