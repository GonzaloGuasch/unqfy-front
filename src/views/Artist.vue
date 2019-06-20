<template>
  <div v-if="artist" class="artist-details-container">
    <div class="name">
      {{artist.name}}
    </div>
    <div class="country">
      From {{possibleArticle}}{{artist.country}}
    </div>
    <div class="albums">
      <album-card v-for="album in artist.albums" :key="album.name" :album="album"/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import AlbumCard from '../commons/AlbumCard.vue'

  export default Vue.extend({
    name: 'artist',
    components: {
      AlbumCard,
    },
    data() {
      return {
        artist: null,
      }
    },
    computed: {
      possibleArticle(): string {
        return (this.artist as any).country === 'United States' || (this.artist as any).country === 'USA' ? 'the ' : ''
      }
    },
    async beforeMount() {
      const id = this.$route.params.id;
      const artistResult = await axios.get(`http://localhost:3030/api/artists/${id}`)
      this.artist = artistResult.data
    },
  })
</script>

<style scoped>
.artist-details-container {
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
.country {
  font-size: 36px;
  color: white;
}
.albums {
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
