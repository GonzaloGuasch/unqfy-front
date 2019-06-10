<template>
  <div class="home">
    <div class="logo-container">
      <img src="../assets/unq.svg">
      <img src="../assets/fy.svg">
    </div>
    <div class="search-bar">
      <dropdown :options="options"
                :selected="selectedOption"
                @updateOption="updateSelected"
                :placeholder="''">
      </dropdown>
      <form @submit.prevent="search">
        <input v-model="query" type="text">
        <button class="search-button">Search</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import dropdown from 'vue-dropdowns';

const options = [
          {
            name: 'Artists',
            searchFor: (router: any, searchInput: string) => router.push({name: 'search-results', params: {type: 'artists', query: searchInput}}),
          },
          {
            name: 'Albums',
            searchFor: (router: any, searchInput: string) => router.push({name: 'search-results', params: {type: 'albums', query: searchInput}}),
          },
        ]

export default Vue.extend({
  name: 'home',
  components: {
    dropdown,
  },
  data() {
    return {
      options,
      selectedOption: options[0],
      query: '',
    }
  },
  methods: {
    search() {
      this.selectedOption.searchFor(this.$router, this.query)
    },
    updateSelected(payload: any) {
      this.selectedOption = payload;
    }
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
