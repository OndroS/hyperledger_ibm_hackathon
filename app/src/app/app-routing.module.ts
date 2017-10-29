import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { DeliveryComponent } from './Delivery/Delivery.component';
import { ContractComponent } from './Contract/Contract.component';
import { InvestorComponent } from './Investor/Investor.component';
import { ProviderComponent } from './Provider/Provider.component';

const routes: Routes = [
    // { path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},

    { path: 'Investor', component: InvestorComponent},

    { path: 'Provider', component: ProviderComponent},
		
		{ path: 'Delivery', component: DeliveryComponent},
		
		{ path: 'Contract', component: ContractComponent},
		
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
