import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { TransactionComponent } from './Transaction/Transaction.component'

import { DeliveryComponent } from './Delivery/Delivery.component';
import { ContractComponent } from './Contract/Contract.component';
import { InvestorComponent } from './Investor/Investor.component';
import { ProviderComponent } from './Provider/Provider.component';


@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    //TransactionComponent,
    DeliveryComponent,
		InvestorComponent,
    ContractComponent,
		ProviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
