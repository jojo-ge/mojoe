import tailwindcss from "@tailwindcss/vite";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  alias: { "~ui": resolve("./") },
  css: ["~ui/assets/css/main.css"],
  modules: ["@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },

  imports: {
    presets: [
      { from: "tailwind-merge", imports: ["twMerge"] },
      { from: "class-variance-authority", imports: ["cva"] },
    ],
  },

  compatibilityDate: "2025-02-11",
});
