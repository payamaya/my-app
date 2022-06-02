<template>
  <div class="aboutResort">
    <h1>Om oss</h1>

    <h4>
      Med vacker arkitektur och stil så erbjuder vi på resort Calypso en första
      klassig vistelse.<br />
      Resorten ligger i närheten av stranden samt nära till många upplevelser
      som ön har att erbjuda.<br />
      Med endast 20 km ifrån flygplatsen är resort Calypso är resorten lått att
      hitta till. <br />
      Resorten ligger endast 7 km ifrån en av de större städerna på ön samt nära
      till flertal byar<br />
      för er som önskar en pittoreskt känsla.<br />
      <br />
      Resort Calypso består av hela 3 våningar och ligger hela på 30 hektar
      mark.<br />
      Tack vare vår stora yta så har vi allt man kan önska sig på en och samma
      plats. <br />
      Här hittar ni en vacker trädgård där ni kan njuta av en måltid, två stora
      pooler samt en barn pool för de små. <br />
      Endast 10 min gågnväg ifrån resorten hittar ni en vacker strand med en del
      reseverad för våra gäster. <br />
      <br />

      På resorten hittar ni allt ifrån en vacker gemensam takterass,en
      förstaklassig restaurang, <br />
      till en behaglig spa avdelnign med gym. <br />
      Ni kan såklart boka flera olika behandlingra hos oss, vi har något som
      passar alla. <br />
      <br />

      Här på ön så finns det flera aktiviteter och turer som vi hjälper att
      guida er till. <br />
      Allt ifrån historiska platser, stränder, vanding, byar till städer med
      shopping och uteliv.
    </h4>
  </div>
  <hr />

  <div class="imgAbout">
    <h3>Takterassen med vacker utiskt</h3>
    <img class="bild" src="@/assets/takterass.jpg" />

    <h3>Lunch under olivträdet</h3>
    <img class="bild" src="@/assets/olivträd.jpg" />
    <h3>Solnedgång</h3>
    <img class="bild" src="@/assets/finstrand.webp" />
    <h3>Vackra byn Assos</h3>
    <img class="bild" src="@/assets/bystrand.jpg" />
    <h3>Byn Spartia</h3>
    <img class="bild" src="@/assets/bybild3.jpeg" />
    <br />
  </div>

  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="80%"
        height="100%px"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=greece%20kefalonia&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <a href="https://123movies-to.org"></a>
      <br />
    </div>
  </div>

  <div class="content"></div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {},
}
</script>
<style lang="scss">
.carousel-inner {
  margin-top: 5rem;
}

.mapouter {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  height: 500px;
}
.gmap_canvas {
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 1500px;
}
</style>
