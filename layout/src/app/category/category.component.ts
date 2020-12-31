import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] | Promise<Category[]> | Observable<Category[]>;

  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.selectAll();
  }
}
