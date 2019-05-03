<template>
  <nuxt/>
</template>

<script>
  export default {
    name: "free",
    head () {
      return {
        link: [
          { rel: 'stylesheet', href: '/css/vendors.bundle.rtl.css' },
          { rel: 'stylesheet', href: '/css/style.bundle.rtl.css' },
          { rel: 'stylesheet', href: '/css/base-light.rtl.css' },
          { rel: 'stylesheet', href: '/css/menu-light.rtl.css' },
          { rel: 'stylesheet', href: '/css/brand-navy.rtl.css' },
          { rel: 'stylesheet', href: '/css/aside-navy.rtl.css' },
          { rel: 'stylesheet', href: 'https://cdn.rawgit.com/rastikerdar/shabnam-font/v4.0.0/dist/font-face.css' },
        ]
      }
    }
  }
</script>