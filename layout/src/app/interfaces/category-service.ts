import { Category } from './category';

export interface CategoryServiceInterface {
  addNewCategory(category: Category): number | Promise<number>;
  getCategory(id: number): Category | Promise<Category>;
  clearCategories(): Category[] | Promise<Category[]>;
  selectAllCategories(): Category[] | Promise<Category[]>;
}
