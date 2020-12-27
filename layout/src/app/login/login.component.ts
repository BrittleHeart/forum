import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginForm: boolean;
  loginForm: FormGroup;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  login(): void {
    const { email, password } = this.loginForm.controls;
    const user: User = this.usersService.authenticate(
      email.value,
      password.value
    );

    if (user) alert(`Email: ${user.email} Password: ${user.password}`);
  }
}
