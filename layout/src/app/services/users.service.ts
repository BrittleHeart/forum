import { Injectable } from '@angular/core';
import { CrudService } from '../externals/crud-service';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessToken } from '../interfaces/access-token';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends CrudService<User> {
  constructor(private readonly httpClient: HttpClient) {
    super();
    this.errors = [];
  }

  /**
   * Authenticate the user with params
   *
   * @param username
   * @param password
   * @returns Observable<AccessToken>
   */
  authenticate(username: string, password: string): Observable<AccessToken> {
    const url: string = 'http://localhost:3000/auth/login';
    return this.httpClient.post<AccessToken>(
      url,
      { username, password },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
