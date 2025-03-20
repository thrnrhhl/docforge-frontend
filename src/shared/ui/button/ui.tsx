import * as Headless from "@headlessui/react";
import { FC } from "react";

import { cn } from "@/shared/lib";

interface Props extends Headless.ButtonProps {
  variant?: "primary" | "secondary" | "tertinary" | "unstyled"
}

export const Button: FC<Props> = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  return (
    <Headless.Button
      className={cn("text-xs",
        {
          
          "rounded-full gap-2 px-3 h-8 py-1.5 cursor-pointer border-none flex items-center justify-center text-xs disabled:opacity-50":variant !== "unstyled",
          "border-none bg-transparent cursor-pointer w-fit h-fit": variant === "unstyled",
          "bg-black font-medium text-white border border-black/10 border-solid rounded-full": variant === "primary",
          "border border-neutral-300 border-solid text-neutral-500": variant === "tertinary",
          "border border-blue-300 border-solid text-blue-500": variant === "secondary"
        },
        className
      )}
      {...props}
    >
      {children}
    </Headless.Button>
  );
};
