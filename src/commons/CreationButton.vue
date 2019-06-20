<template>
  <div class="creation-button" @click="openCreationModal">
    <font-awesome-icon class="icon" icon="plus"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
    export default Vue.extend({
      name: "creation-button",
      methods: {
        openCreationModal() {
          this.$modal.show('creation-modal')
        }
      }
    })
</script>

<style lang="scss" scoped>
.creation-button {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-bottom: 30px;
  margin-right: 30px;
  height: 60px;
  width: 60px;
  background: #1ed760;
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
.creation-button:hover {
  background: #1A8A46;
}
</style>
