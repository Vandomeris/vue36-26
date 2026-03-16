import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import TodoPage from './pages/TodoPage.vue'
import CarsPage from './pages/CarsPage.vue'
import SignleCarPage from './pages/SignleCarPage.vue'
import ExchangePage from './pages/ExchangePage.vue'
import CartPage from './pages/CartPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/todos', component: TodoPage },
  { path: '/cars', component: CarsPage },
  { path: '/cars/:id', component: SignleCarPage },
  { path: '/exchange', component: ExchangePage },
  { path: '/cart', component: CartPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
