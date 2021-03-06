import { CrudServiceInterface } from './crud-service-interface';
import { AuthErrorInterface } from '../interfaces/auth-error-interface';
import { Observable } from 'rxjs';

export abstract class CrudService<T> implements CrudServiceInterface<T> {
  public collection: T[] | undefined;
  public errors: AuthErrorInterface[] | undefined;

  add(t: T): number | Promise<number> {
    return this.collection.push(t);
  }

  clear(): T[] | Promise<T[]> | Observable<T[]> {
    this.collection = [];
    return this.collection;
  }

  get(id: number): Promise<T> | T | Observable<T> {
    // @ts-ignore
    return this.collection.find((item: T) => item.id === id);
  }

  selectAll(): T[] | Promise<T[]> | Observable<T[]> {
    return this.collection;
  }

  delete(id: number): T[] | Promise<T[]> | Observable<T> {
    return this.collection.splice(id, 1);
  }

  update(id: number): T[] | Promise<T[]> | Observable<T> {
    const collection_copy = [...this.collection];
    if (!collection_copy) return;
    return collection_copy;
  }
}
