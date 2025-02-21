import type { Sizes } from "~/types/ui";

export type LayoutFlexProps = {
  direction?: "row" | "col";
  spacing?: Extract<Sizes, "xs" | "sm" | "md" | "lg" | "xl" | "2xl"> | "none";
  list?: boolean;
};
