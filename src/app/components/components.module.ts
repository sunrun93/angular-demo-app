import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaterFallComponent } from './water-flow/water-fall.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule
    
  ],
  exports:[
    WaterFallComponent
  ],
  declarations: [WaterFallComponent, TestComponent]
})
export class ComponentsModule { }
