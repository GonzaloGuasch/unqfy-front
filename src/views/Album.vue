<template>
  <div v-if="album" class="album-details-container">
    <title-with-options :text="album.name" @edit="onEdit" @delete="onDelete"/>
    <div class="year">
      Released in {{album.year}}
    </div>
    <div class="tracks">
      <track-card v-for="track in album.tracks" :key="`${track.name} - ${track.duration}`" :track="track"/>
    </div>
    <modal name="delete-album">
      <div class="content-container">
        <div class="confirmation">Are you sure you want to delete this Album?</div>
        <button class="cancel" @click="$modal.hide('delete-album')">Cancel</button>
        <button class="confirm" @click="deleteAlbum">Confirm</button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import TrackCard from '../commons/TrackCard.vue';
  import TitleWithOptions from '../commons/TitleWithOptions.vue';
  import {ROUTES} from '@/router';
  import {sleep} from '@/utils';

  export default Vue.extend({
    name: 'album',
    components: {
      TrackCard,
      TitleWithOptions,
    },
    data() {
      return {
        album: null,
        albumId: '',
        ROUTES,
      }
    },
    methods: {
      onEdit() {

      },
      onDelete() {
        this.$modal.show('delete-album')
      },
      async editAlbum() {

      },
      async deleteAlbum() {
        this.$emit('loading', true)
        await axios.delete('http://localhost:3030/api/albums/' + this.albumId)
        await sleep(1000);
        this.$emit('loading', false)
        this.$modal.hide('delete-album')
        this.$router.back()
      }
    },
    async beforeMount() {
      this.albumId = this.$route.params.id;
      const albumResult = await axios.get(`http://localhost:3030/api/albums/${this.albumId}`)
      this.album = albumResult.data
    },
  })
</script>

<style lang="scss" scoped>
.album-details-container {
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.name {
  font-size: 128px;
  color: white;
}
.year {
  font-size: 36px;
  color: white;
}
.tracks {
  width: 1024px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  overflow-y: scroll;
  margin-bottom: 20px;
}
.content-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .confirmation {
    font-size: 24px;
    font-weight: 900;
    width: 100%;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 90px;
  }

  .cancel {
    border: 0;
    height: 40px;
    width: 128px;
    background: ghostwhite;
    border-radius: 5px;
    font-weight: 900;
    cursor: pointer;
  }

  .cancel:hover {
    background: grey;
  }

  .confirm {
    border: 0;
    height: 40px;
    width: 128px;
    background: #1ed760;
    border-radius: 5px;
    font-weight: 900;
    cursor: pointer;
    margin-left: 10px;
  }

  .confirm:hover {
    background: #1A8A46;
  }
}
</style>
