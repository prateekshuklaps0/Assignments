import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task, TaskService } from '../task-service.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.task =
      this.taskService.getTasks().find((t) => t.id === taskId) ?? undefined;
  }
}
