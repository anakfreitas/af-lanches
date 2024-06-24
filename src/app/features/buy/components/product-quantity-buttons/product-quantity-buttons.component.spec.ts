import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuantityButtonsComponent } from './product-quantity-buttons.component';

describe('ProductQuantityButtonsComponent', () => {
  let component: ProductQuantityButtonsComponent;
  let fixture: ComponentFixture<ProductQuantityButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQuantityButtonsComponent]
    });
    fixture = TestBed.createComponent(ProductQuantityButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
