import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TaskService, Task } from './list-tasks/task/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('nameTask') nameTask?: ElementRef
  @ViewChild('formTask') formTask?: ElementRef

  constructor(private taskService: TaskService) { }

  ngAfterViewInit() {
    this.formTask?.nativeElement.addEventListener("submit", (e: Event) => {
      e.preventDefault()
      this.addTask()
    })
  }

  addTask() {
    if (this.nameTask?.nativeElement.value.length >= 2){
      let task: Task = {
        title: this.nameTask?.nativeElement.value,
        status: false,
        id: this.taskService.generateId()
      }
      this.taskService.addTask(task)
      this.nameTask!.nativeElement.value = ''
    }
  }

}
