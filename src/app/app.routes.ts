import { Routes } from '@angular/router';
import { MainViewComponent } from './core/layout/containers/main-view/main-view.component';

export const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        redirectTo: '/list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: './features/list/list.module#ListModule'
      },
      {
        path: 'categories',
        loadChildren: './features/categories/categories.module#CategoriesModule'
      }
    ]
  },
];
