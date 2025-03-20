import { BookOpenIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { FC } from "react";
import { Text } from "..";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { jsonRpcApi } from "@/shared/jsonrpc";

export const Navbar: FC = () => {
  const {data: directoryList = []} = jsonRpcApi.useVocabularyDirectoryListDefaultQuery({});
  const {data: entityList = []} = jsonRpcApi.useVocabularyEntityListDefaultQuery({});

  return (
    <div className="p-4 flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold">Внутренние</p>

        <div className="flex flex-col gap-2 mt-2">
          <Link to="/list/field" className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-black" />

            <Text as="span" className="text-sm">
              Поля
            </Text>
          </Link>

          <Link to="/list/directory" className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-black" />

            <Text as="span" className="text-sm">
              Справочники
            </Text>
          </Link>

          <Link to="/list/entity" className="flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-black" />

            <Text as="span" className="text-sm">
              Сущности
            </Text>
          </Link>
        </div>
      </div>

      <Disclosure>
        <DisclosureButton className="w-full text-left">
          <Text as="span" className="text-sm font-semibold">
            Справочники
          </Text>
        </DisclosureButton>

        <DisclosurePanel className="flex flex-col gap-3">
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

      <Disclosure>
        <DisclosureButton className="w-full text-left">
          <Text as="span" className="text-sm font-semibold">
            Документы
          </Text>
        </DisclosureButton>

        <DisclosurePanel className="flex flex-col gap-3">
          {entityList.map((key) => (
            <Link
              key={key.id}
              to={"/list/entity-record/" + key.id}
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
