import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthErrorInterface } from '../interfaces/auth-error-interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: AuthErrorInterface[] | undefined;
  close = faTimes;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

    this.errors = this.usersService.errors;
  }

  async login(): Promise<boolean | void> {
    const { email, password } = this.loginForm.controls;
    const user: boolean = this.usersService.authenticate(
      email.value,
      password.value
    );

    if (!user) {
      this.usersService.errors.push({
        error: 'Login error',
        message: 'Invalid credentials were passed',
      });
      return;
    }
    return await this.router.navigate(['dashboard']);
  }
}
