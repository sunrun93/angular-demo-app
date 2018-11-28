import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterFlowComponent } from './water-flow/water-flow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    WaterFlowComponent
  ],
  declarations: [WaterFlowComponent]
})
export class ComponentsModule { }
