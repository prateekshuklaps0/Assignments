import { Task } from "./task";

export class TaskManager {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  updateTask(task: Task) {
    const found = this.tasks.filter((item: Task) => item.title != task.title);
    found.push(task);
    this.tasks = found;
  }

  deleteTask(task: Task) {
    const found = this.tasks.filter((item: Task) => item.title != task.title);
    found.push(task);
    this.tasks = found;
  }

  filterTasks(completed: boolean) {
    const found = this.tasks.filter(
      (item: Task) => item.isCompleted == completed
    );
    console.log(found);
  }
}
