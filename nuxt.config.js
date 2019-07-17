const { NODE_ENV } = process.env
const BASE_URL =
  NODE_ENV === 'production' ? 'http://jaycott.com' : 'http://localhost:3000'

module.exports = {
  mode: 'universal',
  srcDir: 'app/',
  router: {
    base: NODE_ENV === 'development' ? '/' : '/jaycott/'
  },
  head: {
    title: '제이콧',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '일본 브랜드, 얼마나 알고 계신가요?'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: [{ src: '~assets/index.scss', lang: 'scss' }],

  plugins: ['@/plugins/element-ui'],

  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', 'nuxt-device-detect'],

  axios: {
    baseURL: BASE_URL,
    credentials: true,
    proxy: false,
    debug: false,
    retry: {
      retries: NODE_ENV === 'production' ? 3 : 0
    },
    requestInterceptor: config => {
      config.headers.common['Authorization'] = ''
      config.headers.common['Content-Type'] =
        'application/x-www-form-urlencoded;application/json'
      return config
    }
  },

  build: {
    transpile: [/^element-ui/],

    extend(config) {}
  }
}
