<!-- This is a group school project, of a resort website 

Todo: Counter that counts down the amount of rooms that are left-->

<template>
  <h1 id="count"></h1>

  <MouseTracker v-slot="{ x, y }"> Mouse is at: {{ x }}, {{ y }} </MouseTracker>

  <div class="nav-container">
    <div id="nav">
      <div class="navLeft">
        <img class="ikon" src="@/assets/ikon.png" />
      </div>
      <div class="navRight">
        <router-link :class="{ active: $route.name === 'Home' }" to="/Home"
          >Home</router-link
        >
        <router-link :class="{ active: $route.name === 'About' }" to="/About"
          >About</router-link
        >
        <router-link :class="{ active: $route.name === 'Room' }" to="/"
          >Rooms</router-link
        >
        <router-link :class="{ active: $route.name === 'Spa' }" to="/Spa"
          >Spa</router-link
        >
        <router-link :class="{ active: $route.name === 'Sight' }" to="/Sight"
          >Sightseeing</router-link
        >
        <router-link :class="{ active: $route.name === 'Rest' }" to="/Rest"
          >Restaurang</router-link
        >
        <router-link :class="{ active: $route.name === 'Cart' }" to="/Cart"
          >Cart</router-link
        >
      </div>
    </div>
  </div>
  <router-view />

  <FooterView></FooterView>
</template>

<script>
import FooterView from './components/FooterView.vue'
import MouseTracker from './views/MouseTracker.vue'

export default {
  components: {
    FooterView,
    MouseTracker,
  },

  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body {
  background-color: rgba(144, 212, 244, 0.1);
}

.nav-container {
  width: 100%;
  background-color: rgb(144, 212, 244);
}

#nav {
  display: flex;
  margin: auto;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
  width: 80%;
  height: 60px;
  line-height: 40px;
  margin-top: 4rem;

  a {
    font-weight: bold;
    color: rgb(0, 0, 0);
    text-decoration: none;
    margin: 0 30px 0 30px;
    font-size: 1.5rem;

    &.active {
      color: #ffffff;
      text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    }
  }
}

.text-center {
  text-align: center;
}

.ikon {
  height: 70px;
  width: 60px;
  position: absolute;
  left: 5%;
}
.navLeft {
  color: #ffffff;
  border-radius: 4px;
}
</style>
