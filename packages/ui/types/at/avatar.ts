import type { Sizes } from "../ui";

export type AvatarSizes = Extract<Sizes, "xs" | "sm" | "md" | "lg" | "xl">;

export type AvatarProps = {
  src?: string | null;
  fallbackString: string;
  size?: AvatarSizes;
};
