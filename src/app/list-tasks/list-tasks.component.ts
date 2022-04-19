import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './task/task.service';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent implements OnInit {

  listTasks?: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.listTasks = this.taskService.listTask
  }
}
