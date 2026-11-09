// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon/module"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  nitro: {
    preset: "cloudflare-pages",
  },
  googleFonts: {
    families: {
      "Space Grotesk": [300, 400, 500, 600, 700],
    },
    display: "swap",
    download: true,
  },
});
