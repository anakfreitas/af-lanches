import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProductModalComponent } from './filter-product-modal.component';

describe('FilterProductModalComponent', () => {
  let component: FilterProductModalComponent;
  let fixture: ComponentFixture<FilterProductModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterProductModalComponent]
    });
    fixture = TestBed.createComponent(FilterProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
