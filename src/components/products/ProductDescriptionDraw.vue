<template>
  <div
    class="draw-background"
    :class="{ show: active }"
    @click="$emit('close-product-draw')"
  ></div>

  <div class="draw" :class="{ show: active }">
    <div class="draw-close" @click="$emit('close-product-draw')">X</div>

    <div v-if="product" class="product-details">
      <h3 class="text-center">{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <img :src="` ${product.img}`" />
      <h3 class="text-center">{{ product.price.toFixed(2) }} Euro</h3>

      <div class="cart-total" v-if="product_total">
        <h3>Du har valt {{ product.name }}</h3>
        <h3>Tack för din bokning</h3>
      </div>
      <div class="button-container">
        <button class="add" @click="addToCart()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  props: ['product', 'active'],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    },
  },
}
</script>

<style lang="scss">
.draw-background {
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(124, 124, 124, 0.55);
  z-index: 100;
  display: none;
  transition: display 0.5s;

  &.show {
    display: block;
  }
}

.draw {
  width: 95vw;
  height: 100vh;
  background-color: aliceblue;
  position: fixed;
  top: 0;
  left: -105vw;
  padding: 15px;
  transition: left 0.5s;
  z-index: 101;
  overflow-y: scroll;

  &.show {
    left: 0;
  }
}

.draw-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid gray;
  color: gray;
  width: 15px;
  float: right;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;

  p.description {
    padding: 20px;
    line-height: 1.5rem;
  }

  .button-container {
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 50px 5px;
    cursor: pointer;
  }
}
.add {
  background-color: rgb(50, 44, 242);
  display: inline-block;
  cursor: pointer;
  color: #f8fafb;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 7px 15px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
}

@media (min-width: 500px) {
  .draw {
    width: 450px;
  }
}
</style>
