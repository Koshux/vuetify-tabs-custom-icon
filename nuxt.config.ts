import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,

  build: {
    transpile: ['vuetify'],
  },

  fontawesome: {
    icons: {
      solid: ['chevron-left', 'chevron-right'],
    },
    useLayers: false,
  },

  modules: ['@nuxt/eslint', '@vesp/nuxt-fontawesome'],
  
  vite: {
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1000 * 1000,
    },
    plugins: [svgLoader(), vuetify({ autoImport: true })],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});