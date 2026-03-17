<template>
  <div>
    <div class="cart-button">
      <button @click="cartShow = true">Корзина ({{ store.totalQuantity }})</button>
    </div>
    <div class="food-grid">
      <div class="food-item" v-for="food in foods" :key="food.id">
        <h4>{{ food.title }}</h4>
        <p>{{ food.price }} рублей</p>
        <CounterItem :food="food" />
      </div>
    </div>

    <OrderCart @cart-close="cartShow = false" v-if="cartShow" />
  </div>
</template>

<script setup lang="ts">
import CounterItem from '@/components/CounterItem.vue'
import OrderCart from '@/components/OrderCart.vue'
import { useOrderStore } from '@/stores'
import type { Food } from '@/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'

const foods = ref<Food[]>([])

const cartShow = ref(false)

const store = useOrderStore()

onMounted(async () => {
  const data = await ky.get<Food[]>('http://localhost:3000/food').json()
  foods.value = data
})
</script>

<style scoped>
.food-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.cart-button {
  text-align: right;
}

.cart-button button {
  background: darkorange;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  border: none;
}
</style>
