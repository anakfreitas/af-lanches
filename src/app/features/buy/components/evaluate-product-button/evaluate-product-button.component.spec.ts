import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateProductButtonComponent } from './evaluate-product-button.component';

describe('EvaluateProductButtonComponent', () => {
  let component: EvaluateProductButtonComponent;
  let fixture: ComponentFixture<EvaluateProductButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluateProductButtonComponent]
    });
    fixture = TestBed.createComponent(EvaluateProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
