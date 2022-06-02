<template>
  <div class="cart-item-card">
    <h3>Cart Total:{{ cart_total.toFixed(2) }} Euro</h3>

    <form class="add-form">
      <form @click="onSubmit" class="add-form">
        <div class="form-control">
          <label>First name</label>
          <input
            type="text"
            v-model="name"
            name="fname"
            class="fname"
            placeholder="Enter your first & last name"
          />

          <label>Email</label>
          <input
            v-model="email"
            type="text"
            name="email"
            class="email"
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            type="text"
            v-model="message"
            name="message"
            class="email"
            placeholder="Enter your message"
          ></textarea>

          <div class="btn">
            <input type="submit" value="Confirm" class="btn btn-block" />
          </div>
        </div>
      </form>
    </form>
  </div>
  <hr />
</template>

<script>
import swal from 'sweetalert'

export default {
  data() {
    return {
      name: '',
    }
  },

  methods: {
    onSubmit() {
      if ((this.fname, this.email, this.message)) {
        event.preventDefault()
        swal({
          title: 'Tack för din beställning!',
          text: 'Vi kontaktar dig inom 24h.',
          icon: 'success',
        })
      }
    },
  },

  computed: {
    cart_total() {
      return this.$store.getters.cartTotal
    },
  },
}
</script>

<style lang="scss">
.fname {
  display: flex;
  margin-bottom: 2rem;
}

.lname {
  display: flex;
  margin-bottom: 2rem;
}

.email {
  display: flex;
  margin-bottom: 2rem;
}
.message {
  display: flex;
  justify-content: right;
  margin-bottom: 2rem;
}

.btn {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 0.12em;
  border: 0.1em solid #060606;
  font-size: 0.8rem;
  width: 5rem;
  height: 1.8rem;
  border-radius: 3px;
  background-color: rgb(2, 2, 2);
  color: #f7f7fb;
}

.btn:hover {
  color: rgb(0, 0, 0);
  background-color: aqua;
}

.add-form {
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #000000;
}

h3 {
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 3rem;
}
hr {
  margin-top: 5rem;
}
</style>
