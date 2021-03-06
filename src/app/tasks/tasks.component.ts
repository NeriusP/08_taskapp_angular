import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList;
  
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.tasks;
  }

}
