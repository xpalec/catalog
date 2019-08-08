import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MainViewComponent } from './containers/main-view/main-view.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const components = [
  MainViewComponent,
  TopbarComponent,
  SideNavComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    ...components,
  ],
})
export class LayoutModule { }
