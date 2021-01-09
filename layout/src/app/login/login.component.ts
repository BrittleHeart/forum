import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthErrorInterface } from '../interfaces/auth-error-interface';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { AccessToken } from '../interfaces/access-token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: AuthErrorInterface[] | undefined;
  close = faTimes;
  passwordShown: boolean;
  bannerShown: boolean;

  constructor(
    private readonly usersService: UsersService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.passwordShown = false;
    this.bannerShown = false;

    this.errors = this.usersService.errors;
  }

  /**
   * Function that logs in the user with email and password from form values
   *
   * @return RequestRedirect | void
   */
  async login(): Promise<boolean | void> {
    const { email, password } = this.loginForm.controls;
    const user: Observable<AccessToken> = this.usersService.authenticate(
      email.value,
      password.value
    );

    user.subscribe((token: AccessToken) =>
      localStorage.setItem('token', token.access_token)
    );

    if (!localStorage.getItem('token')) {
      this.usersService.errors.push({
        error: 'Login error',
        message: 'Invalid credentials were passed',
      });
      this.bannerShown = true;
      this.loginForm.reset({ email: email.value });
      return;
    }
    this.bannerShown = false;
    return await this.router.navigate(['dashboard']);
  }

  showPassword() {
    this.passwordShown = true;
  }

  hidePassword() {
    this.passwordShown = false;
  }
}
