export type BadgeVariant = "primary" | "outline" | "skeleton";

export type BadgeProps = {
  variant?: BadgeVariant;
  text: string;
  dismissable?: boolean;
  clickable?: boolean;
};
