<template>
  <div class="headline">
    <h1>Sightseeing</h1>
    <p>
      Här kan du se några av de många attraktiva områderna som ön har att
      erbjuda.
    </p>
    <p>
      Du hittar allt ifrån vackra stränder med underbar natur, till historiska
      platser med uråldriga sevärdigheter.
    </p>
    <p>
      Du kan välja mellan fler aktiviteter, allt ifrån att ta det lungt och
      sola, till att vandra i naturen och utforska historiska platser. Här finns
      något som passar allas önskemål.
    </p>
    <p>
      Alla platser går att nå med lokal trafik eller taxi. Vi hjälper även till
      att ornda med guidade turer om så önskas. Kom in till oss på receptionen
      så hjälper vi er.
    </p>
  </div>

  <hr />

  <div class="sight-container">
    <div>
      <img class="bildsight" src="@/assets/cave.jpg" />
    </div>

    <div class="textmelissani">
      <h3 class="sighrub">Melissani</h3>
      <p>
        Melissani Cave ligger precis utanför byn Sami och är en av de mest
        populära platserna.
      </p>
      <p>
        Grottan är format som ett B med två kammare/hallar som separeras med en
        ö i mitten. Inuti grottan finns det en sjö med träd och skog.
      </p>
      <p>
        Grottans tak rasade in för decennier vilket gör så att solljus når in
        till grottan. När solen slår det turkos blåa vattnet reflekterar det en
        magisk illusion och hela Melissani grottan fylls med blått ljus.
      </p>
      <p>
        Myten säger att grottan är döpt efter nymfen Melissanthi som begick
        självmord, då hennes kärlek till guden Pan aldrig återgäldades.
      </p>
    </div>
  </div>

  <div class="sight-container">
    <div class="textmelissani">
      <h3 class="sighrub">Koutsoupia Beach</h3>
      <p>Koutsoupia beach är en vacker strand benägen vid kusten.</p>
      <p>
        Stranden ligger nära till vacker natur med låga klippor där man kan
        vandra en lättare vandring för att upptäcka allt intressant runtomkring.
      </p>
      <p>
        Det vackra turkosa vattnet och den fina sanden gör detta till en populär
        strand,
      </p>
      <p>
        Men med lite vandring så kan man hitta avskilda platser där man kan få
        känlsan av att ha en egen privata strand.
      </p>
    </div>
    <div>
      <img class="bildsight" src="@/assets/kefaloniabeach.webp" />
    </div>
  </div>

  <div class="sight-container">
    <div>
      <img class="bildsight" src="@/assets/ainos.jpg" />
    </div>

    <div class="textmelissani">
      <h3 class="sighrub">Ainos national park</h3>
      <p>
        Ainos national park blev ett skyddad område 1962, för att skydda den
        vackra naturen, samt djurlivet som finns upp i berget.
      </p>
      <p>
        Denna nationalpark är ett måste, och här får man bästa inblicken i
        magiska naturen som ön har att erbjuda.
      </p>
      <p>
        Det finns fyra styckern bergstoppar i parken och den högsta mest
        populära är Mount Ainos som är hela 1,628 meter högt.
      </p>
    </div>
  </div>

  <div class="sight-container">
    <div class="textmelissani">
      <h3 class="sighrub">Agia Paraskevi Beach</h3>
      <p>
        Koutsoupia beach är en vacker strand benägen vid kusten längre norr
        upp..
      </p>
      <p>
        Stranden ligger nära till vacker natur och vegetation som växer
        runtomkring stranden.
      </p>
      <p>Vackert turkos/blått vatten med bra utrymme för att njuta av solen.</p>
      <p>
        Här finns det bra med caféer där du kan njuta av en uppfriskade glass i
        värmen..
      </p>
    </div>
    <div>
      <img class="bildsight" src="@/assets/strand.jpg" />
    </div>
  </div>

  <div class="sight-container">
    <div>
      <img class="bildsight" src="@/assets/stgeorge.jpg" />
    </div>

    <div class="textmelissani">
      <h3 class="sighrub">St: George slott</h3>
      <p>
        St: George är byggt på toppen av en kulle Peratat, strax utanför
        Argostoli av Byzantiska kungar.
      </p>
      <p>
        Den byggdes ut av Venetzier som bibehöll den och gjorde staden till
        Kafalonias huvudstad fram till 1757.
      </p>
      <p>Slottet tar upp hela 16 hektar med 600 meter höga väggar.</p>
      <p>Detta turistmål är ett måste för den historieintressarde.</p>
    </div>
  </div>

  <div class="mapsight">
    <iframe
      src="https://www.google.com/maps/d/u/0/embed?mid=1lCiQAn5ER0T1TmFPHM70KCGBeIaPgwA&ehbc=2E312F"
      width="1280"
      height="640"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: 'SightView',
  components: {},
}
</script>

<style>
.sight-container {
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  gap: 1.5rem;
}

.bildsight {
  border-radius: 5px;
  width: 30rem;
  height: 20rem;
}

.mapsight {
  width: 80%;
  margin: auto;
}

.textmelissani {
  text-align: left;
}

.headline {
  width: 50%;
  margin: auto;
  align-content: center;
}

.sighrub {
  margin-bottom: 1rem;
}
</style>
