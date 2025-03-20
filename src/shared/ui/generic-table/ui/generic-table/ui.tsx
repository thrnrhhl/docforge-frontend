import { FC } from "react";
import { GenericTablePagination } from "../generic-table-pagination";
import { GenericTableColumnType } from "../../model/types";
import { useGenericTableFilter } from "../..";
import { cn } from "@/shared/lib";
import { Field, Label } from "@/shared/ui";
import { useIsMobile } from "@/shared/config/hooks";

type Props = {
  columns: GenericTableColumnType[];
  dataSource: any[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    recordsCount: number;
  };
};

export const GenericTable: FC<Props> = ({
  columns,
  dataSource,
  pagination,
}) => {
  const { filter } = useGenericTableFilter({ keys: ["q", "pn", "ps"] });

  const isFilterNotEmpty = !!Object.keys(filter).length;

  const isShowPagination = isFilterNotEmpty && dataSource.length === 0;

  const isMobile = useIsMobile();

  if (isMobile) {

    const isShowTable = !!dataSource.length;

    return (
      <div>
        <p className="text-sm mb-1">
          {`Найдено записей: ${pagination.recordsCount}`}
        </p>

        {isShowTable && <div className="flex flex-col gap-2">
          {dataSource.map((key) => (
            <Field key={key.id} className="bg-white shadow-sm p-2 rounded-md border border-neutral-300 flex flex-col gap-1">
              {columns.map((column, columnIndex) => (
                <div
                  key={`${column.key}_${columnIndex}`}
                  className="text-black text-sm break-words"
                >
                  <Label>{column.title}</Label>

                  <div>
                    {column.render ? column.render(key) : key[column.dataIndex]}
                  </div>
                </div>
              ))}
            </Field>
          ))}
        </div>}

        {isShowTable && <div className="flex justify-center mt-2 bg-white shadow-sm border border-neutral-300 rounded-md py-1">
          {!isShowPagination && <GenericTablePagination {...pagination} />}
        </div>}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-white rounded-md shadow-sm border border-solid border-neutral-200">
      <table className="w-full text-sm text-left rtl:text-right table-fixed text-gray-500 border-spacing-0">
        <thead className="text-sm text-gray-700 uppercase bg-neutral-100 border-b border-solid border-neutral-300">
          <tr>
            {columns.map((key, index) => (
              <th
                key={`${key}_${index}`}
                style={{ width: key.width }}
                scope="col"
                className="px-4 py-2 text-black text-sm"
              >
                {key.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataSource.map((row) => (
            <tr key={row.id} className="bg-white hover:bg-gray-50">
              {columns.map((column, columnIndex) => (
                <td
                  key={`${column.key}_${columnIndex}`}
                  className="px-4 py-2 text-black text-sm break-words"
                  valign="middle"
                >
                  {column.render ? column.render(row) : row[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className={cn(
          "flex justify-between items-center py-2 border-t border-t-neutral-300 border-solid px-3",
          {
            "border-none justify-center": isShowPagination,
          }
        )}
      >
        <span className="text-sm">
          {`Найдено документов: ${pagination.recordsCount}`}
        </span>

        {!isShowPagination && <GenericTablePagination {...pagination} />}
      </div>
    </div>
  );
};
