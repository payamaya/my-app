<template>
  <div>
    <div>
      <h1>Meny</h1>
      <ul v-for="card in cards" :key="card.title">
        <div>
          <img :src="card.src" class="vignette" /><span
            v-text="card.title"
          ></span>
        </div>
        <div><span v-text="card.description"></span></div>
      </ul>
    </div>
  </div>
</template>
<style>
.vignette {
  max-width: 60px;
  max-height: 60px;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: 'Brownietårta',
          src: 'https://chokladfabriken.se/wp-content/uploads/2020/05/chokladfabriken_brownietarta_10_bitar_1-1200x1000.jpg',
          description: 'Yum',
        },
        {
          title: 'Jordgubbstårta',
          src: 'https://www.recepten.se/bilder/recept/169/main/l/jordgubbstaarta.jpg',
          description: 'Yum',
        },
        {
          title: 'Prinsesstårta',
          src: 'https://cdn-rdb.arla.com/Files/arla-se/1989121250/4645df25-bc27-41c2-9888-1db15adce914.jpg?mode=crop&w=1269&h=715&ak=f525e733&hm=e78d4790',
          description: 'Yum',
        },
      ],
    }
  },
}
</script>
