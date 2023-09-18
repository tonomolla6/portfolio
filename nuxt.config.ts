// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  app: {
    pageTransition: { name: 'slide-right', mode: 'out-in' }
  },
  css: [
    '@/assets/css/global.css',
  ],
})
