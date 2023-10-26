<script setup lang="ts">
import { ref } from 'vue'
import { store } from '@/store/store'

const title = ref('')

let id = 0

function addTask() {
  if (title.value.length < 1) {
    return null
  }
  const newTask = { title: title.value, complete: false, id: id++ }

  store.tasks.push(newTask)

  localStorage.setItem('tasks', JSON.stringify(store.tasks))
  title.value = ''
}
</script>

<template>
  <div class="input-group">
    <input v-model="title" type="text" class="input-field" />
    <button @click="addTask">Add task</button>
  </div>
</template>

<style scoped>
button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
}

button:hover {
  background-color: #45a049;
}

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.input-field {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}
</style>
