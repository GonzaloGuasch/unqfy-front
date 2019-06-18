<template>
  <div class="track-container">
    <div class="title">
      {{track.name}}
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'track-card',
      props: {
        track: {
          type: Object,
        }
      },
  });
</script>

<style scoped>
.track-container {
  background: #1ed760;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
