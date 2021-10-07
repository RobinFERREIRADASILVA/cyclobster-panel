<template>
  <div class="photos-wrapper">
      <h1>Gestions des photos</h1>
      <div class="card" v-for="photo in photos" v-bind:key="photo.id">
          
          <div class="card-picture">
              <div class="img-section">
                <!-- <img :src="require(`../assets/images/${photo.picture}`)" /> -->
              </div>
          </div>
          <p>{{ photo.picture }}</p>
      </div>
  </div>
</template>

<script>

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'Photos',
  data() {
    // return{
    //   count: 0,

    // }
  },
  methods: {
    // increment() {
    //   this.count += 1;
    // }
  },
  computed: {
        photos () {

      return this.$store.state.photos.filter((el, index) => index < 10 ? el : null);

    }

  },
    mounted() {
    this.$store.dispatch("getPhotos");
  },

  components: {
  }
}


</script>

<style scoped>
    .photos-wrapper {
        color: white;
    }

    .card {
        width: 250px;
    }

    .card-picture {
        height: 200px;
        width: 200px;
        /* background-image: url(../assets/images/000003.jpg) !important; */
    }

    img {
        width: 200px
    }
</style>
