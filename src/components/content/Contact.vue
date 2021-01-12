<template>
  <div id="contactContainer">
    <div class="section-title">
      <div class="title">
        <h3>contact</h3>
      </div>
      <div class="horizontal-spacer" />
      <div class="section-close">
        <img class="close-icon" src='../../assets/images/close.svg' />
      </div>
    </div>
    <div id="contactRow">
      <div class="email">Email</div>
      <div class="instagram">Instagram</div>
      <div class="linkedIn">LinkedIn</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #contactContainer {
    background-color: #fff;
    bottom: 0;
    display: flex;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    border-top: 1px solid #000;
    flex-direction: column;
    height: 25%;
    position: relative;
    width: 100%;
  }

  .section-title {
    align-items: flex-start;
    border-bottom: 1px dashed #000;
    display: flex;
    height: fit-content;

    .title {
      padding: 0 20px;
      width: fit-content;
    }

    h3 {
      font-weight: 300;
    }

    .section-close {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      padding: 0 20px;
      width: fit-content;

      .close-icon {
        height: auto;
        transform: rotate(0);
        transition: transform 0.2s ease-in-out;
        width: 25px;

        &:hover {
          transform: rotate(25deg);
        }
      }
    }
  }

  .horizontal-spacer {
    display: flex;
    background-image: url('../../assets/images/space_halftones.png');
    // border-bottom: 1px dashed #000;
    border-left: 1px dashed #000;
    border-right: 1px dashed #000;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }

  #contactRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
</style>
