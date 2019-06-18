<template>
  <div class="artist-container" @click="goToDetails">
    <div class="title">
      {{artist.name}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'artist-card',
      props: {
        artist: {
          type: Object,
        }
      },
      methods: {
        goToDetails() {
            this.$router.push({name: 'artist', params: {id: this.artist.id}})
        }
      }
  });
</script>

<style scoped>
.artist-container {
  border-radius: 50%;
  background: #1ed760;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.artist-container:hover {
  background: white;
}
</style>
