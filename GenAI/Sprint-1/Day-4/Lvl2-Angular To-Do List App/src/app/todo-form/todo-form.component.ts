import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  newTask: Task = new Task();

  constructor(private taskService: TaskService) {}

  addTask() {
    // Implement adding a new task and reset the form.
  }
}
