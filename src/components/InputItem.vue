<template>
  <input v-model="model" :type="type" :placeholder="placeholder" />
</template>

<script setup lang="ts">
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const model = defineModel()
</script>
