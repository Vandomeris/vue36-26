import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import TodoPage from './pages/TodoPage.vue'
import CarsPage from './pages/CarsPage.vue'
import SignleCarPage from './pages/SignleCarPage.vue'

const routes = [
  { path: '/', component: IndexPage },
  { path: '/todos', component: TodoPage },
  { path: '/cars', component: CarsPage },
  { path: '/cars/:id', component: SignleCarPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
