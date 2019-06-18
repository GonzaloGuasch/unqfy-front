<template>
  <div id="app">
    <router-view :key="$route.path"/>
  </div>
</template>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
    body {
        margin: 0;
    }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
