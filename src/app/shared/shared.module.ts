import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { SearchComponent } from './components/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/buttons/button/button.component';

const components = [
  SearchComponent,
  CardComponent,
  HeaderComponent,
  ButtonComponent,
];

const modules = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...components,
    ButtonComponent,
  ],
  imports: [
    ...modules,
    RouterModule,
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule { }
