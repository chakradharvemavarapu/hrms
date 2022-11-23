import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LhsNavigationComponent } from './lhs-navigation.component';

describe('LhsNavigationComponent', () => {
  let component: LhsNavigationComponent;
  let fixture: ComponentFixture<LhsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LhsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LhsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
