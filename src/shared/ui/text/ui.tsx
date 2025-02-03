import { cn } from "@/shared/lib";
import { FC, createElement } from "react";


type Props = {
  as: "p" | "span";
  className?: string;
  children: React.ReactNode
};

export const Text:FC<Props> = ({ as, className, children }) => {
  return createElement(as, { className: cn("font-[family-name:var(--font-geist-ubuntu)]", className) }, children)
};

