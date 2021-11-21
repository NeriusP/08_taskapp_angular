import { Component } from '@angular/core';
import {TaskService} from './task.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService, UsersService]
})
export class AppComponent {
  title = 'taskapp';
}
