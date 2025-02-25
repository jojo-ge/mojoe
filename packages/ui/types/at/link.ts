import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

export type LinkProps = {
  to:
    | string
    | RouteLocationAsRelativeGeneric
    | RouteLocationAsPathGeneric
    | undefined;
};
