export interface CrudServiceInterface<T> {
  add(t: T): number | Promise<number>;
  get(id: number): T | Promise<T>;
  clear(): T[] | Promise<T[]>;
  selectAll(): T[] | Promise<T[]>;
}
