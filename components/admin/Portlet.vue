<template>
  <div class="kt-portlet" :class="className">
    <div class="kt-portlet__head">
      <div class="kt-portlet__head-label">
        <h3 class="kt-portlet__head-title">
          <slot name="title"></slot>
        </h3>
      </div>
      <div class="kt-portlet__head-toolbar">
        <div class="kt-portlet__head-group">
          <slot name="tools"></slot>
        </div>
      </div>
    </div>
    <div class="kt-portlet__body">
      <div class="kt-portlet__content">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Portlet",
    props: {
      'className' : {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  .portlet {
    background: #fff;
    box-shadow: 0 1px 15px 1px rgba(69,65,78,0.08);
  }
</style>
