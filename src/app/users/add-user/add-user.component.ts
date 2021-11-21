import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  display: boolean = false;
  
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  addUser(name: HTMLInputElement, surname: HTMLInputElement){
    this.usersService.addUser(name.value, surname.value);
  }
}
