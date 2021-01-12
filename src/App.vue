<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

body {
  margin: 0;
  overflow: hidden;
}

#app {
  color: #000;
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  text-align: center;
  width: 100vw;
}

.close-icon:hover {
  cursor: crosshair;
}
</style>
