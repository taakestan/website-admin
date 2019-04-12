import pkg from './package'

export default {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  css: [
  ],

  plugins: [
    '~/plugins/axios',
    {src: "~/plugins/quill-editor.js", ssr: false},
    {src: '~/plugins/nuxt-client-init.js', ssr: false}
  ],

  router: {
    middleware: ['auth']
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  toast: {
    duration: 2000,
    position: 'bottom-left',
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
