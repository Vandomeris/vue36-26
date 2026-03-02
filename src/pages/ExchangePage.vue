<template>
  <h1>ExchangePage</h1>

  <input v-model.number="rubles" type="number" />
  <select v-model="currency">
    <option v-for="item in CbData?.Valute" :key="item.ID" :value="item.CharCode">
      {{ item.Name }}
    </option>
  </select>
  <span>{{ valuta }}</span>
</template>

<script setup lang="ts">
import type { CBApiResponse } from '@/types'
import ky from 'ky'
import { computed, onMounted, ref } from 'vue'

const CbData = ref<CBApiResponse>()

onMounted(async () => {
  const data = await ky.get<CBApiResponse>('https://www.cbr-xml-daily.ru/daily_json.js').json()
  CbData.value = data
})

const kursUSD = 73
const kursEUR = 85

const rubles = ref(0)
const currency = ref('USD')

const valuta = computed(() => {
  if (CbData.value) {
    return (
      (rubles.value / CbData.value?.Valute[currency.value]?.Value!) *
      CbData.value?.Valute[currency.value]?.Nominal!
    )
  } else {
    return 0
  }
})
</script>
