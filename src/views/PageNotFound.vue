<template>
  <div class="container">
    <div class="not-found">
      Page Not Found
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'PageNotFound',
  })
</script>

<style lang="scss" scoped>
.container {
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;

  .not-found {
    font-size: 100px;
    color: white;
    margin: 250px auto auto;
  }
}
</style>
