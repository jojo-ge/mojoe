import type { Sizes } from "../ui";

export type CardPaddingSizes = Extract<Sizes, "sm" | "md" | "lg" | "xl">;
export type CardVariants = "default" | "surface";
export type CardProps = {
  padding?: CardPaddingSizes | "none";
  variant?: CardVariants;
};
