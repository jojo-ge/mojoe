import type { Sizes } from "../ui";

export type CardPaddingSizes =
  | Extract<Sizes, "sm" | "md" | "lg" | "xl">
  | "none";
export type CardElevations = Extract<Sizes, "xs" | "sm" | "md" | "lg"> | "none";
export type CardVariants = "default" | "surface";
export type CardProps = {
  padding?: CardPaddingSizes;
  variant?: CardVariants;
  elevation?: CardElevations;
};
