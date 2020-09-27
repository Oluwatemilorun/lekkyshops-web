export default {
  head: {
    titleTemplate: '%s - Admin | LekkyShops',
    title: 'LekkyShops Admin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap',
      },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/vuetify'],

  modules: ['@nuxtjs/axios'],

  axios: {},

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/plugins/vuetify.options.js',
  },

  build: {},
}