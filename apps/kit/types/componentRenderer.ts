export type ComponentConfig = {
  [key: string]: {
    inputType: "text" | "number" | "select" | "checkbox" | "radio";
    default: any;
    options?: any[];
  };
};

export type ComponentRendererProps = {
  path: "At" | "Mo" | "Or";
  componentName: string;
  componentConfig?: Record<string, any>;
};
