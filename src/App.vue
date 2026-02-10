<script setup lang="ts">
import { ref } from 'vue'
import TodoList from './components/TodoList.vue'

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
