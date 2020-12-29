import { CrudServiceInterface } from './crud-service-interface';

export abstract class CrudService<T> implements CrudServiceInterface<T> {
  public collection: T[] | undefined;
  public errors: string[] | undefined;

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

  delete(id: number): T[] | Promise<T[]> {
    return this.collection.splice(id, 1);
  }

  update(id: number): T[] | Promise<T[]> {
    const collection_copy = [...this.collection];
    if (!collection_copy) return;
    return collection_copy;
  }
}
