<template>
  <div class="spotify-button" @click="openSpotifyModal">
    <img src="../assets/spotify-logo.svg">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
    export default Vue.extend({
      name: "spotify-button",
      methods: {
        openSpotifyModal() {
          this.$modal.show('spotify-modal')
        }
      }
    })
</script>

<style lang="scss" scoped>
.spotify-button {
  position: fixed;
  bottom: 80px;
  right: 0;
  margin-bottom: 30px;
  margin-right: 30px;
  height: 60px;
  width: 60px;
  background: black;
  border-radius: 50%;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .icon {
    font-size: 30px;
  }
}
.spotify-button:hover {
  background: #1A8A46;
}
</style>
