import { CrudServiceInterface } from './crud-service-interface';

export abstract class CrudService<T> implements CrudServiceInterface<T> {
  public collection: T[];

  add(t: T): number | Promise<number> {
    return this.collection.push(t);
  }

  clear(): T[] | Promise<T[]> {
    this.collection = [];
    return this.collection;
  }

  get(id: number): Promise<T> | T {
    // @ts-ignore
    return this.collection.find((item: T) => item.id === id);
  }

  selectAll(): T[] | Promise<T[]> {
    return this.collection;
  }
}
