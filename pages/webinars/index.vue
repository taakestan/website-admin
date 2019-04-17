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
              to="/admin/webinars/create">
        <i class="la la-plus"></i>
        ایجاد وبینار
      </nuxt-link>
    </div>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
      <div class="row mt-3">
        <div class="col-xl-4 col-lg-6 mb-3"
             v-for="webinar in webinars" :key="webinar.id">
          <webinar-card :webinar="webinar" :href="'/admin/webinars/' + webinar.slug"/>
        </div>
      </div>
      <!--    <pagination :meta="meta"/>-->
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import WebinarCard from "../../components/WebinarCard";
  import Pagination from "../../components/Pagination";

  export default {
    name: "index",
    watchQuery: ['page'],
    components: {Pagination, WebinarCard},
    async asyncData({app, query}) {
      const data = [];
      const response = await app.$fireStore.collection('webinars')
          .orderBy("holding_at", "desc").get();
      await response.forEach(doc => data.push({slug: doc.id, ...doc.data()}));
      return {webinars: data}
      // const queryString = query.page ? `?page=${query.page}` : '';
      // const {data, links, meta} = await app.$axios.$get(`/api/webinars${queryString}`);
      // return {webinars: data, links: links, meta: meta}
    }
  }
</script>

<style scoped>

</style>
