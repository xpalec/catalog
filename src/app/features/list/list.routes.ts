import { Routes } from '@angular/router';
import { CardsComponent } from 'src/app/features/list/containers/cards/cards.component';
import { ListComponent } from 'src/app/features/list/containers/list/list.component';

export const routes: Routes = [
  { path: '',  component: ListComponent },
  {
    path: 'cards',
    component: CardsComponent,
  },
];

export const routedComponents = [
  ListComponent, CardsComponent
];