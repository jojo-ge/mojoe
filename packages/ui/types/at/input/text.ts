import type { InputAttributes } from ".";

export type InputTextProps = InputAttributes & {
  placeholder: string;
  trailingButtonIconPath?: string | null;
  trailingButtonFunction?: null | (() => void);
};
