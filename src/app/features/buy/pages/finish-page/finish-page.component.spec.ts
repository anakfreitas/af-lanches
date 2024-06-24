import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishPageComponent } from './finish-page.component';

describe('FinishPageComponent', () => {
  let component: FinishPageComponent;
  let fixture: ComponentFixture<FinishPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishPageComponent]
    });
    fixture = TestBed.createComponent(FinishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
