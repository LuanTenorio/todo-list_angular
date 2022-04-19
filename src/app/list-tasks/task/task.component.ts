import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Task, TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  @ViewChild('deleteTask') deleteTask?: ElementRef

  constructor(private taskService: TaskService) { }

  removeTask(){
    this.taskService.removeTask(this.task)
  }

  ngOnInit(): void {

  }

}
