<template>
  <div>
    <button @click="store.addToOrder({ ...props.food, quantity: 1 })">Добавить в корзину</button>
    <div>
      <button @click="count = count - 1">-</button>
      <span>{{ count }}</span>
      <button @click="count = count + 1">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores'
import type { Food } from '@/types'
import { computed, ref } from 'vue'

const store = useOrderStore()

const props = defineProps<{
  food: Food
}>()

const inCart = computed<boolean>(() => {
  const index = store.order.findIndex((item) => item.id === props.food.id)

  if (index === -1) return false
  else return true
})

const count = ref(0)
</script>
