import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskComponent } from './list-tasks/task/task.component';
import { TaskService } from './list-tasks/task/task.service';

@NgModule({
  declarations: [
    AppComponent,
    ListTasksComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
