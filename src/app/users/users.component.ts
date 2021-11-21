import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.userList = this.usersService.users;
  }

}
