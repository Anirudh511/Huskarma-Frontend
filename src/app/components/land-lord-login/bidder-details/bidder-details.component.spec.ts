import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderDetailsComponent } from './bidder-details.component';

describe('BidderDetailsComponent', () => {
  let component: BidderDetailsComponent;
  let fixture: ComponentFixture<BidderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidderDetailsComponent]
    });
    fixture = TestBed.createComponent(BidderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
