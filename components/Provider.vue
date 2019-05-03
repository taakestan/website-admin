<template>
  <div class="provider-card rounded p-3 bg-white h-100 d-flex flex-column">
    <img :src="imagePath" class="rounded w-100" :alt="username">
    <h3 class="title mt-3 text-center" v-text="provider.first_name + ' ' + provider.last_name"></h3>
    <div class="text-justify" v-html="provider.biography"></div>
  </div>
</template>
<script>
  export default {
    name: 'provider',
    props: {
      provider: {
        required: true
      },
      username: String
    },
    computed: {
      imagePath() {
        return `https://www.taakproject.ir/img/providers/${this.username}.jpg`;
      }
    }
  }
</script>
<style scoped lang="scss">
  .provider-card {
    box-shadow: 2px 2px 15px 0 rgba(36, 37, 38, 0.08);
  }
</style>
