import { Task } from "../models/task";

export class TaskReport {
  constructor(private tasks: Task[]) {}

  getCompletedTaskCount() {
    // Implement logic to count completed tasks
  }

  getPendingTaskCount() {
    // Implement logic to count pending tasks
  }

  getTasksDueToday() {
    // Implement logic to find tasks due today
  }

  getOverdueTasks() {
    // Implement logic to find overdue tasks
  }
}
