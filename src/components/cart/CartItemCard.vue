<template>
  <div class="cart-item-card">
    <div class="header">
      <h3>{{ product.name }}</h3>
      <h4>{{ product.tid }}</h4>

      <!--   <h4>In Cart: {{ product.quantity }} </h4> -->
      <h4>Total cost: {{ item_cost.toFixed(2) }} Euro</h4>
    </div>

    <div class="button-container">
      <button class="remove" @click="removeFromCart()">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  methods: {
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product)
    },
  },

  computed: {
    description() {
      return this.product.description.substring(0, 120)
    },

    item_cost() {
      return this.product.price * this.product.quantity
    },
  },
}
</script>

<style lang="scss">
.cart-item-card {
  width: 80%;
  margin: auto;
  margin-top: 4rem;
  background-color: white;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;
  padding: 10px;
  text-align: left;

  .button-container {
    display: flex;
    justify-content: center;
  }

  .remove {
    height: 2rem;
    width: 5rem;
    font-size: 0.8rem;
    margin: 10px 10px;
    top: 50%;
    border: none;
    background-color: rgb(0, 0, 0);
    color: antiquewhite;
    border-radius: 3px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }

  h4 {
    display: flex;
  }
}

.remove:hover {
  color: black;
  background-color: aqua;
}
</style>
