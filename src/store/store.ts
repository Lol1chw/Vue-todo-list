import type { Store, Task } from '@/types/task-list'
import { reactive } from 'vue'

let savedTask = JSON.parse(localStorage.getItem('tasks') as string)
if (!savedTask) {
  savedTask = []
}

const store = reactive<Store>({
  tasks: savedTask as Task[],
  taskCompleted: false,
  taskUncompleted: false
})

const taskCompleted = reactive({ complete: false })
const taskUncompleted = reactive({ complete: false })

export { taskCompleted, taskUncompleted, store }
