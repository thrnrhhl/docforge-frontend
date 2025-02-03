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
import { DirectoryForm } from "@/features/directory-form";
import {
  v1VocabularyFieldListDefaultRequest,
  v1VocabularyFieldListDefaultResponse,
  v1VocabularyDirectoryListDefaultRequest
} from "grpc-web-gen";
import { FieldForm } from "@/features/field-form";

type GenericTableRowType =
  v1VocabularyFieldListDefaultResponse.AsObject["fieldList"][0];

export const FieldListPage: FC = () => {
  const { filter } = useGenericTableFilter({ keys: ["ps", "pn"] });

  const [drawerRecord, setDrawerRecord] = useState<{
    isOpen: boolean;
    recordId: string | null;
  }>({
    isOpen: false,
    recordId: null,
  });
  const [fieldList, setFieldList] = useState<
    v1VocabularyFieldListDefaultResponse.AsObject["fieldList"]
  >([]);

  const dataSource = fieldList;

  const fetchData = async () => {
    try {
      const request = new v1VocabularyFieldListDefaultRequest();

      const response: v1VocabularyFieldListDefaultResponse = await grpcQuery<
        v1VocabularyFieldListDefaultRequest,
        v1VocabularyFieldListDefaultResponse
      >(
        vocabularyServiceClient.v1VocabularyFieldListDefault.bind(
          vocabularyServiceClient
        ),
        request
      );

      setFieldList(response.toObject().fieldList);
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
