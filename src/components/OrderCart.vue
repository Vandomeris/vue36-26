<template>
  <div class="order-cart">
    <button @click="$emit('cart-close')">X</button>
    <ul>
      <li v-for="food in store.order" :key="food.id">
        <span>{{ food.title }}</span>
        <span>{{ food.quantity }}</span>
        <span>{{ food.price }}</span>
      </li>
    </ul>

    <p>Итого к оплате: {{ store.totalPrice }}</p>
  </div>
</template>

<script setup lang="ts">
import { useOrderStore } from '@/stores'

const store = useOrderStore()
</script>

<style scoped>
.order-cart {
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 40%;
  background-color: gray;
  color: #fff;
  padding: 30px;
}

.order-cart ul {
  list-style: none;
}

.order-cart ul li {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
