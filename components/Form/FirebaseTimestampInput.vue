<template>
  <div class="form-group">
    <label>تاریخ برگزاری وبینار</label>
    <input type="date" class="form-control" :value="date" @change="change">
  </div>
</template>

<script>
  import {firestore} from "firebase";

  export default {
    name: "FirebaseTimestampInput",
    props: {
      value: {
        required: true
      }
    },
    computed: {
      date() {
        console.log(typeof this.value);
        if (typeof this.value == 'object')
          return this.value.toDate().toJSON().replace(/T.+/g, '');
        return this.value.replace(/T.+/g, '');
      }
    },
    methods: {
      async change(event) {
        this.$emit('input', await firestore.Timestamp.fromDate(new Date(event.target.value)));
      }
    }
  }
</script>