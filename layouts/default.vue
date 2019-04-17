<template>
  <div class="kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--transparent kt-aside--enabled kt-aside--fixed kt-page--loading">
    <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed " >
      <div class="kt-header-mobile__logo">
        <a href="/keen/preview/default/rtl/index.html">
          <img alt="Logo" src="/media/logos/logo-6.png"/>
        </a>
      </div>
      <div class="kt-header-mobile__toolbar">

        <button class="kt-header-mobile__toolbar-toggler kt-header-mobile__toolbar-toggler--left" id="kt_aside_mobile_toggler"><span></span></button>

        <button class="kt-header-mobile__toolbar-toggler" id="kt_header_mobile_toggler"><span></span></button>

        <button class="kt-header-mobile__toolbar-topbar-toggler" id="kt_header_mobile_topbar_toggler"><i class="flaticon-more"></i></button>
      </div>
    </div>
    <div class="kt-grid kt-grid--hor kt-grid--root">
      <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">

        <button class="kt-aside-close " id="kt_aside_close_btn">
          <i class="la la-close"></i>
        </button>

        <sidebar/>

        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
          <navbar/>

          <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor">
            <nuxt/>
          </div>

          <custom-footer/>
        </div>
      </div>
    </div>

    <div id="kt_scrolltop" class="kt-scrolltop">
      <i class="la la-arrow-up"></i>
    </div>
  </div>
</template>

<script>
  import Navbar from "../components/includes/navbar";
  import CustomFooter from "../components/includes/custom-footer";
  import Sidebar from "../components/includes/sidebar";
  export default {
    components: {Sidebar, CustomFooter, Navbar},
    middleware: 'auth',
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

<style scoped>
  .kt-grid.kt-grid--hor.kt-grid--root {
    min-height: 100vh;
  }
</style>