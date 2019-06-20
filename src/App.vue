<template>
  <div id="app">
    <navbar v-if="!inRoute(ROUTES.HOME)"/>
    <router-view :key="$route.path"/>
    <creation-button/>
    <creation-modal/>
    <spotify-button/>
    <spotify-modal/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {ROUTES, inRoute} from './router';
  import Navbar from './commons/Navbar.vue';
  import CreationButton from './commons/CreationButton.vue';
  import CreationModal from './commons/CreationModal.vue';
  import SpotifyButton from './commons/SpotifyButton.vue';
  import SpotifyModal from './commons/SpotifyModal.vue';

  export default Vue.extend({
    name: 'app',
    components: {
      Navbar,
      CreationButton,
      CreationModal,
      SpotifyButton,
      SpotifyModal,
    },
    data() {
      return {
        ROUTES,
      }
    },
    methods: {
      inRoute,
    }
  })
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
    body {
        margin: 0;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
