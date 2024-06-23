import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfInputComponent } from './af-input.component';

describe('AfInputComponent', () => {
  let component: AfInputComponent;
  let fixture: ComponentFixture<AfInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AfInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AfInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
