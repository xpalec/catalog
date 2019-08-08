import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';

const components = [
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LayoutModule,
  ],
  exports: [
    ...components,
    LayoutModule,
  ]
})
export class CoreModule { }
