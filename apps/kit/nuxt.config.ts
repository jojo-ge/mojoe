import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  extends: ["@mojoe/ui", "@mojoe/chatty"],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-02-11",
});
