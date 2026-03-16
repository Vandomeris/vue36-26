<template>
  <h1>Cars Catalog</h1>

  <div v-if="cars.length" class="cars_grid">
    <div v-for="car in cars" :key="car.id">
      <p>{{ car.marka }} {{ car.model }} {{ car.year }}</p>
      <p>от ${{ car.price }}</p>
      <p>{{ car.engine }} ({{ car.horsepower }} л.с)</p>
      <p>{{ car.drive }} | {{ car.transmission }}</p>
      <button @click="addToCart(car)">Добавить в корзину</button>
      <RouterLink :to="`/cars/${car.id}`">Подробнее</RouterLink>
    </div>
  </div>
  <div v-else>
    <p>Loading.....</p>
  </div>
</template>

<style scoped>
.cars_grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}
</style>

<script setup lang="ts">
import type { Car, CarInCart } from '@/types'
import ky from 'ky'
import { inject, onMounted, ref, type Reactive } from 'vue'

const cars = ref<Car[]>([])

onMounted(async () => {
  const data = await ky.get<Car[]>('http://localhost:3000/cars').json()

  cars.value = data

  console.log(cars.value)
})

const cart = inject<Reactive<CarInCart[]>>('cart')

function addToCart(car: Car) {
  cart?.push({
    ...car,
    quantity: 1,
  })
}
</script>
