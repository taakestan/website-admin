<template>
  <div class="form-group">
    <label>تصویر وبینار</label>
    <div class="custom-file">
      <input type="file"
             class="custom-file-input"
             @change="processFile()">
      <label class="custom-file-label">انتخاب فایل</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FileInput",
    methods: {
      processFile() {
        const reader = new FileReader();
        reader.onload = () => this.$emit('input', reader.result);
        reader.readAsDataURL(event.target.files[0]);
      },
    }
  }
</script>