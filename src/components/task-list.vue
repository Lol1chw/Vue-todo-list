<script setup lang="ts">
import { store } from '@/store/store'
import deleteTask from '@/components/task-delete.vue'
</script>

<template>
  <ul class="task-list">
    <p v-if="!store.tasks.length" class="task--empty">Tasks are empty</p>
    <template v-for="task in store.tasks" :key="task.id">
      <li
        v-if="store.taskCompleted ? task.complete : store.taskUncompleted ? !task.complete : true"
        class="task"
        :class="task.complete && 'task--complete'"
      >
        {{ task.title }}
        <div class="control-task">
          <deleteTask :task="task" />
          <input v-model="task.complete" type="checkbox" @click="task.complete = !task.complete" />
        </div>
      </li>
    </template>
  </ul>
</template>

<style scoped>
.task-list {
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 0px;
}

.control-task {
  display: flex;
  gap: 15px;
  align-items: center;
}
.task {
  background-color: #a5d6ff;
  border-radius: 2px 2px 0px 0px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.task--complete {
  text-decoration: line-through;
}

.task--empty {
  color: #ffffff;
  text-align: center;
}

input[type='checkbox'] {
  width: 13;
  height: 24px;
}
</style>
