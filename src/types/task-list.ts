export type Task = {
  title: string
  complete: boolean
  id: number
}

export type Store = {
  tasks: Task[]
  taskCompleted: boolean
  taskUncompleted: boolean
}
