<template>
  <div id="app">
    <loading :is-full-page="true" :active.sync="isLoading" color="#1ed760" background-color="#000000" :z-index="1500"/>
    <navbar v-if="!inRoute(ROUTES.HOME)"/>
    <router-view :key="$route.path" @loading="setLoading"/>
    <creation-button/>
    <creation-modal @loading="setLoading"/>
    <spotify-button/>
    <spotify-modal @loading="setLoading"/>
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
  // @ts-ignore
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';

  export default Vue.extend({
    name: 'app',
    components: {
      Navbar,
      CreationButton,
      CreationModal,
      SpotifyButton,
      SpotifyModal,
      Loading,
    },
    data() {
      return {
        ROUTES,
        isLoading: false,
      }
    },
    methods: {
      inRoute,
      setLoading(loadingState: boolean) {
        this.isLoading = loadingState
      },
    }
  })
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
    * {
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
