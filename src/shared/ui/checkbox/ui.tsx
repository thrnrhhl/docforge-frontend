import * as Headless from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

import { cn } from "@/shared/lib";

type Props = Headless.CheckboxProps;

export const Checkbox: FC<Props> = ({ className, ...props }) => {
  return (
    <Headless.Checkbox
      className={cn(
        "group flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 border-solid",
        "data-[checked]:border-[#3D43E3]",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <CheckIcon className="hidden h-3.5 w-3.5 group-data-[checked]:block group-data-[checked]:text-[#3D43E3]" />
    </Headless.Checkbox>
  );
};

export const CheckboxField: FC<Headless.FieldProps> = ({ className, ...props }) => {
  return <Headless.Field className={cn("flex items-center gap-2", className)} {...props} />;
};
