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
          <div class="d-flex justify-content-between align-items-center">
            <div>
              {{ method === 'create' ? 'افزودن' : 'ویرایش' }}
              ارائه دهنده
            </div>
            <div class="action">
              <button @click="deleteItem"
                      class="btn btn-outline-danger"
                      v-if="method === 'update'">حذف ارائه دهنده
              </button>
              <button @click="updateItem"
                      class="btn btn-success"
                      v-if="method === 'update'">
                ویرایش اطلاعات
              </button>
              <button @click="createItem"
                      class="btn btn-success" v-else>
                ذخیره اطلاعات
              </button>
            </div>
          </div>
        </template>
        <template slot="body">
          <div class="row">
            <div class="col-lg-9">
              <h5>اطلاعات اولیه</h5>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>نام</label>
                  <input class="form-control" v-model="provider.first_name">
                </div>
                <div class="form-group col-md-4">
                  <label>نام خانوادگی</label>
                  <input class="form-control" v-model="provider.last_name">
                </div>
                <div class="form-group col-md-4">
                  <label>نام کاربری</label>
                  <input class="form-control" v-model="provider.username">
                </div>
              </div>
              <div class="form-group">
                <label>بیوگرافی</label>
                <vue-editor v-model="provider.biography"></vue-editor>
              </div>
              <hr>
              <h5>اطلاعات شبکه های اجتماعی</h5>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>Facebook</label>
                  <input class="form-control" v-model="provider.profiles.facebook">
                </div>
                <div class="form-group col-md-4">
                  <label>Github</label>
                  <input class="form-control" v-model="provider.profiles.github">
                </div>
                <div class="form-group col-md-4">
                  <label>Linkedin</label>
                  <input class="form-control" v-model="provider.profiles.linkedin">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label>Telegram</label>
                  <input class="form-control" v-model="provider.profiles.telegram">
                </div>
                <div class="form-group col-md-4">
                  <label>Twitter</label>
                  <input class="form-control" v-model="provider.profiles.twitter">
                </div>
                <div class="form-group col-md-4">
                  <label>StackOverflow</label>
                  <input class="form-control" v-model="provider.profiles.stackOverflow">
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="profile-image">
                <img class="rounded w-100" :src="provider.image" alt="">
                <file-input v-model="provider.image"/>
              </div>
            </div>
          </div>

        </template>
      </portlet>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import Portlet from "../../components/admin/Portlet";
  import FormControlFeedback from "../../components/Form/FormControlFeedback";
  import FileInput from "../../components/Form/FileInput";

  export default {
    name: "create",
    components: {FileInput, FormControlFeedback, Portlet},
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
    computed: mapState(['errors']),
    methods: {
      deleteItem() {
        if (confirm('آیا مایل به حذف هستید ؟'))
          this.$store.dispatch("providers/deleteItem", this.provider.id)
              .then(() => {
                this.$router.push("/admin/providers")
              });
      },
      updateItem() {
        this.$store.dispatch("providers/updateItem", this.provider);
      },
      createItem() {
        this.$store.dispatch("providers/createItem", this.provider);
      },
    },
    asyncData({params, store}) {
      if (params.id !== 'create') {
        return {
          method: 'update',
          provider: Object.assign({}, store.state.providers.all[params.id])
        };
      }
      return {
        method: 'create',
        provider: {profiles: {}},
      }
    }
  }
</script>

<style>
  .custom-file-label::after {
    left: 0;
    width: 100%;
    text-align: center;
    content: "انتخاب فایل";
    border-radius: .25rem 0 0 .25rem;
  }

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