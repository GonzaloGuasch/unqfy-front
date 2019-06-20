<template>
  <modal name="edition-modal" :resizable="true" :adaptive="true" height="auto">
    <div class="edition-container">
      <div class="title">
        Edit {{subject.identity}}
      </div>

      <form v-if="subject.identity === 'Artist'">
        <div>
          <input v-model="newSubject.data.name" type="text" placeholder="Name">
        </div>
        <div>
          <input v-model="newSubject.data.country" type="text" placeholder="Country">
        </div>
      </form>
      <form v-else-if="subject.identity === 'Album'">
        <div>
          <input v-model="newSubject.data.year" type="number" placeholder="Year">
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
  import {sleep} from '@/utils';

  export default Vue.extend({
    name: "edition-modal",
    components: {
      dropdown
    },
    props: [
      'subject'
    ],
    data() {
      return {
        newSubject: null,
      }
    },
    methods: {
      async onSubmit() {
        this.$parent.$emit('loading', true)
        if (this.subject.identity === 'Artist') {
          await axios.put('http://localhost:3030/api/artists/' + this.subject.id, (this.newSubject as any).data)
        } else {
          await axios.patch('http://localhost:3030/api/albums/' + this.subject.id, (this.newSubject as any).data)
        }
        await sleep(1000)
        this.$parent.$emit('loading', false)
        this.$modal.hide('edition-modal')
        this.$router.go(0)
      },
    },
    created() {
      this.newSubject = JSON.parse(JSON.stringify(this.subject))
    }
  })
</script>

<style lang="scss" scoped>
  .edition-container {
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
      cursor: pointer;
    }
  }
</style>
