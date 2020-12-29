import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { categories } from '../categories';
import { CrudService } from '../externals/crud-service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends CrudService<Category> {
  private categories: Category[] = categories;

  constructor() {
    super();
    this.collection = this.categories;
    this.errors = [];
  }
}
