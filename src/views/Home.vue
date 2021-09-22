<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.jpg">
    <div class="buttons">
      <ui-button raised>Gérez les photos</ui-button>
          <router-link to="/about"><ui-button raised>Gérez les catégories</ui-button>
</router-link>

    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>

img {
  max-width: 200px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;

}
  .buttons {
    display:flex;
    justify-content: center;
    margin-top: 10%;
  }

  .buttons :first-child {
    margin-right: 3em;
  }
</style>
