<template>
  <div id="canvasContainer">
    <canvas></canvas>
  </div>
</template>

<script>

import Waves from '../canvas';

export default {
  mounted() {
    this.$nextTick(() => Waves.generate());
  },
};

</script>

<style lang="scss" scoped>
  #canvasContainer {
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -15;
  }
</style>
