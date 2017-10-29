import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../Investor/Investor.service';
import { ProviderService } from '../Provider/Provider.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [ProviderService, InvestorService]
})
export class HomeComponent {

	private allAssetsProvider;
	private allAssetsInvestor;
	private asset;
	private currentId;
	private errorMessage;

	constructor(private serviceProvider:ProviderService, private serviceInvestor:InvestorService) {
		
	};

	ngOnInit(): void {
		this.loadAllProviders();
		this.loadAllInvestors();
	  }
	
	  loadAllProviders(): Promise<any> {
		let tempList = [];
		return this.serviceProvider.getAll()
		.toPromise()
		.then((result) => {
				this.errorMessage = null;
		  result.forEach(asset => {
			tempList.push(asset);
		  });
		  this.allAssetsProvider = tempList;
		})
		.catch((error) => {
			if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
					this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
		});
	  }

	  loadAllInvestors(): Promise<any> {
		let tempList = [];
		return this.serviceInvestor.getAll()
		.toPromise()
		.then((result) => {
				this.errorMessage = null;
		  result.forEach(asset => {
			tempList.push(asset);
		  });
		  this.allAssetsInvestor = tempList;
		})
		.catch((error) => {
			if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
					this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
		});
	  }

}
