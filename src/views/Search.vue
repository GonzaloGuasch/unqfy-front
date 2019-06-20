<template>
  <div class="container">
    <div class="tabs">
      <div class="tab" :class="selectedTab === 'artists' ? 'selected' : ''" @click="selectTab('artists')">Artists</div>
      <div class="tab" :class="selectedTab === 'albums' ? 'selected' : ''" @click="selectTab('albums')">Albums</div>
    </div>
    <div v-if="selectedTab === 'artists' && artists" class="results-container">
      <artist-card v-for="artist in artists" :key="artist.name" :artist="artist"/>
    </div>
    <div v-if="selectedTab === 'albums' && albums" class="results-container">
      <album-card v-for="album in albums" :key="album.name" :album="album"/>
    </div>
  </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import axios from 'axios';
    import ArtistCard from '../commons/ArtistCard.vue';
    import AlbumCard from '../commons/AlbumCard.vue';

    export default Vue.extend({
        name: "search",
        components: {
            ArtistCard,
            AlbumCard,
        },
        data() {
            return {
                artists: [],
                albums: [],
                selectedTab: ''
            };
        },
        methods: {
          selectTab(tabName: string) {
            this.selectedTab = tabName
          }
        },
        async beforeMount() {
          const category = this.$route.params.category;
          const query = this.$route.params.query;
          let promises = []
          promises.push(axios.get(`http://localhost:3030/api/artists?name=${query}`));
          promises.push(axios.get(`http://localhost:3030/api/albums?name=${query}`));
          promises = await Promise.all(promises)
          this.selectedTab = category
          this.artists = promises[0].data
          this.albums = promises[1].data
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
      overflow-y: scroll;
      margin-bottom: 20px;
    }
  }

  .tabs {
    display: flex;
  }

  .tab {
    background: #1ed760;
    cursor: pointer;
    height: 30px;
    width: 200px;
    border-radius: 3px;
  }

  .tab:hover, .selected {
    background: white;
  }
</style>
