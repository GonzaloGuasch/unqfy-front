<template>
  <div class="container">
    <search-bar/>
    <div v-if="objects" class="results-container">
      <artist-card v-for="object in objects" :key="object.name" :artist="object"/>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import axios from 'axios';
    import ArtistCard from '../commons/ArtistCard.vue';
    import SearchBar from '../commons/SearchBar.vue';

    export default Vue.extend({
        name: "search",
        components: {
            ArtistCard,
            SearchBar,
        },
        data() {
            return {
                objects: []
            };
        },
        async beforeMount() {
          const category = this.$route.params.category;
          const query = this.$route.params.query;
          const result = await axios.get(`http://localhost:3030/api/${category}?name=${query}`);
          this.objects = result.data[0].albums
        },
    });
</script>

<style lang="scss">
  .container {
    background: black;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .results-container {
      width: 1024px;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 50px;
    }
  }
</style>
