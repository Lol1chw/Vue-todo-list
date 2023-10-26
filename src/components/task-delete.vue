<script setup lang="ts">
import { store } from '@/store/store'
import trashCan from '@/assets/trash-can.vue'
import type { Task } from '@/types/task-list.ts'

defineProps<{ task: Task }>()

function deleteTask(task: Task) {
  store.tasks.splice(store.tasks.indexOf(task), 1)
  localStorage.setItem('tasks', JSON.stringify(store.tasks))
}
</script>

<template>
  <button @click="deleteTask(task)">
    <trashCan />
  </button>
</template>

<style scoped>
button {
  border: none;
  background-color: #ffffff00;
  cursor: pointer;
  box-sizing: border-box;
  height: 24px;
  padding: 0;
}
</style>
