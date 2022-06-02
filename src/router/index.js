import { createRouter, createWebHistory } from 'vue-router'
import RoomView from '../views/RoomView.vue'
import CartView from '../views/CartView.vue'
import AboutView from '../views/AboutView.vue'
import SpaView from '../views/SpaView.vue'
import HomeView from '../views/HomeView.vue'
import SightView from '../views/SightView.vue'
import RestaurangView from '../views/RestaurangView.vue'

const routes = [
  { path: '/', name: 'Room', component: RoomView },
  { path: '/Cart', name: 'Cart', component: CartView },
  { path: '/About', name: 'About', component: AboutView },
  { path: '/Spa', name: 'Spa', component: SpaView },
  { path: '/Home', name: 'Home', component: HomeView },
  { path: '/Sight', name: 'Sight', component: SightView },
  { path: '/Rest', name: 'Rest', component: RestaurangView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
