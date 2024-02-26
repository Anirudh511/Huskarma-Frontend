import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/land-lord-login/dashboard/dashboard.component';
import { TenantsComponent } from './components/land-lord-login/tenants/tenants.component';
import { BidDetailsComponent } from './components/land-lord-login/bid-details/bid-details.component';
import { BidsWithCounterOfferComponent } from './components/renters/bids-with-counter-offer/bids-with-counter-offer.component';
import { DashboardCounterofferComponent } from './components/renters/dashboard-counteroffer/dashboard-counteroffer.component';

const routes: Routes = [
  
  {path:'',component:DashboardComponent},
  {path:'tenants',component:TenantsComponent},
  {path:'bid-details',component:BidDetailsComponent},
  {path:'bids-with-counter-offer',component:BidsWithCounterOfferComponent},
  {path:'dashboard-counteroffer',component:DashboardCounterofferComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
