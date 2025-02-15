import type { ValueLabelOption } from "~/types/ui";
import type { InputAttributes } from ".";

export type InputSelectProps = InputAttributes & {
  placeholder: string;
  options: ValueLabelOption[];
};
