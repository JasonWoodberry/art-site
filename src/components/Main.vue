<template>
  <div id="mainContainer">
    <div id="myLogo">
      <img src="../assets/images/myLogo.svg" />
    </div>
    <div id="fadeContainer" />
    <Content />
    <Sine />
  </div>
</template>

<script>

import Content from './Content.vue';
import Sine from './Sine.vue';

export default {

  components: {
    Content,
    Sine,
  },
};
</script>

<style lang="scss" scoped>
  #mainContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }

    #myLogo {
    height: auto;
    margin: 25px 30px 0 0;
    position: absolute;
    right: 0;
    width: 110px;
    z-index: 5;
  }

  #fadeContainer {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
    height: 100%;
    position: absolute;
    width: 0.1%;
    z-index: 12;
  }
</style>
