<script setup lang="ts">
import taskList from '@/components/task-list.vue'
import taskAdd from '@/components/add-task.vue'
import taskFilter from '@/components/filter-task.vue'
</script>

<template>
  <div class="main">
    <taskAdd />
    <taskList />
    <taskFilter />
  </div>
</template>

<style scoped>
.main {
  display: grid;
  max-width: 500px;
  width: 100%;
}
</style>
