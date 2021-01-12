<template>
  <div id="indexContainer">
    <Nav
      id="nav"
    />
    <Main
      id="main"
    />
  </div>
</template>

<script>

import Main from './Main.vue';
import Nav from './Nav.vue';

export default {

  components: {
    Main,
    Nav,
  },
};
</script>

<style lang="scss">
  #indexContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  #nav {
    background-color: #fff;
    border-right: 1px dashed #000;
    width: 8%;
  }
  #main {
    width: 92%;
  }
</style>
