<template>
  <header>
    <div>LOGO!</div>

    <nav>
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/todos">Тудус</RouterLink>
      <RouterLink to="/cars">Каталог авто</RouterLink>
      <RouterLink to="/cart">Корзина</RouterLink>
    </nav>
  </header>

  <main><RouterView /></main>

  <footer></footer>
</template>

<script setup lang="ts">
import { provide, reactive } from 'vue'
import type { CarInCart } from './types'

const cart = reactive<CarInCart[]>([])

provide('cart', cart)
</script>
