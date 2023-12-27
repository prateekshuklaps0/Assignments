import { Component, OnInit } from '@angular/core';

import { TaskAddComponent } from '../task-add/task-add.component';
import { Task, TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(public taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
}
