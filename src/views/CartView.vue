<template>
  <div>
    <h1>Your Cart</h1>

    <CartItemCard
      id="renderitemTest"
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CartSummaryCard />
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryCard from '../components/cart/CartSummaryCard.vue'

export default {
  components: {
    CartItemCard,
    CartSummaryCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems
    },
  },
}
</script>
