<template>
  <div v-if="album" class="album-details-container">
    <div class="name">
      {{album.name}}
    </div>
    <div class="year">
      Released in {{album.year}}
    </div>
    <div class="tracks">
      <track-card v-for="track in album.tracks" :key="`${track.name} - ${track.duration}`" :track="track"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import TrackCard from '../commons/TrackCard.vue';

  export default Vue.extend({
    name: 'album',
    components: {
      TrackCard,
    },
    data() {
      return {
        album: null,
      }
    },
    computed: {
    },
    async beforeMount() {
      const id = this.$route.params.id;
      const albumResult = await axios.get(`http://localhost:3030/api/albums/${id}`)
      this.album = albumResult.data
    },
  })
</script>

<style scoped>
.album-details-container {
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  font-size: 128px;
  color: white;
}
.year {
  font-size: 36px;
  color: white;
}
.tracks {
  width: 1024px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
</style>
