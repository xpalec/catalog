import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { routedComponents, routes } from './categories.routes';
import { CategoryAddComponent } from './containers/category-add/category-add.component';

@NgModule({
  declarations: [
    ...routedComponents,
    CategoryAddComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class CategoriesModule {}
