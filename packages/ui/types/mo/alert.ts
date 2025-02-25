export type AlertVariants = "success" | "danger" | "info";
export type AlertProps = {
  title: string;
  text?: string | null;
  iconPath?: string | null;
  variant?: AlertVariants;
};
