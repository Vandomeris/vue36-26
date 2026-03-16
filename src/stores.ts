import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

interface FoodInOrder {
  id: number
  title: string
  quantity: number
  price: number
}

export const useOrderStore = defineStore('order', () => {
  const order = ref<FoodInOrder[]>([])

  function addToOrder(food: FoodInOrder) {
    order.value.push(food)
  }

  function deleteFromOrder(id: number) {
    const index = order.value.findIndex((item) => item.id === id)

    if (index !== -1) order.value.splice(index, 1)
  }

  const totalQuantity = computed(() => {
    let total = 0
    order.value.forEach((item) => {
      total = total + item.quantity
    })
    return total
  })

  return { order, addToOrder, deleteFromOrder, totalQuantity }
})
