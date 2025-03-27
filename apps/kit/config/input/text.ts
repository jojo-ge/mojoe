import { iconList } from "~/utils/icons";

export const inputTextConfig = {
  modelValue: {
    inputType: "text",
    default: "Default text value",
  },
  placeholder: {
    inputType: "text",
    default: "Enter text",
  },
  disabled: {
    inputType: "checkbox",
    default: false,
  },
  loading: {
    inputType: "checkbox",
    default: false,
  },
  label: {
    inputType: "text",
    default: "Label",
  },
  name: {
    inputType: "text",
    default: "name",
  },
  trailingButtonIconPath: {
    inputType: "select",
    default: "",
    options: iconList(),
  },
  trailingButtonFunction: {
    inputType: "function",
    default: null,
  },
};
