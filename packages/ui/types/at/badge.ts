export type BadgeVariant = "primary" | "outline";

export type BadgeProps = {
  variant?: BadgeVariant;
  text: string;
  dismissable?: boolean;
  clickable?: boolean;
};
