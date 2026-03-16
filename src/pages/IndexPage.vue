<script setup lang="ts">
import InputItem from '@/components/InputItem.vue'
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  Главная страница - {{ text }}

  <InputItem v-model="text" placeholder="Введите имя" />
</template>
