import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabAComponent } from './tab-a/tab-a.component';
import { TabBComponent } from './tab-b/tab-b.component';
import { RouterModule } from '@angular/router';
import { router } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports:[TabAComponent, TabBComponent,RouterModule],
  declarations: [TabAComponent, TabBComponent]
})
export class TabViewModule { }
