import type { Positions } from "~/types/ui";
import type { InputAttributes } from ".";

export type InputSwitchProps = InputAttributes & {
  value: boolean;
  labelPosition?: Positions;
};
