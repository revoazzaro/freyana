// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  googleFonts: {
    families: {
      'Space Grotesk': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    download: true
  }
})
