export type ChipVariant = "primary" | "outline";

export type ChipProps = {
  variant?: ChipVariant;
  text: string;
  dismissable?: boolean;
};
