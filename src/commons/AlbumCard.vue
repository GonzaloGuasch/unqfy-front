<template>
  <div class="album-container">
    <div class="title">
      {{album.name}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'album-card',
      props: {
        album: {
          type: Object,
        }
      },
  });
</script>

<style scoped>
.album-container {
  background: #1ed760;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
