import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentersRoutingModule } from './renters-routing.module';
import { BidsWithCounterOfferComponent } from './bids-with-counter-offer/bids-with-counter-offer.component';
import { DashboardCounterofferComponent } from './dashboard-counteroffer/dashboard-counteroffer.component';



@NgModule({
  declarations: [
    BidsWithCounterOfferComponent,
    // DashboardCounterofferComponent,
  
    
  ],
  imports: [
    CommonModule,
    RentersRoutingModule
  ]
})
export class RentersModule { }
