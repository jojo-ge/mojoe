import type { RouteLocationRaw } from "vue-router";

export type NavigationItem = {
  label: string;
  to: RouteLocationRaw;
};
