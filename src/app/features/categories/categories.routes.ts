import { Routes } from '@angular/router';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CategoryAddComponent } from './containers/category-add/category-add.component';

export const routes: Routes = [
  { path: '',  component: CategoriesComponent },
  { path: 'add', component: CategoryAddComponent },
];

export const routedComponents = [
  CategoriesComponent,
];