<template>
  <div v-if="artist" class="artist-details-container">
    <title-with-options :text="artist.name" @edit="onEdit" @delete="onDelete"/>
    <div class="country">
      From {{possibleArticle}}{{artist.country}}
    </div>
    <div class="albums">
      <album-card v-for="album in artist.albums" :key="album.name" :album="album"/>
    </div>
    <modal name="delete-artist">
      <div class="content-container">
        <div class="confirmation">Are you sure you want to delete this Artist?</div>
        <button class="cancel" @click="$modal.hide('delete-artist')">Cancel</button>
        <button class="confirm" @click="deleteArtist">Confirm</button>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import axios from 'axios';
  import AlbumCard from '../commons/AlbumCard.vue'
  import TitleWithOptions from '../commons/TitleWithOptions.vue';
  import {sleep} from '@/utils';
  import {ROUTES} from '@/router';

  export default Vue.extend({
    name: 'artist',
    components: {
      AlbumCard,
      TitleWithOptions,
    },
    data() {
      return {
        artist: null,
        artistId: '',
        ROUTES,
      }
    },
    computed: {
      possibleArticle(): string {
        return (this.artist as any).country === 'United States' || (this.artist as any).country === 'USA' ? 'the ' : ''
      }
    },
    methods: {
      onEdit() {

      },
      onDelete() {
        this.$modal.show('delete-artist')
      },
      async editArtist() {

      },
      async deleteArtist() {
        this.$emit('loading', true)
        await axios.delete('http://localhost:3030/api/artists/' + this.artistId)
        await sleep(1000);
        this.$emit('loading', false)
        this.$modal.hide('delete-artist')
        this.$router.push({name: ROUTES.HOME})
      }
    },
    async beforeMount() {
      this.artistId = this.$route.params.id;
      const artistResult = await axios.get(`http://localhost:3030/api/artists/${this.artistId}`)
      this.artist = artistResult.data
    },
  })
</script>

<style lang="scss" scoped>
.artist-details-container {
  background: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.country {
  font-size: 36px;
  color: white;
}
.albums {
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
