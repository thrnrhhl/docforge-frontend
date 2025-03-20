import { selectListValue } from "@/shared/config/helpers";
import { VocabularyFieldReadDefaultResponse, jsonRpcApi } from "@/shared/jsonrpc";
import { Field, Label, Select, SelectLabel, SelectOption } from "@/shared/ui";
import { FC, useEffect } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  fieldId: string;
  detail: VocabularyFieldReadDefaultResponse["detail"]
};

export const EntityRecordFieldSelect: FC<Props> = ({ fieldId, detail }) => {
  const {data: directoryValueList = []} =jsonRpcApi.useVocabularyDirectoryValueListDefaultQuery({directoryId: detail?.directoryId ?? ""}, {skip: !detail?.directoryId});

  const { register, getValues, setValue } = useFormContext();

  const fieldName = `select_${fieldId}`;

  const value = getValues(fieldName);

  useEffect(() => {
    register(fieldName);
  }, [])
  
  return (
    <Field>
      <Label>{detail?.label || "Не заполнено"}</Label>

      <Select value={selectListValue(value,directoryValueList)} onChange={(value) => {
        if(value && !Array.isArray(value)) {
          setValue(fieldName, value.id);
        }
      }}>
        {directoryValueList.map((key) => (
          <SelectOption key={key.id} value={key}>
            <SelectLabel>{key.name}</SelectLabel>
          </SelectOption>
        ))}
      </Select>
    </Field>
  );
};