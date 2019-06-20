<template>
  <div class="name-and-options">
    <div class="invisible"/>
    <div class="name">
      {{this.text}}
    </div>
    <div class="options">
      <div class="edit-container" @click="$emit('edit')">
        <font-awesome-icon class="icon" icon="pen"/>
      </div>
      <div class="delete-container" @click="$emit('delete')">
        <font-awesome-icon class="icon" icon="times"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'title-with-options',
    props: [
      'text'
    ],
  })
</script>

<style lang="scss" scoped>
  .name-and-options {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .invisible {
      visibility: hidden;
      width: 70px;
    }

    .name {
      font-size: 128px;
      color: white;
    }

    .options {
      display: inline-flex;
      flex-direction: column;
      margin-top: 30px;
      margin-right: 30px;

      .edit-container, .delete-container {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          color: white;
        }
      }

      .edit-container {
        background: darkblue;
        margin-bottom: 5px;
      }

      .edit-container:hover {
        background: blueviolet;
      }

      .delete-container {
        background: darkred;
      }

      .delete-container:hover {
        background: mediumvioletred;
      }
    }
  }
</style>
