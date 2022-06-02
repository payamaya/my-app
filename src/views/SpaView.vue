<template>
  <h1>Spa Calypso</h1>

  <img class="pool" src="@/assets/pool.webp" />
  <h3>
    Välkommen till resort Calypsos spa avdelning. <br />
    Här kan du välja mellan olika lyxiga spa upplevelser, som passar alla.<br />
    <br />
    Vi har även en gemensam innomhus pool, jacuzzi och bastu som alla gäster får
    <br />
    utnyttja mellan 10.00 fram till 22.00. Utomhus poolen är öppen till 24.00.
    <br />
    här kan du, förutom att bada, njuta och slappan av vid våra solbäddar <br />
    och njuta av det vackar vädret.<br />
    <br />
    Samtliga utrymmen har stolar, bord och även bekväma solstolar.<br />
    Det går även att beställa drinkar och enklare apertifer i våran utomhusbar.
  </h3>

  <div class="home">
    <ProductDescriptionDraw
      :product="product"
      :active="active.product_draw"
      v-on:close-product-draw="closeProductDraw()"
    />

    <h1>Utomhus jacuzzi</h1>
    <img class="bild" src="@/assets/jacuzzi1.jpg" />
    <h4>
      Vår lyxiga utomhus jacuzzi går att boka utvalda timmar under dygnet.<br />
      Priset är 50 euro/h och avser 4 personer, därefter tillkommer 15
      euro/person.<br />
      Alkoholfritt bubbel och frukt för 4 personer ingår i priset. <br />
      <br />
      Vår aroma massage går att boka mellan 10.00-17.00.<br />
      I varje bokning så ingår det 50 min massage i en lugn, avslappnande miljö
      och privat miljö.
    </h4>

    <div class="product-cards-container">
      <RoomCard
        id="RoomCard"
        v-for="product in items.slice(31, 36)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

    <hr />
    <br />

    <h1>Aroma massage</h1>
    <img class="bild" src="@/assets/spa2.webp" />
    <h4>
      Här kan du boka en avslappnande massage med <br />
      ljuv musik hos en av våra massörer.<br />
      Vårt massage utrymme är för en person.<br />
      Priset är 45 euro för 50 min.
    </h4>

    <div class="product-cards-container">
      <RoomCard
        v-for="product in items.slice(36, 41)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

    <hr />
    <br />

    <h1>Deluxe behandling</h1>
    <img class="bild" src="@/assets/luxuryspa.jpg" />
    <h4>
      I vår deluxe behandling ingår kropps massage och <br />
      ansiktsbehandling som avslutas med bad i egen privat jacuzzi<br />
      där vi bjuder på alkholofritt bubbel och frukt.<br />
      Det går att boka max två personer åt gången för denna behandling.<br />
      <br />
      Priset är 90 euro per person för 120 min<br />
      ( 1h massage och ansiktsbehandling samt 1 h jacuzzi).
    </h4>

    <div class="product-cards-container">
      <RoomCard
        v-for="product in items.slice(41, 46)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

    <hr />
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import RoomCard from '../components/products/RoomCard.vue'
import ProductDescriptionDraw from '../components/products/ProductDescriptionDraw.vue'

export default {
  name: 'SpaView',
  components: {
    RoomCard,
    ProductDescriptionDraw,
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

<style lang="scss">
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.pool {
  height: 40rem;
  width: 60rem;
}

.bild {
  width: 50rem;
  height: 30rem;
}
</style>
