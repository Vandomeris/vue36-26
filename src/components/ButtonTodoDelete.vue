<template>
  <button @click="deleteTodo()">DELETE</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['delete-todo'])

function deleteTodo() {
  emit('delete-todo')
}
</script>
