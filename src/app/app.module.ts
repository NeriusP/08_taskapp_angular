import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskitemComponent } from './tasks/taskitem/taskitem.component';
import { AssignTaskComponent } from './tasks/taskitem/assign-task/assign-task.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { UsersComponent } from './users/users.component';
import { UserTaskComponent } from './users/user-task/user-task.component';
import { AddUserComponent } from './users/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskitemComponent,
    AssignTaskComponent,
    AddTaskComponent,
    UsersComponent,
    UserTaskComponent,
    AddUserComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
