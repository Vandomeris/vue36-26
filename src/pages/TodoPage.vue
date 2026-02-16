<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <h1>Первое Vue приложение</h1>

  <input type="text" v-model="text" />
  {{ text }}
  <TodoList />
</template>

<style scoped>
.text-red {
  color: red;
}
</style>
