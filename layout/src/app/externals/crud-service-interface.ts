import { AuthErrorInterface } from '../interfaces/auth-error-interface';
import { Observable } from 'rxjs';

export interface CrudServiceInterface<T> {
  collection: T[] | undefined;
  errors: AuthErrorInterface[] | undefined;

  add(t: T): number | Promise<number> | Observable<number>;
  get(id: number): T | Promise<T> | Observable<T>;
  clear(): T[] | Promise<T[]> | Observable<T[]>;
  selectAll(): T[] | Promise<T[]> | Observable<T[]>;
  update(id: number): T | Promise<T> | T[] | Promise<T[]> | Observable<T>;
  delete(id: number): T[] | Promise<T[]> | Observable<T>;
}
