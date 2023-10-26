import { Task } from "../models/task";

export class TaskReport {
  constructor(private tasks: Task[]) {}

  getCompletedTaskCount(): number {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  getPendingTaskCount(): number {
    return this.tasks.filter((task) => !task.isCompleted).length;
  }

  getTasksDueToday(): Task[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.tasks.filter((task) => {
      // Compare dueDate with today
      return (
        task.dueDate.getDate() === today.getDate() &&
        task.dueDate.getMonth() === today.getMonth() &&
        task.dueDate.getFullYear() === today.getFullYear()
      );
    });
  }

  getOverdueTasks(): Task[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.tasks.filter((task) => {
      // Compare dueDate with today (tasks that are overdue)
      return task.dueDate < today && !task.isCompleted;
    });
  }
}
