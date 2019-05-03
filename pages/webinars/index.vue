<template>
  <div>
    <div class="kt-subheader kt-grid__item" id="kt_subheader">
      <div class="kt-subheader__main">
        <h3 class="kt-subheader__title">لیست وبینار ها</h3>
        <span class="kt-subheader__separator kt-hidden"></span>
        <div class="kt-subheader__breadcrumbs">
          <a href="#" class="kt-subheader__breadcrumbs-home"><i class="flaticon2-shelter"></i></a>
          <span class="kt-subheader__breadcrumbs-separator"></span>
          <a href="" class="kt-subheader__breadcrumbs-link">داشبورد</a>
          <span class="kt-subheader__breadcrumbs-separator"></span>
          <a href="" class="kt-subheader__breadcrumbs-link">وبینار ها</a>
        </div>
      </div>
      <nuxt-link
              class="btn btn-success"
              :to="{name: 'webinars-slug', params: {slug: 'create'}}">
        <i class="la la-plus"></i>
        ایجاد وبینار
      </nuxt-link>
    </div>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
      <div class="row mt-3">
        <div class="col-lg-4 col-md-6 mb-3"
             v-for="webinar in webinars" :key="webinar.id">
          <webinar-card :webinar="webinar" :href="'/webinars/' + webinar.slug"/>
        </div>
      </div>
      <pagination :meta="meta"/>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import {mapState} from 'vuex';
  import WebinarCard from "../../components/WebinarCard";
  import Pagination from "../../components/Pagination";

  function getPaginatedItems(items, page = 1, pageSize = 6) {
    const offset = (page - 1) * pageSize;
    const pagedItems = _.drop(items, offset).slice(0, pageSize);
    return {
      data: pagedItems,
      meta: {
        total: items.length,
        per_page: pageSize,
        current_page: page,
        last_page: Math.ceil(items.length / pageSize),
      }
    };
  }

  export default {
    name: "index",
    watchQuery: ['page'],
    components: {Pagination, WebinarCard},
    asyncData({store, query}) {
      const data = getPaginatedItems(store.state.webinars.all, query.page || 1);
      return {
        meta: data.meta,
        webinars: data.data
      }
    },
  }
</script>

<style scoped>

</style>
