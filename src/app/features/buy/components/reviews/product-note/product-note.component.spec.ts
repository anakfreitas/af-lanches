import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNoteComponent } from './product-note.component';

describe('ProductNoteComponent', () => {
  let component: ProductNoteComponent;
  let fixture: ComponentFixture<ProductNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductNoteComponent]
    });
    fixture = TestBed.createComponent(ProductNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
