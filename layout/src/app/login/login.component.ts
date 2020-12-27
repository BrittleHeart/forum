import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: Array<string>;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.errors = [];
  }

  async login(): Promise<boolean | number> {
    const { email, password } = this.loginForm.controls;
    const user: boolean = this.usersService.authenticate(
      email.value,
      password.value
    );

    if (!user)
      return this.errors.push('Invalid credentials', 'Could not sing-in');
    return this.router.navigate(['dashboard']);
  }
}
