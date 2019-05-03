<template>
  <div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop" id="kt_aside">

    <div class="kt-aside__brand kt-grid__item " id="kt_aside_brand">
      <div class="kt-aside__brand-logo">
        <nuxt-link to="/">
          <img style="width: 11rem;" alt="Logo" src="/img/logo.svg"/>
        </nuxt-link>
      </div>
      <div class="kt-aside__brand-tools">
        <button class="kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left" id="kt_aside_toggler">
          <span></span>
        </button>
      </div>
    </div>

    <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
      <div id="kt_aside_menu" class="kt-aside-menu ">

        <ul class="kt-menu__nav">
          <li class="kt-menu__item kt-menu__item--submenu ">
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <i class="kt-menu__link-icon flaticon2-graphic"></i>
              <span class="kt-menu__link-text">داشبورد</span>
              <i class="kt-menu__ver-arrow la la-angle-left"></i>
            </a>
            <div class="kt-menu__submenu">
              <span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item  kt-menu__item--parent">
                  <span class="kt-menu__link">
                      <span class="kt-menu__link-text">داشبورد</span>
                  </span>
                </li>
                <li class="kt-menu__item kt-menu__item--active">
                  <a href="/keen/preview/default/rtl/index.html" class="kt-menu__link ">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">مدیریت محتوا</span>
                  </a>
                </li>
                <li class="kt-menu__item">
                  <nuxt-link to="/" class="kt-menu__link ">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">مدیریت املاک ها</span>
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="kt-menu__item kt-menu__item--open kt-menu__item--here">
            <nuxt-link :to="{name: 'webinars'}" class="kt-menu__link kt-menu__toggle">
              <i class="kt-menu__link-icon flaticon2-expand"></i>
              <span class="kt-menu__link-text">وبینار ها</span>
            </nuxt-link>
          </li>
          <li class="kt-menu__section">
            <h4 class="kt-menu__section-text">شخصی</h4>
            <i class="kt-menu__section-icon flaticon-more-v2"></i>
          </li>
          <li class="kt-menu__item kt-menu__item--submenu">
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <i class="kt-menu__link-icon flaticon2-chat-1"></i>
              <span class="kt-menu__link-text">وبلاگ</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                  <span class="kt-menu__link">
                      <span class="kt-menu__link-text">وبلاگ</span>
                  </span>
                </li>
                <li class="kt-menu__item">
                  <a href="/keen/preview/default/rtl/custom/blog/grid.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">Blog Grid</span>
                  </a>
                </li>
                <li class="kt-menu__item">
                  <a href="/keen/preview/default/rtl/custom/blog/grid.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">Blog Grid</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="kt-menu__item kt-menu__item--submenu">
            <a href="javascript:;" class="kt-menu__link kt-menu__toggle">
              <i class="kt-menu__link-icon flaticon2-chat-1"></i>
              <span class="kt-menu__link-text">قیمت گزاری</span>
              <i class="kt-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="kt-menu__submenu "><span class="kt-menu__arrow"></span>
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item kt-menu__item--parent" aria-haspopup="true">
                                <span class="kt-menu__link">
                                    <span class="kt-menu__link-text">قیمت گزاری</span>
                                </span>
                </li>
                <li class="kt-menu__item">
                  <a href="/keen/preview/default/rtl/custom/blog/grid.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">Blog Grid</span>
                  </a>
                </li>
                <li class="kt-menu__item">
                  <a href="/keen/preview/default/rtl/custom/blog/grid.html" class="kt-menu__link">
                    <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                    <span class="kt-menu__link-text">Blog Grid</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="kt-aside__footer kt-grid__item" id="kt_aside_footer">
      <div class="kt-aside__footer-nav">
        <div class="kt-aside__footer-item">
          <a href="#" class="btn btn-icon">
            <i class="flaticon2-gear"></i>
          </a>
        </div>
        <div class="kt-aside__footer-item">
          <a href="#" class="btn btn-icon">
            <i class="flaticon2-cube"></i>
          </a>
        </div>
        <div class="kt-aside__footer-item">
          <a href="#" class="btn btn-icon">
            <i class="flaticon2-bell-alarm-symbol"></i>
          </a>
        </div>
        <div class="kt-aside__footer-item">
          <a href="#" class="btn btn-icon">
            <i class="flaticon2-calendar-2"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sidebar"
  }
</script>

<style scoped>

</style>