import type { InputAttributes } from ".";

export type InputTextProps = InputAttributes & {
  placeholder: string;
  disabled?: boolean;
  loading?: boolean;
  trailingButtonIconPath?: string | null;
  trailingButtonFunction?: null | (() => void);
};
