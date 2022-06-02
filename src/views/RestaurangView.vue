<template>
  <div class="headlinefood">
    <h1>Restaurang Calypso</h1>

    <p>
      Välkommen till restuarang Calypso där du kan njuta av förstaklassig mat
      med vacker utsikt mot vattnet. Vår restaurang fokuserar på att leverera
      färsk, god mat som är lokalpruducerat ifrån området.
    </p>
    <p>
      Varje dag får vi färska produkter, så som fisk, kött, grönsaker och frukt.
    </p>
    <p>Allt för att ni gäster ska få en smak upplevelse som Ni inte glömmer.</p>
  </div>

  <hr />

  <div class="home">
    <RestaurangDescription
      :product="product"
      :active="active.product_draw"
      v-on:close-product-draw="closeProductDraw()"
    />

    <h2>Boka bord</h2>
    <img class="bild" src="@/assets/restaurang.jpg" />
    <h4>
      Här kan ni boka bord i vår restaurang.<br />
      Restaurangen har öppet mellan 18.00-24.00.<br />
      Köket stänger 22.00<br />
      Det går att välja mellan 2-4 sittpatser.<br />
      Vid större sällskap kontakta personal.
    </h4>

    <div class="product-cards-container">
      <RestaurangCard
        v-for="product in items.slice(46, 59)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
    <hr />
    <br />
  </div>
  <div class="hoger">
    <RestaurangMeny />
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import RestaurangCard from '../components/Restaurang/RestaurangCard.vue'
import RestaurangDescription from '../components/Restaurang/RestaurangDescription.vue'
import RestaurangMeny from '../components/Restaurang/RestaurangMeny.vue'

export default {
  name: 'RestaurangView',
  components: {
    RestaurangCard,
    RestaurangDescription,
    RestaurangMeny,
  },

  data() {
    return {
      items: items,
      product: null,
      active: {
        product_draw: false,
      },
    }
  },
  methods: {
    viewProduct(product) {
      this.product = product
      this.active.product_draw = true
      console.log(this.product)
    },

    closeProductDraw() {
      this.active.product_draw = false
    },
  },
}
</script>

<style>
.headlinefood {
  width: 49%;
  margin: auto;
  align-content: center;
}
.hoger {
  height: 18rem;
  width: 18rem;
  position: relative;
  left: 5%;
  border: 1px solid black;
  padding: 10px;
}
</style>
