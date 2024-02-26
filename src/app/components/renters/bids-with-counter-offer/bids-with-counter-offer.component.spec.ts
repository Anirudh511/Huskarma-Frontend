import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidsWithCounterOfferComponent } from './bids-with-counter-offer.component';

describe('BidsWithCounterOfferComponent', () => {
  let component: BidsWithCounterOfferComponent;
  let fixture: ComponentFixture<BidsWithCounterOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BidsWithCounterOfferComponent]
    });
    fixture = TestBed.createComponent(BidsWithCounterOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
