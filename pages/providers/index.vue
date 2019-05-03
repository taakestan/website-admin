<template>
  <div>
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-subheader__main">
        <h3 class="kt-subheader__title">لیست ارائه‌دهنگان</h3>
        <span class="kt-subheader__separator kt-hidden"></span>
        <div class="kt-subheader__breadcrumbs">
          <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
          <span class="kt-subheader__breadcrumbs-separator"></span>
          <a href="" class="kt-subheader__breadcrumbs-link">داشبورد</a>
          <span class="kt-subheader__breadcrumbs-separator"></span>
          <a href="" class="kt-subheader__breadcrumbs-link">ارائه‌دهنگان</a>
        </div>
      </div>
      <nuxt-link
              class="btn btn-success"
              :to="{name: 'providers-id', params: {id: 'create'}}">
        <i class="la la-plus"></i>
        افزودن ارائه‌کننده
      </nuxt-link>
    </div>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
      <div class="row mt-3">
        <nuxt-link
                tag="div"
                class="col-md-4 col-xl-3 mb-3"
                :to="{name: 'providers-id', params: {id: username}}"
                v-for="(provider, username) in providers.all" :key="username">
          <provider :provider="provider" :username="username"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
	import Provider from "~/components/Provider";
  export default {
		name: "index",
    components: {Provider},
    computed: mapState(['providers'])
	}
</script>

<style scoped>

</style>
