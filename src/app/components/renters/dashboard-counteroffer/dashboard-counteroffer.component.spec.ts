import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCounterofferComponent } from './dashboard-counteroffer.component';

describe('DashboardCounterofferComponent', () => {
  let component: DashboardCounterofferComponent;
  let fixture: ComponentFixture<DashboardCounterofferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCounterofferComponent]
    });
    fixture = TestBed.createComponent(DashboardCounterofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
