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

    <button @click="deleteTodo(todo.id)">DELETE</button>

    <button @click="editTodo(todo)">EDIT</button>
  </div>

  <div v-if="showModal" class="modal-overlay">
    <div class="modal-body">
      <form @submit.prevent="showModal = false">
        <input type="text" v-model="editInput!.title" />
        <button>Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Todo } from '@/types'
import { ref } from 'vue'

const showAdd = ref(false)
const newTodoText = ref('')

const showModal = ref(false)

const editInput = ref<Todo>()

function addTodo() {
  todos.value.push({
    id: Date.now(),
    title: newTodoText.value,
    completed: false,
  })

  newTodoText.value = ''
}

const todos = ref([
  { id: 1, title: 'Покормить кота', completed: false },
  { id: 2, title: 'Купить корм коту', completed: true },
  { id: 3, title: 'Убраться дома', completed: false },
])

function deleteTodo(id: number) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

function editTodo(todo: Todo) {
  editInput.value = todo
  showModal.value = true
}
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

.modal-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #0000007a;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  padding: 30px;
}

.modal-body form {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}
</style>
