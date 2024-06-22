import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartButtonComponent } from './add-cart-button.component';

describe('AddCartComponent', () => {
  let component: AddCartButtonComponent;
  let fixture: ComponentFixture<AddCartButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCartButtonComponent],
    });
    fixture = TestBed.createComponent(AddCartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
