import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterFlowComponent } from './water-flow.component';

describe('WaterFlowComponent', () => {
  let component: WaterFlowComponent;
  let fixture: ComponentFixture<WaterFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
