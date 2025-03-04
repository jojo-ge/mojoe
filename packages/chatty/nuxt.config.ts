import tailwindcss from "@tailwindcss/vite";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: { "~chatty": resolve("./") },
  extends: ["@mojoe/ui"],
  modules: ["@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-02-11",
});
