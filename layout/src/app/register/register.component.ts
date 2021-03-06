import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user';
import { AuthErrorInterface } from '../interfaces/auth-error-interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: AuthErrorInterface[] | undefined;
  formSent: boolean;
  passwordShown: boolean;
  bannerShown: boolean;

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.errors = this.usersService.errors;
    this.formSent = false;
    this.passwordShown = false;
    this.bannerShown = false;
  }

  register(): void {
    const { name, email, password } = this.registerForm.controls;
    const { collection } = this.usersService;
    const user: User = {
      id: collection.length + 1,
      name: name.value,
      email: email.value,
      password: password.value,
    };

    this.usersService.add(user);

    if (this.registerForm.valid) this.formSent = true;
  }

  showPassword() {
    this.passwordShown = true;
  }

  hidePassword() {
    this.passwordShown = false;
  }
}
