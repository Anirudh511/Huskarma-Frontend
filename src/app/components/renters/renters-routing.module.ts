import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCounterofferComponent } from './dashboard-counteroffer/dashboard-counteroffer.component';
import { BidsWithCounterOfferComponent } from './bids-with-counter-offer/bids-with-counter-offer.component';

const routes: Routes = [
  {path:'bids-with-counter-offer',component:BidsWithCounterOfferComponent},
  {path:'',component:DashboardCounterofferComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentersRoutingModule { }
