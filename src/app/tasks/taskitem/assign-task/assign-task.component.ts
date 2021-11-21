import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {
  @Input() task;  
  @Input() taskId;
  disabled = false;
  selectas = -1;
  value;
  users;

 
  constructor(private usersService: UsersService, private taskService: TaskService){}

  ngOnInit(): void {
    this.users = this.usersService.users;
  }

  addTask(userIndex, taskId){
    console.log("User Index = ", userIndex.value);
    console.log("ngModel selectas = ", this.selectas);
    
    
    this.usersService.addTask(userIndex.value, this.task.project, this.task.description);
    this.taskService.removeProject(taskId);
  }
  // addTask(userId: number, project: string, description : string){
  //   this.users[userId].tasks.push({
  //     project : project,
  //     description: description
  //   })
  // }

}
