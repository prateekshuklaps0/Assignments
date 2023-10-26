import { Task } from "../models/Task";
import { TaskManager } from "../models/TaskManager";

export class TaskService {
  private taskManager: TaskManager;

  constructor() {
    this.taskManager = new TaskManager();
  }

  addTask(task: Task) {
    this.taskManager.addTask(task);
  }

  updateTask(task: Task) {
    this.taskManager.updateTask(task);
  }

  deleteTask(task: Task) {
    this.taskManager.deleteTask(task);
  }

  filterTasks(completed: boolean) {
    return this.taskManager.filterTasks(completed);
  }
}
