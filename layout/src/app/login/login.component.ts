import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {}

  login(email: string, password: string): void {
    const user = this.usersService.authenticate(email, password);
    if (user) alert(`Email: ${user.email} Password: ${user.password}`);
  }
}
