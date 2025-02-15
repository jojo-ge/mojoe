import type { Positions } from "~/types/ui";
import type { InputAttributes } from ".";

export type InputCheckboxProps = InputAttributes & {
  value: boolean;
  labelPosition?: Positions;
};
