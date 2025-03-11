import type { Sizes } from "~/types/ui";

export type LayoutGridProps = {
  cols: number;
  rows?: number;
  spacing?: Extract<Sizes, "xs" | "sm" | "md" | "lg" | "xl" | "2xl"> | "none";
};
