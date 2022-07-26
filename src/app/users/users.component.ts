import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private usersService: UsersService) {
   }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
