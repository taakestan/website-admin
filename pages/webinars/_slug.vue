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
      <div>
        <button @click="deleteItem"
                class="btn btn-sm btn-outline-danger"
                v-if="method === 'update'">حذف وبینار
        </button>
        <button class="btn btn-sm btn-success" @click="createItem" v-if="method === 'create'">ایجاد وبینار</button>
        <button class="btn btn-sm btn-primary" @click="updateItem" v-else>به‌روز رسانی وبینار</button>
      </div>
    </div>
    <div class="kt-content  kt-grid__item kt-grid__item--fluid" id="kt_content">
      <portlet>
        <template slot="title">
          {{ method === 'create' ? 'ایجاد' : 'ویرایش' }}
          وبینار
        </template>
        <template slot="body">
          <form class="mt-4">
            <h5>اطلاعات وبینار</h5>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>عنوان وبینار</label>
                <input class="form-control" v-model="webinar.title">
              </div>
              <div class="form-group col-md-4">
                <label>برچسب</label>
                <input class="form-control" v-model="webinar.label">
              </div>
              <div class="form-group col-md-4">
                <label>ارائه دهنده</label>
                <select class="form-control" v-model="webinar.provider_id">
                  <option selected disabled>انتخاب کنید ...</option>
                  <option v-for="(provider, username) in providers.all" :value="username">
                    {{ provider.first_name + ' ' + provider.last_name }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-4">
                <label>تاریخ برگزاری وبینار</label>
                <input type="date" class="form-control"
                       v-model="webinar.holding_at">
              </div>
              <div class="form-group col-md-4">
                <label>تصویر وبینار</label>
                <div class="custom-file">
                  <input type="file"
                         class="custom-file-input"
                         @change="processFile('image')">
                  <label class="custom-file-label">انتخاب فایل</label>
                </div>
              </div>
            </div>
            <hr>
            <h5>محتوای وبینار</h5>
            <div class="form-group">
              <label>توضیحات</label>
              <textarea class="form-control"
                        rows="3" v-model="webinar.description"></textarea>
            </div>
            <div class="form-group">
              <label>متن وبینار</label>
              <div class="quill-editor"
                   v-model="webinar.content"
                   v-quill:myQuillEditor="editorOption">
              </div>
            </div>
            <hr>
            <h5>تصاویر وبینار</h5>
            <div class="row">
              <div class="col-lg-8">
                <span>بنر وبینار</span>
                <img class="img-fluid rounded" :src="webinar.banner" alt="">
              </div>
              <div class="col-lg-4">
                <img class="img-fluid rounded" :src="webinar.image" alt="">
              </div>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
              <h5>لینک های وبینار</h5>
              <div class="btn btn-outline-success" @click="addLink">افزودن لینک</div>
            </div>
            <div class="form-row" v-for="(link, index) in webinar.links">
              <div class="form-group col-md-4">
                <label>عنوان لینک</label>
                <input class="form-control" v-model="link.title">
              </div>
              <div class="form-group col-md-8">
                <label>آدرس لینک</label>
                <div class="d-flex">
                  <input class="form-control ml-1" v-model="link.value">
                  <div class="btn btn-outline-warning" @click="removeLink(index)">حذف</div>
                </div>
              </div>
            </div>
          </form>
        </template>
      </portlet>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Portlet from "../../components/admin/Portlet";
  import FormControlFeedback from "../../components/Form/FormControlFeedback";

  export default {
    name: "show",
    components: {FormControlFeedback, Portlet},
    computed: mapState(['providers', 'errors']),
    data() {
      return {
        editorOption: {
          modules: {
            toolbar: [
              ['bold'],
              ['blockquote'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{'indent': '-1'}, {'indent': '+1'}],
              [{'direction': 'rtl'}],
              [{'header': [1, 2, 3, 4, 5, 6, false]}],
              [{'align': []}],
              ['link', 'image', 'video'],
            ]
          }
        }
      }
    },
    methods: {
      addLink() {
        this.webinar.links.push({
          title: '',
          value: ''
        });
      },
      removeLink(index) {
        this.webinar.links.splice(index, 1);
      },
      processFile(field) {
        const reader = new FileReader();
        reader.onload = () => {
          this.webinar[field] = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
      },
      deleteItem() {
        this.$store.dispatch("webinars/deleteItem", this.$route.params.slug);
      },
      updateItem() {
        const data = {id: this.$route.params.slug, ...this.webinar};
        this.$store.dispatch("webinars/updateItem", data);
      },
      createItem() {
        this.$store.dispatch("webinars/createItem", this.webinar);
      }
    },
    async asyncData({params, store}) {
      if (params.slug !== 'create') {
        const webinar = store.state.webinars.all.find(item => item.slug === params.slug);
        return {webinar, method: 'update'};
      }
      return {
        method: 'create',
        webinar: {
          title: '',
          label: '',
          provider_id: '',
          holding_at: '',
          image: '',
          banner: '',
          description: '',
          content: '',
          links: []
        },
      }
    }
  }
</script>

<style>
  .ql-editor {
    min-height: 300px;
    max-height: 400px;
    overflow: auto;
    font-family: Vazir;
  }

  .ql-picker-label:before {
    padding-right: 1.2rem;
  }

  .form-group > .ql-snow {
    border-color: #ebedf2;
  }

  .ql-toolbar {
    border-radius: .25rem .25rem 0 0;
  }

  .ql-container {
    border-radius: 0 0 .25rem .25rem;
  }
</style>
