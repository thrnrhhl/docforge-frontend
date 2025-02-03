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
import { vocabularyServiceClient, grpcQuery } from "@/shared/lib/grpc";
import {
  v1VocabularyDirectoryListDefaultResponse,
  v1VocabularyDirectoryReadDefaultRequest,
  v1VocabularyDirectoryReadDefaultResponse,
  v1VocabularyDirectoryValueListDefaultRequest,
  v1VocabularyDirectoryValueListDefaultResponse,
} from "grpc-web-gen";
import { useParams } from "react-router-dom";
import { DirectoryValueForm } from "@/features/directory-value-form";

type GenericTableRowType =
  v1VocabularyDirectoryListDefaultResponse.AsObject["directoryList"][0];

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
  const [directoryValueList, setDirectoryValueList] = useState<
    v1VocabularyDirectoryValueListDefaultResponse.AsObject["directoryvalueList"]
  >([]);

  const [directoryRead, setDirectoryRead] =
    useState<v1VocabularyDirectoryReadDefaultResponse.AsObject["directory"]>();

  const dataSource = directoryValueList;

  const fetchData = async () => {
    try {
      if(!params.id) {
        return;
      }

      const directoryReadDefaultRequest =
        new v1VocabularyDirectoryReadDefaultRequest();
      directoryReadDefaultRequest.setId(params.id);

      const directoryReadResponse: v1VocabularyDirectoryReadDefaultResponse =
        await grpcQuery<
          v1VocabularyDirectoryReadDefaultRequest,
          v1VocabularyDirectoryReadDefaultResponse
        >(
          vocabularyServiceClient.v1VocabularyDirectoryReadDefault.bind(
            vocabularyServiceClient
          ),
          directoryReadDefaultRequest
        );

      const directoryValueListRequest =
        new v1VocabularyDirectoryValueListDefaultRequest();

        directoryValueListRequest.setDirectoryid(params.id)

      const directoryListRequestResponse: v1VocabularyDirectoryValueListDefaultResponse =
        await grpcQuery<
          v1VocabularyDirectoryValueListDefaultRequest,
          v1VocabularyDirectoryValueListDefaultResponse
        >(
          vocabularyServiceClient.v1VocabularyDirectoryValueListDefault.bind(
            vocabularyServiceClient
          ),
          directoryValueListRequest
        );

      setDirectoryValueList(
        directoryListRequestResponse.toObject().directoryvalueList
      );
      setDirectoryRead(directoryReadResponse.toObject().directory);
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
  }, [params]);

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
