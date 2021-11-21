import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.css']
})
export class UserTaskComponent implements OnInit {
  @Input() oneuser;
  @Input() userTasks: [];
  constructor() { }

  ngOnInit(): void {
  }

}
