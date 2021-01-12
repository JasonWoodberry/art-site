<template>
  <div id="navContainer">
    <nav>
      <div class="top-nav-container">
        <div
          @click="showComponent('creates')"
          class="nav-btn bottom-border"
        >
          xxx
          </div>
        <div
          @click="showComponent('vitae')"
          class="nav-btn bottom-border"
        >
          vitae
        </div>
         <div
          @click="showComponent('about')"
          class="nav-btn bottom-border"
        >
          xxx
        </div>
      </div>
      <div class="bottom-nav-container">
        <div class="nav-spacer"/>
        <div
          @click="showComponent('contact')"
          class="nav-btn contact-btn"
        >
          xxx
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

// import { mapActions } from 'vuex';

export default {
  // methods: {
  //   ...mapActions([
  //     'renderComponent',
  //   ]),

  //   showComponent(compVal) {
  //     this.renderComponent(compVal);
  //   },
  // },
  // mounted() {
  //   this.renderComponent('vitae');
  // },
};
</script>

<style lang="scss" scoped>
  #navContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 798px) {
      height: 100%;
      overflow: hidden;
      width: 25%;
    }

    .top-nav-container {
      display: flex;
      flex-direction: column;
      height: fit-content;
    }

    .bottom-nav-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: flex-end;
    }

    .nav-spacer {
      background-image: url('../assets/images/space_halftones.png');
      // background-image: url('../assets/images/foil.jpg');
      height: 100%;
    }

    .contact-btn {
      border-top: 1px dashed #000;
      height: fit-content;
    }
  }

  .nav-btn {
    background-color: #fff;
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 300;
    padding: 20px 0;
    transition: background-color 0.3s ease-in-out, color  0.3s ease-in-out;
    width: 100%;

    &:hover {
      background-color: #000;
      color: #fff;
      cursor: crosshair;
    }
  }

  .bottom-border {
    border-bottom: 1px dashed #000;
  }
</style>
