<template>
  <div class="homeDiv">
    <h1 class="headHome">Resort Calypso</h1>
    <img class="imgHome" src="@/assets/homebild.jpg" />
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
}
</script>

<style>
.homeDiv {
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.imgHome {
  z-index: -10;
  height: 40rem;
  width: 70rem;
}

.headHome {
  position: absolute;
  z-index: 2;
  margin-top: 100px;
  font-size: 5rem;
  color: antiquewhite;
  text-shadow: 2px 2px rgb(22, 29, 47);
}
</style>
