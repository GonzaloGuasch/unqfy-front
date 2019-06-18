<template>
  <div class="artist-container">
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
  });
</script>

<style scoped>
.artist-container {
  border-radius: 50%;
  background: white;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
