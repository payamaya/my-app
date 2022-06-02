<template>
  <div id="scroll-container">
    <div id="scroll-text">{{ random }} | {{ random2 }} | {{ random3 }}</div>
  </div>

  <div class="flex-container">
    <div class="fot-container">
      <div>
        <h4 class="info">Resort Calypso</h4>
        <p class="info">Adress: Samalina PC 28095</p>
        <p class="info">Kefalonia Greece</p>

        <p class="info">Tel: +30 2500114510</p>
        <p class="info">Tel: +30 6980025250</p>
        <p class="info email">E-mail: info@calypsoresort.com</p>
      </div>

      <div class="openweather">
        <div class="left">
          <div class="weather" id="openweathermap-widget-8"></div>
        </div>
      </div>
    </div>
    <h5>Bokningar kvar: {{ test }}</h5>
  </div>
  <WeatherView
    api-key="e4dd8d965b3f55b0760474cbdeeb433a"
    units="uk"
    latitude="24.8864"
    longitude="91.8807"
  />
</template>

<script>
import WeatherView from './WeatherView.vue'

export default {
  name: 'FooterView',
  components: {
    WeatherView,
  },
  computed: {
    test() {
      return this.$store.getters.sakTest + 18
    },
    random() {
      return 'Höstmarknad i den lilla byn under den lilla kullen under det lilla berget.'
    },
    random2() {
      return 'Vinprovning klockan 19.00.'
    },
    random3() {
      return ' Djuphavsdykning vid solnedgång imorgon kl 15.00.'
    },
  },
}
</script>

<style lang="scss">
.info {
  display: flex;
  align-content: left;
  margin-left: rem;
  font-size: 11px;
}

#contact {
  font-size: larger;
  font-weight: bold;
}

.left {
  background-color: rgb(83, 138, 164);
  display: flex;
  align-items: center;
  border-radius: 10px;
}

.flex-container {
  background-color: rgb(144, 212, 244);
}

.fot-container {
  display: flex;
  width: 60%;
  bottom: 0;
  margin: auto;
  justify-content: space-between;
}

.openweather {
  padding: 20px;
}
</style>

<style>
#scroll-container {
  height: 2rem;
  border: 3px solid black;
  border-radius: 5px;
  overflow: hidden;
}

#scroll-text {
  /* animation properties */
  -moz-transform: translateX(100%);
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
  font-size: 1.5rem;

  -moz-animation: my-animation 30s linear infinite;
  -webkit-animation: my-animation 30s linear infinite;
  animation: my-animation 30s linear infinite;
}

/* for Firefox */
@-moz-keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
  }
}

/* for Chrome */
@-webkit-keyframes my-animation {
  from {
    -webkit-transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(-100%);
  }
}

@keyframes my-animation {
  from {
    -moz-transform: translateX(100%);
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>
