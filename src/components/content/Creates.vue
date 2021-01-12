<template>
  <div class="portContainer">
    <div class="portContent">
      <div class="port">
        <div class="body">
          <h2>_seed20</h2>
          <h2>_intergalactic_soul</h2>
          <h2>_jordan_brand</h2>
          <h2>_project_lhaxx</h2>
        </div>
      </div>
      <div class="spacer"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .portContainer {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    overflow: scroll;
    width: 100%;
  }

  .portContent {
    display: flex;
    border: 1px dashed #000;
    flex-direction: row;
    margin: 100px 75px 0 0;
    width: 50%;
  }

  .port {
    display: flex;
    flex-direction: column;
    overflow: scroll;
    text-align: right;
    width: 90%;

    .title {
      border-bottom: 1px dashed #000;
      // font-family: 'Courier New', Courier, monospace;
    }

    .body,
    .name {
      margin-left: 25px;
      margin-right: 25px;
    }

    .name {
      margin-bottom: 10px;
      margin-top: 10px;
    }
  }

  .spacer {
    background-image: url('../../assets/images/space_halftones.png');
    border-left: 1px dashed #000;
    height: 100%;
    width: 10%;
  }
</style>
