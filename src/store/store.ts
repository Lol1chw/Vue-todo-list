import type { Store, Task } from '@/types/task-list'
import { reactive } from 'vue'

const savedTask = JSON.parse(localStorage.getItem('tasks') as string)

const store = reactive<Store>({
    tasks: savedTask as Task[],
    taskCompleted: false,
    taskUncompleted: false
})

const taskCompleted = reactive({complete: false})
const taskUncompleted = reactive({complete: false})

export {taskCompleted, taskUncompleted, store}