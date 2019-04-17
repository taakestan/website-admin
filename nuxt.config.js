require('dotenv').config();
import pkg from './package'

export default {
  mode: 'spa',

  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    htmlAttrs: {
      dir: 'rtl',
      lang: 'fa'
    },
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  loading: {color: '#fff'},

  css: [],

  plugins: [
    '~/plugins/axios',
    '~/plugins/fireauth',
    {src: "~/plugins/quill-editor.js", ssr: false},
    {src: '~/plugins/nuxt-client-init.js', ssr: false}
  ],

  modules: [
    'nuxt-fire',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  fire: {
    useOnly: ['auth', 'firestore'],
    config: {
      development: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
      },
      production: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
      }
    }
  },

  toast: {
    duration: 2000,
    position: 'bottom-left',
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  router: {
    middleware: 'auth'
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
