<template>
  <div id="vitaeContainer">
    <div id="vitaeContent">
      <div class="vitae">
        <div class="title">
          <h2 class="name">id_title: Jason Woodberry</h2>
        </div>
        <div class="body">
          <p>b. XX83</p>
          <p>geographical_origin: Norfolk, VA</p>
          <p>lat/long: 36.8508 N, 76.2859 W</p>
          <p>Jason Woodberry, multimedia artist, engages contemporary civil
            and political discourse by
            launching a cadre of young black astronauts into a 60s and 70s
            Futurist influenced galaxy.
            Graphic, illustrative, 3D, and abstract, Woodberry’s drawings,
            interstellar hieroglyphics, iconical
            fleet of miniature spaceships, and works that bop into the
            performative embody a narrative
            celebrating the persevering reality known as Black America.
            Hip hop and American pop culture
            tether the viewer to a glimmering ground zero in a universe
            where Woodberry and his young
            astronauts bend time, explore space, and create the future.
          </p>
          <p><b>_comms_relay: jasonwoodberry@gmail.com</b></p>
          <br />
          <div class="title">
            <h3 class="name">_exhibitions</h3>
          </div>
          <div class="sub-title">
            <h4>_2020</h4>
          </div>
          <p>Skin In the Game - Oakis Verdes Art Center - Palos Verdes, CA</p>
          <p>Intergalactic Soul - The Ackland Museum - Chapel Hill, NC</p>
          <p>Intergalactic Soul - Upperman Center - Wilmington, NC</p>
          <p>Jordan Brand NBA All-Star Hyper Tee Design
            - Spectrum Center - Charlotte, NC</p>
          <div class="sub-title">
            <h4>_2019</h4>
          </div>
          <p>Art of Fashion - Neiman Marcus - Charlotte, NC</p>
          <p>Jordan Brand NBA All-Star Hyper Tee Design
            - Spectrum Center - Charlotte</p>
          <div class="sub-title">
            <h4>_2018</h4>
          </div>
          <p>Intergalactic Soul - UNCW Gallery - Wilmington, NC</p>
          <div class="sub-title">
            <h4>_2017</h4>
          </div>
          <p>Art on the Move - Locust Projects - Miami, Fl</p>
          <p>The World is a Mirror to my Freedom - Mccoll Center - Charlotte NC</p>
          <div class="sub-title">
            <h4>_2016</h4>
          </div>
          <p>Intergalactic Soul - PCC Cascade Campus - Portland OR</p>
          <div class="sub-title">
            <h4>_2015</h4>
          </div>
          <p>Art of Activism - Harvey B. Gantt Center - Charlotte NC</p>
          <div class="sub-title">
            <h4>_2014</h4>
          </div>
          <p>Cosmic Connections (Art Basel) - Contemporary Art Projects - Miami FL</p>
          <br />
          <div class="title">
            <h3 class="name">_awards_&_recognitions</h3>
          </div>
          <p>Knight Foundation Grant Recipient</p>
          <p>McColl Center Art + Innovation Artist Affiliate Residency</p>
          <p>Sundance Fellows New Frontiers Nominee</p>
          <p>ArtPop Street Gallery Winner</p>
          <br />
          <div class="title">
            <h3 class="name">_press</h3>
          </div>
          <p>Camo and Black Culture Mix - Charlotte Post</p>
          <p>An Interview with Marcus Kiser and Jason Woodberry
            - Google Arts & Culture
          </p>
          <p>Ackland's Intergalactic & Afrofuturistic Exhibit:
            Project LHAXX - The Daily Tar Heel
          </p>
          <p>Arts & Activism - WFAE Charlotte Talks NPR</p>
          <p>Raising Social Awareness through Art & Science Fiction
             - Afropunk NYC
          </p>
          <p>Art for the Cosmos - Free Times Columbia</p>
          <br />
        </div>
      </div>
      <div class="spacer"/>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  #vitaeContainer {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    overflow: scroll;
    width: 100%;
  }

  #vitaeContent {
    display: flex;
    border: 1px dashed #000;
    flex-direction: row;
    margin: 100px 75px 0 0;
    width: 50%;

    .body {
      background: rgb(255,255,255);
      background: linear-gradient(90deg, rgba(255,255,255,0) 0%,
      rgba(255,255,255,0.9) 10%, rgba(255,255,255,1) 50%,
      rgba(255,255,255,0.9) 90%, rgba(255,255,255,0) 100%);
    }
  }

  .vitae {
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
