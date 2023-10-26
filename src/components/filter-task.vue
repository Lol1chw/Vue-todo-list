<script setup lang="ts">
import { store } from '@/store/store'
</script>

<template>
  <div class="filter-group">
    <span>
      <input v-model="store.taskCompleted" type="checkbox" />
      Show completed only
    </span>
    <span>
      <input v-model="store.taskUncompleted" type="checkbox" />
      Show uncompleted only
    </span>
  </div>
</template>

<style scoped>
.filter-group {
  color: #ffffff;
  display: flex;
  flex-direction: column;
}
</style>
