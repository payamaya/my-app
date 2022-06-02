<!--  TODO: Needs a function that counts the amount of rooms left once one room has been booked -->

<template>
  <div class="card">
    <h4>{{ product.name }}</h4>
    <h5 class="price">Price: {{ product.price.toFixed(2) }} Euro</h5>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View
    </button>
  </div>
</template>

<script>
export default {
  data() {},
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0, 150)
    },
  },
}
</script>

<style lang="scss">
.card {
  width: 80%;
  margin: 10px;
  padding: 10px;
  border: 3px solid rgb(31, 75, 137);
  background-color: white;

  h5.price {
    color: rgb(28, 44, 67);
  }

  p.descriprion {
    font-size: 0.4rem;
  }

  p.text-muted {
    color: gray;
  }
}

button.view-product-button {
  background-color: rgb(50, 44, 242);
  display: inline-block;
  cursor: pointer;
  color: #f8fafb;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 7px 15px;
  text-decoration: none;
  border: none;
}

@media (min-width: 500px) {
  .card {
    width: 180px;
    height: 150px;
    margin: 8px;
  }
}
</style>
