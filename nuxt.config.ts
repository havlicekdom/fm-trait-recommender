// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        semi: false,
      },
    },
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  typescript: {
    typeCheck: true,
  },
})
