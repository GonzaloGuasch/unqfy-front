<template>
    <div class="container">
        <div v-if="type === 'artist'">
            ARTISTAS
        </div>
        <div v-else>
            ALBUMES
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        name: "search-results",
        components: {
        },
        data() {
            return {
                type: '',
                query: '',
            };
        },
        async beforeCreate() {

        },
        created() {
            this.type = this.$route.query.type as string
            this.query = this.$route.query.query as string
        }
    });
</script>

<style lang="scss">
    .container {
        background: black;
        height: 100%;
        width: 100%;
    }
</style>
