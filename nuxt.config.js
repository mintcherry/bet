export default {
  ssr: false,
  head: {
    title: 'bet',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  css: [
    './assets/scss/main.scss',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/variables.scss',
      '@/assets/scss/mixins.scss',
    ],
  },

  plugins: [
    {
      src: '~/plugins/v-click-outside',
      ssr: false,
    },
    {
      src: '~/plugins/vue-preloader',
      ssr: false,
    },
    '~/plugins/dayjs',
    '@/plugins/modals.js',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/dotenv',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    '@nuxtjs/svg',
    '@nuxtjs/style-resources',
  ],

  dayjs: {
    defaultLocale: 'ru',
  },

  axios: {
    baseURL: 'https://odds.incub.space/v1',
  },

  build: {},
}
