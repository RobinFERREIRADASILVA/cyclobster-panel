<template>
  <div class="upload-wrapper">
      <h1>Ajouter une photo</h1>
      <div class="form">
        <ui-form-field>
            <ui-file
                accept="image/*"
                multiple
                preview
                @change="balmUI.onChange('files', $event)"
                ></ui-file>
                <transition-group class="preview-list" name="list" tag="ul">
                <li class="item" v-for="(file) in files" :key="file.tmpId">
                    <div class="inner">
                    <span class="preview" :style="setBg(file)"></span>
                    <span class="name">{{ file.name }}</span>
                    </div>
                </li>
                </transition-group>
        </ui-form-field>
      </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { useEvent } from 'balm-ui';


export default {
  name: 'Upload',
  data() {
    return{
        balmUI: useEvent(),
      files: []

    }
    
  },
  methods: {
    // increment() {
    //   this.count += 1;
    // }
    setBg({ previewSrc }) {
      return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
    },
  },
  computed: {
    //     photos () {

    //   return this.$store.state.photos.filter((el, index) => index < 10 ? el : null);

    // }

  },
//     mounted() {
//     this.$store.dispatch("getPhotos");
//   },

  components: {
  }
}


</script>

<style scoped>
    .upload-wrapper {
        color: white !important;
    }

    label {
        color: white;
    }

</style>
