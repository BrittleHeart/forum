export interface CrudServiceInterface<T> {
  collection: T[] | undefined;
  errors: string[] | undefined;

  add(t: T): number | Promise<number>;
  get(id: number): T | Promise<T>;
  clear(): T[] | Promise<T[]>;
  selectAll(): T[] | Promise<T[]>;
  update(id: number): T | Promise<T> | T[] | Promise<T[]>;
  delete(id: number): T[] | Promise<T[]>;
}
