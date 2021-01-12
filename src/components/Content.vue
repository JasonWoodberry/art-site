<template>
  <div id="contentContainer">
    <transition name="component-fade" mode="out-in">
      <Vitae />
    </transition>
  </div>
</template>

<script>
// import About from './content/About.vue';
// import Contact from './content/Contact.vue';
// import Creates from './content/Creates.vue';
import Vitae from './content/Vitae.vue';

export default {
  components: {
    // About,
    // Contact,
    // Creates,
    Vitae,
  },
  computed: {
    show() {
      return this.$store.state.show;
    },
  },
};
</script>

<style lang="scss" scoped>
  #contentContainer {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
  }

  .center-image {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;

    img {
      height: 400px;
      width: 400px;
    }
  }
</style>
