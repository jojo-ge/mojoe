import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  extends: ["@mojoe/ui"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2025-02-11",
});
