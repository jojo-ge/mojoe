import type { Sizes } from "../ui";

export type IconSizes = Extract<Sizes, "sm" | "md" | "lg">;

export type IconProps = {
  size?: IconSizes;
  path: string;
};
