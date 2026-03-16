<template>
  <h1>CartPage</h1>

  <div v-for="car in cart" :key="car.id">
    <p>{{ car.marka }} {{ car.model }} - {{ car.year }}</p>
    <p>${{ car.price }}</p>
  </div>
</template>

<script setup lang="ts">
import type { CarInCart } from '@/types'
import { inject, type Reactive } from 'vue'

const cart = inject<Reactive<CarInCart[]>>('cart')
</script>
