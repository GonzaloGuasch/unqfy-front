<template>
  <div class="navbar-container">
    <search-bar/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import SearchBar from './SearchBar.vue'

  export default Vue.extend({
    name: 'navbar',
    components: {
        SearchBar,
    }
  })
</script>

<style lang="scss" scoped>
  .navbar-container {
    .search-bar {
      margin: 0;
    }
  }
</style>
