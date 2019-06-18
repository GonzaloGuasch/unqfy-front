<template>
  <div class="home">
    <div class="logo-container">
      <img src="../assets/unq.svg">
      <img src="../assets/fy.svg">
    </div>
    <search-bar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchBar from '../commons/SearchBar.vue';

export default Vue.extend({
  name: 'home',
  components: {
    SearchBar,
  },
});
</script>

<style lang="scss">

  .home {
    background: black;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  .search-bar {
    margin-top: 100px;

    .search-button {
      background: #1ed760;
      border: 0;
      height: 29px;
      border-radius: 3px;
      cursor: pointer;
    }
  }

</style>
