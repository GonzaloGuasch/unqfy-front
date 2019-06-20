<template>
  <modal name="creation-modal" :resizable="true" :adaptive="true" height="auto">
    <div class="creation-container">
      <div class="title">
        Add a new
        <dropdown :options="options"
                  :selected="selectedOption"
                  @updateOption="updateSelected"
                  :placeholder="''"/>
      </div>

      <form v-if="selectedOption.name === 'Artist'">
        <div>
          <input v-model="artist.name" type="text" placeholder="Name">
        </div>
        <div>
          <input v-model="artist.country" type="text" placeholder="Country">
        </div>
      </form>
      <form v-else-if="selectedOption.name === 'Album'">
        <div>
          <input v-model="album.artistId" type="text" placeholder="Artist ID">
        </div>
        <div>
          <input v-model="album.name" type="text" placeholder="Name">
        </div>
        <div>
          <input v-model="album.year" type="number" placeholder="Year">
        </div>
      </form>
      <div class="button-container">
        <button @click="onSubmit">Submit</button>
      </div>
    </div>
  </modal>
</template>

<script lang="ts">
  import Vue from 'vue';
  import dropdown from 'vue-dropdowns';
  import axios from 'axios';

  const options = [
    {
      name: 'Artist',
      route: 'artists'
    },
    {
      name: 'Album',
      route: 'albums',
    },
  ]

  export default Vue.extend({
    name: "creation-modal",
    components: {
      dropdown
    },
    data() {
      return {
        options,
        selectedOption: options[0],
        artist: {
          name: '',
          country: '',
        },
        album: {
          artistId: '',
          name: '',
          year: null,
        },
      }
    },
    methods: {
      updateSelected(payload: any) {
        this.selectedOption = payload;
      },
      async onSubmit() {
        const payload = this.selectedOption.route === 'artists' ? this.artist : this.album
        const result = await axios.post(`http://localhost:3030/api/${this.selectedOption.route}`, payload)
        console.log(result)
        this.$modal.hide('creation-modal')
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

    form {
      margin-top: 50px;

      input {
        border: 1px solid darkgreen;
        height: 30px;
        margin-bottom: 5px;
        border-radius: 3px;
        padding-left: 5px;
      }
    }
  }
  /deep/ .dropdown-toggle {
    color: #2c3e50;
    font-size: 18px;
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
