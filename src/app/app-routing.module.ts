import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule} from '@angular/router';
import { TabAComponent } from '../app/tab-view/tab-a/tab-a.component';
import { TabBComponent} from '../app/tab-view/tab-b/tab-b.component';
import { WaterFallComponent } from '../app/components/water-flow/water-fall.component';
import { TestComponent} from '../app/components/test/test.component';

export const router: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/tab_a' },
  {
    path: 'tab_a', 
    component: TabAComponent, 
    children: [
      { path: '',pathMatch: 'prefix', redirectTo: 'water_fall'},
      { path: 'water_fall', component: WaterFallComponent },
      { path: 'todo', component: TestComponent }
    ]
  },
  { path: 'tab_b/:id', component: TabBComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
