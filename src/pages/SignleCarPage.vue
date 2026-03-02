<template>
  <h1>Single Car</h1>

  <div v-if="car">
    <p>{{ car?.marka }} {{ car?.model }}</p>
  </div>
  <div v-else>Loading....</div>
</template>

<script setup lang="ts">
import type { Car } from '@/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const car = ref<Car>()

const route = useRoute()

onMounted(async () => {
  const data = await ky.get<Car>(`http://localhost:3000/cars/${route.params.id}`).json()

  car.value = data
})
</script>
