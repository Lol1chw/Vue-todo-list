<script setup lang="ts">
import { ref } from 'vue'

type Task = {
  title: string
  complete: boolean
  id: number
}

let id = 0
const title = ref('')
const tasks = ref<Task[]>([])
const taskCompleted = ref(false)
const taskUncompleted = ref(false)

function addTask() {
  if (title.value.length <= 1) {
    return null
  }
  tasks.value.push({ title: title.value, complete: false, id: id++ }), (title.value = '')
}
</script>

<template>
  <div class="main">
    <div class="input-group">
      <input v-model="title" type="text" class="input-field" />
      <button @click="addTask">Add task</button>
    </div>

    <ul class="task-list">
      <template v-for="task in tasks" :key="task.id">
        <li
          v-if="taskCompleted ? task.complete : taskUncompleted ? !task.complete : true"
          class="task"
          :class="task.complete && 'task--complete'"
        >
          {{ task.title }} <input type="checkbox" @click="task.complete = !task.complete" />
        </li>
      </template>

      <div class="filter-group">
        <span>
          <input v-model="taskCompleted" type="checkbox" />
          Show completed only
        </span>
        <span>
          <input v-model="taskUncompleted" type="checkbox" />
          Show uncompleted only
        </span>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.main {
  display: grid;
  max-width: 500px;
  width: 100%;
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

.task-list {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 0px;
}

.task {
  background-color: #7ee787;
  border-radius: 2px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}
.task--complete {
  text-decoration: line-through;
}

.filter-group {
  color: #ffffff;
  display: flex;
  flex-direction: column;
}
</style>
