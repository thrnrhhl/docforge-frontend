import { FC, HTMLAttributes } from "react";

import { cn } from "@/shared/lib";

type Props = HTMLAttributes<HTMLHeadingElement>;

export const Title: FC<Props> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn("text-xl font-semibold font-[family-name:var(--font-geist-unbounded)]", className)} {...props}>
      {children}
    </h1>
  );
};
