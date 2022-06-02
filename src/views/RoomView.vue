<template>
  <div class="home">
    <ProductDescriptionDraw
      :product="product"
      :active="active.product_draw"
      v-on:close-product-draw="closeProductDraw()"
    />

    <h1>Single Room</h1>
    <img class="bild" src="@/assets/singellyx.webp" />
    <h4>
      Våra singelrum finns i varianterna basic eller lyx.<br />
      I samtliga rum så ingår frukostbufé i priset.<br />
      Rena handdukar och lakan bytes dagligen.
    </h4>

    <div class="product-cards-container">
      <RoomCard
        v-for="product in items.slice(0, 10)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
    <hr />
    <br />

    <h1>Double Rooom</h1>
    <img class="bild" src="@/assets/doublellyx.webp" />
    <h4>
      Våra dubbelrum finns i varianterna basic eller lyx. <br />
      Både har en rymlig balkong med vacker utsikt.<br />
      I samtliga rum så ingår frukostbufé i priset. <br />
      Rena handdukar och lakan bytes dagligen.
    </h4>

    <div class="product-cards-container">
      <RoomCard
        v-for="product in items.slice(11, 21)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>
    <hr />
    <br />

    <h1>Family Room</h1>
    <img class="bild" src="@/assets/famillyx.jpg" />
    <h4>
      Våra familjerum finns i två varianter, basic eller lyx.<br />
      Både har en rymlig balkong med vacker utsikt mot havet.<br />
      I samltiga rum så ingår frukostbufé i priset.<br />
      Rena handdukar och lakan bytes dagligen.
    </h4>

    <div class="product-cards-container">
      <RoomCard
        v-for="product in items.slice(21, 31)"
        :key="product.id"
        :product="product"
        v-on:view-product="viewProduct($event)"
      />
    </div>

    <br />
    <hr />
  </div>
</template>

<script>
// @ is an alias to /src
import items from '../data/items.js'
import RoomCard from '../components/products/RoomCard.vue'
import ProductDescriptionDraw from '../components/products/ProductDescriptionDraw.vue'

export default {
  name: 'RoomView',
  components: {
    RoomCard,
    ProductDescriptionDraw,
  },

  data() {
    return {
      isHidden: true,
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
.home {
  width: 80%;
  margin: auto;
}
.product-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.bild {
  width: 30rem;
  height: 20rem;
}
</style>
