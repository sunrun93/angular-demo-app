import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterFallComponent } from './water-flow/water-fall.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    WaterFallComponent
  ],
  declarations: [WaterFallComponent]
})
export class ComponentsModule { }
