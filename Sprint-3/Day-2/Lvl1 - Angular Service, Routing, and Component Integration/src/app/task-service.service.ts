import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(id: number): void {
    this.tasks = [...this.tasks].filter((item: Task) => item.id !== id);
  }

  getTasks(): Task[] {
    return this.tasks;
  }
}
