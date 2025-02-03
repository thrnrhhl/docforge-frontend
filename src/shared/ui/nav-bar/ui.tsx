import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";
import { Text } from "..";
import {
  v1VocabularyDirectoryListDefaultRequest,
  v1VocabularyDirectoryListDefaultResponse,
} from "grpc-web-gen";
import { grpcQuery, vocabularyServiceClient } from "@/shared/lib/grpc";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export const Navbar: FC = () => {
  const [directoryList, setDirectoryList] = useState<
    v1VocabularyDirectoryListDefaultResponse.AsObject["directoryList"]
  >([]);

  const handleFetch = async () => {
    try {
      const response: v1VocabularyDirectoryListDefaultResponse =
        await grpcQuery(
          vocabularyServiceClient.v1VocabularyDirectoryListDefault.bind(
            vocabularyServiceClient
          ),
          new v1VocabularyDirectoryListDefaultRequest()
        );

      setDirectoryList(response.toObject().directoryList);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-3">
      <Link to="/list/field" className="flex items-center gap-2">
        <BookOpenIcon className="w-4 h-4 text-black" />

        <Text as="span" className="text-sm">
          Поля
        </Text>
      </Link>

      <Disclosure>
        <DisclosureButton className="w-full text-left">
          <Text as="span" className="text-sm">
            Все справочники
          </Text>
        </DisclosureButton>

        <DisclosurePanel className="flex flex-col gap-3">
          <Link to="/list/directory" className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-black" />

            <Text as="span" className="text-sm">
              Редактор справочников
            </Text>
          </Link>

          {directoryList.map((key) => (
            <Link
            key={key.id}
              to={"/list/directory/" + key.id}
              className="flex items-center gap-2"
            >
              <BookOpenIcon className="w-4 h-4 text-black" />

              <Text as="span" className="text-sm">
                {key.name}
              </Text>
            </Link>
          ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};
