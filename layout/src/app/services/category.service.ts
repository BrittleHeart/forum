import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { categories } from '../categories';
import { CategoryServiceInterface } from '../interfaces/category-service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService implements CategoryServiceInterface {
  private categories: Category[] = categories;

  constructor() {}

  addNewCategory(category: Category): number | Promise<number> {
    return this.categories.push(category);
  }

  clearCategories(): Category[] | Promise<Category[]> {
    this.categories = [];
    return this.categories;
  }

  getCategory(id: number): Category | Promise<Category> {
    return this.categories.find((category) => category.id === id);
  }

  selectAllCategories(): Category[] | Promise<Category[]> {
    return this.categories;
  }
}
