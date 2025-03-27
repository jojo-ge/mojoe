const icons = iconList();

export const buttonConfig = {
  text: {
    inputType: "text",
    default: "Click Me",
  },
  size: {
    inputType: "select",
    default: "md",
    options: [
      { value: "sm", label: "sm" },
      { value: "md", label: "md" },
      { value: "lg", label: "lg" },
    ],
  },
  variant: {
    inputType: "select",
    default: "primary",
    options: [
      { value: "primary", label: "Primary" },
      { value: "outline", label: "Outline" },
      { value: "link", label: "Link" },
    ],
  },
  disabled: {
    inputType: "checkbox",
    default: false,
  },
  iconPath: {
    inputType: "select",
    default: "",
    options: ["", ...icons],
  },
  loading: {
    inputType: "checkbox",
    default: false,
  },
};
