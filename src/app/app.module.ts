import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, NgModel } from '@angular/forms';

import { DashboardComponent } from './components/land-lord-login/dashboard/dashboard.component';
import { TenantsComponent } from './components/land-lord-login/tenants/tenants.component';
import { BidDetailsComponent } from './components/land-lord-login/bid-details/bid-details.component';
import { PaymentComponent } from './components/land-lord-login/payment/payment.component';

import { RentersComponent } from './components/renters/renters.component';
import { LandLordLoginComponent } from './components/land-lord-login/land-lord-login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardCounterofferComponent } from './components/renters/dashboard-counteroffer/dashboard-counteroffer.component';
import { BidsWithCounterOfferComponent } from './components/renters/bids-with-counter-offer/bids-with-counter-offer.component';
import { RentersModule } from './components/renters/renters.module';
import { HeaderComponent } from './components/land-lord-login/header/header.component';
import { SidebarComponent } from './components/land-lord-login/sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    TenantsComponent,
    BidDetailsComponent,
    PaymentComponent,
   
    RentersComponent,
    LandLordLoginComponent, 
    DashboardCounterofferComponent, HeaderComponent, SidebarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    // RentersModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
