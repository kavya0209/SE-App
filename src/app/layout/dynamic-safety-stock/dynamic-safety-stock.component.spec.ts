import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSafetyStockComponent } from './dynamic-safety-stock.component';

describe('DynamicSafetyStockComponent', () => {
  let component: DynamicSafetyStockComponent;
  let fixture: ComponentFixture<DynamicSafetyStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSafetyStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSafetyStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
