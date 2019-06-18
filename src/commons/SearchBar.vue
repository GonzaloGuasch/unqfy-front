<template>
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
</template>

<script lang="ts">
  import Vue from 'vue';
  import dropdown from 'vue-dropdowns';
  import {ROUTES} from '../router';

  const options = [
      {
          name: 'Artists',
      },
      {
          name: 'Albums',
      },
  ]

  export default Vue.extend({
    name: 'search-bar',
    components: {
      dropdown,
    },
    data() {
      return {
        options,
        selectedOption: options[0],
        ROUTES,
        query: '',
      }
    },
    computed: {
        categoryRoute(): string {
            return this.selectedOption.name.toLowerCase()
        },
    },
    methods: {
      search() {
        this.$router.push({name: ROUTES.SEARCH, params: {category: this.categoryRoute, query: this.query} })
      },
      updateSelected(payload: any) {
        this.selectedOption = payload;
      }
    },
  })
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-top: 100px;
  height: 40px;
}

.search-button {
  background: #1ed760;
  border: 0;
  height: 29px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
