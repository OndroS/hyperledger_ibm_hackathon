import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { InvestorService } from './Investor.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Investor',
	templateUrl: './Investor.component.html',
	styleUrls: ['./Investor.component.css'],
  providers: [InvestorService]
})
export class InvestorComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

          businessName = new FormControl("", Validators.required);
          ico = new FormControl("", Validators.required);
          address = new FormControl("", Validators.required);
          accountBalance = new FormControl("", Validators.required);


  constructor(private serviceDelivery:InvestorService, fb: FormBuilder) {
    this.myForm = fb.group({
    
          businessName:this.businessName,    
        
          ico:this.ico,
                
          address:this.address,    
        
          accountBalance:this.accountBalance
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceDelivery.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
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

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.delivery.legalcontract.Investor",
          "businessName":this.businessName.value,
          "ico":this.ico.value,
          "address":this.address.value,
          "accountBalance":this.accountBalance.value
    };

    this.myForm.setValue({
      
        
          "businessName":null,
        
      
        
          "ico":null,
        
      
        
          "address":null,
        
      
        
          "accountBalance":null
        
      
    });

    return this.serviceDelivery.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "businessName":null,
        
      
        
          "ico":null,
        
      
        
          "address":null,
        
      
        
          "accountBalance":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.acme.delivery.legalcontract.Investor",
            "ico":this.ico.value,
            "address":this.address.value,
            "accountBalance":this.accountBalance.value
    };

    return this.serviceDelivery.updateAsset(form.get("businessName").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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


  deleteAsset(): Promise<any> {

    return this.serviceDelivery.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceDelivery.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
            "businessName":null,
            "ico":null,
            "address":null,
            "accountBalance":null 
      };



      
        if(result.businessName){
          
            formObject.businessName = result.businessName;
          
        }else{
          formObject.businessName = null;
        }
      
        if(result.ico){
          
            formObject.ico = result.ico;
          
        }else{
          formObject.ico = null;
        }
      
        if(result.address){
          
            formObject.address = result.address;
          
        }else{
          formObject.address = null;
        }
      
        if(result.accountBalance){
          
            formObject.accountBalance = result.accountBalance;
          
        }else{
          formObject.accountBalance = null;
        }
      

      this.myForm.setValue(formObject);

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

  resetForm(): void{
    this.myForm.setValue({
          "businessName":null,
          "ico":null,
          "address":null,
          "accountBalance":null 
      });
  }

}
