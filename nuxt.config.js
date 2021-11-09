export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'x-drive.ua admin own portfolio' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'keywords', name: 'keywords', content: 'portfolio' },
      { hid: 'application-name', name: 'application-name', content: 'x-portfolio' },
      { hid: 'author', name: 'author', content: 'Andrii Mariichyn' },
      { hid: 'theme-color', name: 'theme-color', content: '#202020' },
      { hid: 'color-scheme', name: 'color-scheme', content: 'dark ' },
      { hid: 'generator', name: 'generator', content: 'Nuxt.js' },
      { hid: 'referrer', name: 'referrer', content: 'strict-origin-when-cross-origin' }, // https://web.dev/referrer-best-practices
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US' },
      {
        code: 'uk',
        iso: 'uk-UA',
        // isCatchallLocale: true, // This one will be used as catchall locale
      },
      // { code: 'ru', iso: 'ru-RU' },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    vueI18nLoader: true, // Allow translations using custom blocks in Vue files e.g. <i18n>...</i18n>
    detectBrowserLanguage: false,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true, // recommended for better SEO
    },
    // SEO
    baseUrl: 'https://x-portfolio.netlify.app', // Set baseUrl to make alternate URLs fully-qualified
    seo: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
