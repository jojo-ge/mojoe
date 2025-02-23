import type { Positions } from "~/types/ui";
import type { InputAttributes } from ".";

export type InputToggleProps = InputAttributes & {
  value: boolean;
  labelPosition?: Positions;
};
