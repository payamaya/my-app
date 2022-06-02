//imports data from outside component
import swal from 'sweetalert'
import { createStore } from 'vuex'

function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  state: {
    //empty array for cart
    cart: [],
  },

  getters: {
    //pass true state, pass through product
    productQuantity: (state) => (product) => {
      //Goes through cart and finds item, if it matches goes through item
      const item = state.cart.find((i) => i.id === product.id)

      // if there is an item return item.quantity else return null
      if (item) return item.quantity
      else return null
    },

    cartItems: (state) => {
      return state.cart
    },

    cartTotal: (state) => {
      //calculates cart with quantity * price
      return state.cart.reduce((a, b) => a + b.price, 0)
    },
    sakTest: (state) => {
      return state.cart.reduce((a, b) => a - b.quantity, 0)
    },
  },

  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id)
      // this checks so the item can only be pushed one time in the cart
      if (item) {
        swal('This service can only be booked once', 'try again', 'error')
      } else {
        //adds another item to the cart, searches for all product
        state.cart.push({ ...product, quantity: 1 })
      }
      //if there is item in cart saves the cart
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id)

      if (item) {
        //removes 1 item at the time from cart
        if (item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id)
        }
      }

      updateLocalStorage(state.cart)
    },
    //Updates cart result
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },
  },
  actions: {},
  modules: {},
})
