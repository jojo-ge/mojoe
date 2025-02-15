import type { Sizes } from "../ui";

export type ButtonVariants = "primary" | "outline" | "link";

export type ButtonSizes = Extract<Sizes, "sm" | "md" | "lg">;
export type ButtonProps = {
  text?: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  disabled?: boolean;
  iconPath?: string | null;
  loading?: boolean;
};
