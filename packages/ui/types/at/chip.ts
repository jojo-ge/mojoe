export type ChipColors = "red" | "green" | "primary" | "secondary";

export type ChipProps = {
  total?: number | null;
  active: boolean;
  color?: ChipColors;
};
