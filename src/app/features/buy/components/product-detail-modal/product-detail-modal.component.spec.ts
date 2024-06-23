import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailModalComponent } from './product-detail-modal.component';

describe('ProductDetailModalComponent', () => {
  let component: ProductDetailModalComponent;
  let fixture: ComponentFixture<ProductDetailModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailModalComponent],
    });
    fixture = TestBed.createComponent(ProductDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
