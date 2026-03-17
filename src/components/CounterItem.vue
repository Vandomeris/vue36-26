<template>
  <div>
    <button v-if="index === -1" @click="store.addToOrder({ ...props.food, quantity: 1 })">
      Добавить в корзину
    </button>
    <div v-else>
      <button @click="store.quantityDecrement(index)">-</button>
      <span>{{ store.order[index]!.quantity }}</span>
      <button @click="store.quantityIncrement(index)">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores'
import type { Food } from '@/types'
import { computed } from 'vue'

const store = useOrderStore()

const props = defineProps<{
  food: Food
}>()

const index = computed<number>(() => {
  return store.order.findIndex((item) => item.id === props.food.id)
})
</script>

<style scoped>
button {
  background-color: darkblue;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  border: none;
}
</style>
