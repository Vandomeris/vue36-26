<template>
  <h2>ToDo List</h2>

  <div>
    <button @click="showAdd = !showAdd">
      {{ showAdd ? 'Отмена' : 'Добавить дело' }}
    </button>

    <form v-if="showAdd" @submit.prevent="addTodo()">
      <input v-model="newTodoText" type="text" />
      <button>Сохранить</button>
    </form>
    <div v-else>Намите кнопку сверху, чтобы показать форму</div>
  </div>

  <div
    class="todo-item"
    :class="{ completed: todo.completed }"
    v-for="todo in todos"
    :key="todo.id"
  >
    <span>{{ todo.id }}</span>
    <span>{{ todo.title }}</span>
    <input v-model="todo.completed" type="checkbox" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const showAdd = ref(false)
const newTodoText = ref('')

function addTodo() {}

const todos = ref([
  { id: 1, title: 'Покормить кота', completed: false },
  { id: 2, title: 'Купить корм коту', completed: true },
  { id: 3, title: 'Убраться дома', completed: false },
])
</script>

<style scoped>
.todo-item {
  display: flex;
  column-gap: 40px;
  align-items: center;
}

.completed {
  text-decoration: line-through;
}
</style>
