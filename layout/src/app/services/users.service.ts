import { Injectable } from '@angular/core';
import { CrudService } from '../externals/crud-service';
import { User } from '../interfaces/user';
import { users } from '../users';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends CrudService<User> {
  private users: User[] = users;

  constructor() {
    super();
    this.collection = this.users;
    this.errors = [];
  }

  findUser(email: string): User {
    return this.collection.find((user: User) => user.email === email);
  }

  authenticate(email: string, password: string): boolean {
    const user = this.findUser(email);
    return !(!user || password !== user.password);
  }
}
