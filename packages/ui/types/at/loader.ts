import type { Sizes } from "../ui";

export type LoaderSizes = Extract<Sizes, "sm" | "md" | "lg">;

export type LoaderProps = {
  size?: LoaderSizes;
};
