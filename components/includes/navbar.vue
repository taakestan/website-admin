<template>
  <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">

    <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn">
      <i class="la la-close"></i>
    </button>
    <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper"></div>

    <div class="kt-header__topbar">
      <div class="kt-header__topbar-item">
        <div class="kt-header__topbar-wrapper" id="kt_offcanvas_toolbar_quick_actions_toggler_btn">
          <span class="kt-header__topbar-icon"><i class="flaticon2-gear"></i></span>
        </div>
      </div>

      <div class="kt-header__topbar-item kt-header__topbar-item--user">

        <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px, 0px">
          <div class="kt-header__topbar-user">
            <span class="kt-header__topbar-welcome kt-hidden-mobile">سلام,</span>
            <span class="kt-header__topbar-username kt-hidden-mobile">حمید</span>
            <img alt="Pic" src="/img/users/31789477.jpeg"/>
            <!--use below badge element instead the user avatar to display username's first letter(remove kt-hidden class to display it) -->
            <span class="kt-badge kt-badge--username kt-badge--lg kt-badge--brand kt-hidden kt-badge--bold">S</span>
          </div>
        </div>

        <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-sm">
          <div class="kt-user-card kt-margin-b-50 kt-margin-b-30-tablet-and-mobile"
               style="background-image: url(/media/misc/head_bg_sm.jpg)">
            <div class="kt-user-card__wrapper">
              <div class="kt-user-card__pic">
                <img alt="Pic" src="/media/users/300_21.jpg"/>
              </div>
              <div class="kt-user-card__details">
                <div class="kt-user-card__name">Hamid Nasr</div>
                <div class="kt-user-card__position">FullStack Developer</div>
              </div>
            </div>
          </div>

          <ul class="kt-nav kt-margin-b-10">
            <li class="kt-nav__item">
              <a href="/keen/preview/default/rtl/custom/user/profile-v1.html" class="kt-nav__link">
                <span class="kt-nav__link-icon"><i class="flaticon2-calendar-3"></i></span>
                <span class="kt-nav__link-text">My Profile</span>
              </a>
            </li>
            <li class="kt-nav__item">
              <a href="/keen/preview/default/rtl/custom/user/profile-v1.html" class="kt-nav__link">
                <span class="kt-nav__link-icon"><i class="flaticon2-browser-2"></i></span>
                <span class="kt-nav__link-text">My Tasks</span>
              </a>
            </li>
            <li class="kt-nav__item">
              <a href="/keen/preview/default/rtl/custom/user/profile-v1.html" class="kt-nav__link">
                <span class="kt-nav__link-icon"><i class="flaticon2-mail"></i></span>
                <span class="kt-nav__link-text">Messages</span>
              </a>
            </li>
            <li class="kt-nav__item">
              <a href="/keen/preview/default/rtl/custom/user/profile-v1.html" class="kt-nav__link">
                <span class="kt-nav__link-icon"><i class="flaticon2-gear"></i></span>
                <span class="kt-nav__link-text">Settings</span>
              </a>
            </li>
            <li class="kt-nav__item kt-nav__item--custom kt-margin-t-15">
              <a href="/keen/preview/default/rtl/custom/user/login-v2.html" target="_blank"
                 class="btn btn-outline-metal btn-hover-brand btn-upper btn-font-dark btn-sm btn-bold">Sign
                Out</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navbar"
  }
</script>

<style scoped>

</style>