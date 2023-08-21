import { Base } from './.nuxt/components.d';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    vuetifyOptions: './vuetify.config.ts' // <== you can omit it
  },
  devtools: { enabled: false },  
})
