<template>
  <modal name="spotify-modal" :resizable="true" :adaptive="true" height="auto" width="1000px">
    <div class="creation-container">
      <div class="title">
        Album Population
      </div>
      <div class="description">
        We have a very chet feature that allows you to populate an artist's albums and all of their tracks.
        All you have to do is write the artist's name, press the button and hope for the best.
        We cannot guarantee that the name you write is going to populate the artist you want.
        Also, obviously, the artist needs to exist on this app, so be sure to create it first.
      </div>
      <form>
        <input v-model="name" type="text" placeholder="Artist Name">
      </form>
      <div class="button-container">
        <button @click="onSubmit">Populate</button>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';

  export default Vue.extend({
    name: "spotify-modal",
    data() {
      return {
        name: '',
      }
    },
    methods: {
      async onSubmit() {
        const result = await axios.post('http://localhost:3030/api/spotify', {name: this.name})
        this.$modal.hide('spotify-modal')
      },
    },
  })
</script>

<style lang="scss" scoped>
  .creation-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .title {
      margin-top: 10px;
      font-size: 24px;
      width: 100%;
      text-align: center;
    }

    .description {
      margin-top: 20px;
      padding: 0 50px;
      font-size: 16px;
    }

    form {
      margin-top: 30px;

      input {
        border: 1px solid darkgreen;
        height: 30px;
        margin-bottom: 5px;
        border-radius: 3px;
        padding-left: 5px;
      }
    }
  }

  .button-container {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    display: flex;
    justify-content: center;

    button {
      border: 0;
      height: 40px;
      width: 128px;
      background: #1ed760;
      border-radius: 5px;
      font-weight: 900;
    }
  }
</style>
