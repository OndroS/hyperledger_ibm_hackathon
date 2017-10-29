import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContractService } from './Contract.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Contract',
	templateUrl: './Contract.component.html',
	styleUrls: ['./Contract.component.css'],
  providers: [ContractService]
})
export class ContractComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          contractId = new FormControl("", Validators.required);
        
  
      
          investorBusinessName = new FormControl("", Validators.required);
        
  
      
          investorIco = new FormControl("", Validators.required);
        
  
      
          investorDic = new FormControl("", Validators.required);
        
  
      
          investorIcdph = new FormControl("", Validators.required);
        
  
      
          investorAccountNumber = new FormControl("", Validators.required);
        
  
      
          investorBankName = new FormControl("", Validators.required);
        
  
      
          investorLegalRegisterNumber = new FormControl("", Validators.required);
        
  
      
          providerbusinessName = new FormControl("", Validators.required);
        
  
      
          providerIco = new FormControl("", Validators.required);
        
  
      
          providerDic = new FormControl("", Validators.required);
        
  
      
          providerIcdph = new FormControl("", Validators.required);
        
  
      
          providerAccountNumber = new FormControl("", Validators.required);
        
  
      
          providerBankName = new FormControl("", Validators.required);
        
  
      
          providerLegalRegisterNumber = new FormControl("", Validators.required);
        
  
      
          unitPrice = new FormControl("", Validators.required);
        
  
      
          createdAtPlace = new FormControl("", Validators.required);
        
  
      
          deadlineDateTime = new FormControl("", Validators.required);
        
  


  constructor(private serviceContract:ContractService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          contractId:this.contractId,
        
    
        
          investorBusinessName:this.investorBusinessName,
        
    
        
          investorIco:this.investorIco,
        
    
        
          investorDic:this.investorDic,
        
    
        
          investorIcdph:this.investorIcdph,
        
    
        
          investorAccountNumber:this.investorAccountNumber,
        
    
        
          investorBankName:this.investorBankName,
        
    
        
          investorLegalRegisterNumber:this.investorLegalRegisterNumber,
        
    
        
          providerbusinessName:this.providerbusinessName,
        
    
        
          providerIco:this.providerIco,
        
    
        
          providerDic:this.providerDic,
        
    
        
          providerIcdph:this.providerIcdph,
        
    
        
          providerAccountNumber:this.providerAccountNumber,
        
    
        
          providerBankName:this.providerBankName,
        
    
        
          providerLegalRegisterNumber:this.providerLegalRegisterNumber,
        
    
        
          unitPrice:this.unitPrice,
        
    
        
          createdAtPlace:this.createdAtPlace,
        
    
        
          deadlineDateTime:this.deadlineDateTime
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceContract.getAll()
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
      $class: "org.acme.delivery.legalcontract.Contract",
      
        
          "contractId":this.contractId.value,
        
      
        
          "investorBusinessName":this.investorBusinessName.value,
        
      
        
          "investorIco":this.investorIco.value,
        
      
        
          "investorDic":this.investorDic.value,
        
      
        
          "investorIcdph":this.investorIcdph.value,
        
      
        
          "investorAccountNumber":this.investorAccountNumber.value,
        
      
        
          "investorBankName":this.investorBankName.value,
        
      
        
          "investorLegalRegisterNumber":this.investorLegalRegisterNumber.value,
        
      
        
          "providerbusinessName":this.providerbusinessName.value,
        
      
        
          "providerIco":this.providerIco.value,
        
      
        
          "providerDic":this.providerDic.value,
        
      
        
          "providerIcdph":this.providerIcdph.value,
        
      
        
          "providerAccountNumber":this.providerAccountNumber.value,
        
      
        
          "providerBankName":this.providerBankName.value,
        
      
        
          "providerLegalRegisterNumber":this.providerLegalRegisterNumber.value,
        
      
        
          "unitPrice":this.unitPrice.value,
        
      
        
          "createdAtPlace":this.createdAtPlace.value,
        
      
        
          "deadlineDateTime":this.deadlineDateTime.value
        
      
    };

    this.myForm.setValue({
      
        
          "contractId":null,
        
      
        
          "investorBusinessName":null,
        
      
        
          "investorIco":null,
        
      
        
          "investorDic":null,
        
      
        
          "investorIcdph":null,
        
      
        
          "investorAccountNumber":null,
        
      
        
          "investorBankName":null,
        
      
        
          "investorLegalRegisterNumber":null,
        
      
        
          "providerbusinessName":null,
        
      
        
          "providerIco":null,
        
      
        
          "providerDic":null,
        
      
        
          "providerIcdph":null,
        
      
        
          "providerAccountNumber":null,
        
      
        
          "providerBankName":null,
        
      
        
          "providerLegalRegisterNumber":null,
        
      
        
          "unitPrice":null,
        
      
        
          "createdAtPlace":null,
        
      
        
          "deadlineDateTime":null
        
      
    });

    return this.serviceContract.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "contractId":null,
        
      
        
          "investorBusinessName":null,
        
      
        
          "investorIco":null,
        
      
        
          "investorDic":null,
        
      
        
          "investorIcdph":null,
        
      
        
          "investorAccountNumber":null,
        
      
        
          "investorBankName":null,
        
      
        
          "investorLegalRegisterNumber":null,
        
      
        
          "providerbusinessName":null,
        
      
        
          "providerIco":null,
        
      
        
          "providerDic":null,
        
      
        
          "providerIcdph":null,
        
      
        
          "providerAccountNumber":null,
        
      
        
          "providerBankName":null,
        
      
        
          "providerLegalRegisterNumber":null,
        
      
        
          "unitPrice":null,
        
      
        
          "createdAtPlace":null,
        
      
        
          "deadlineDateTime":null 
        
      
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
      $class: "org.acme.delivery.legalcontract.Contract",
      
        
          
        
    
        
          
            "investorBusinessName":this.investorBusinessName.value,
          
        
    
        
          
            "investorIco":this.investorIco.value,
          
        
    
        
          
            "investorDic":this.investorDic.value,
          
        
    
        
          
            "investorIcdph":this.investorIcdph.value,
          
        
    
        
          
            "investorAccountNumber":this.investorAccountNumber.value,
          
        
    
        
          
            "investorBankName":this.investorBankName.value,
          
        
    
        
          
            "investorLegalRegisterNumber":this.investorLegalRegisterNumber.value,
          
        
    
        
          
            "providerbusinessName":this.providerbusinessName.value,
          
        
    
        
          
            "providerIco":this.providerIco.value,
          
        
    
        
          
            "providerDic":this.providerDic.value,
          
        
    
        
          
            "providerIcdph":this.providerIcdph.value,
          
        
    
        
          
            "providerAccountNumber":this.providerAccountNumber.value,
          
        
    
        
          
            "providerBankName":this.providerBankName.value,
          
        
    
        
          
            "providerLegalRegisterNumber":this.providerLegalRegisterNumber.value,
          
        
    
        
          
            "unitPrice":this.unitPrice.value,
          
        
    
        
          
            "createdAtPlace":this.createdAtPlace.value,
          
        
    
        
          
            "deadlineDateTime":this.deadlineDateTime.value
          
        
    
    };

    return this.serviceContract.updateAsset(form.get("contractId").value,this.asset)
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

    return this.serviceContract.deleteAsset(this.currentId)
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

    return this.serviceContract.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "contractId":null,
          
        
          
            "investorBusinessName":null,
          
        
          
            "investorIco":null,
          
        
          
            "investorDic":null,
          
        
          
            "investorIcdph":null,
          
        
          
            "investorAccountNumber":null,
          
        
          
            "investorBankName":null,
          
        
          
            "investorLegalRegisterNumber":null,
          
        
          
            "providerbusinessName":null,
          
        
          
            "providerIco":null,
          
        
          
            "providerDic":null,
          
        
          
            "providerIcdph":null,
          
        
          
            "providerAccountNumber":null,
          
        
          
            "providerBankName":null,
          
        
          
            "providerLegalRegisterNumber":null,
          
        
          
            "unitPrice":null,
          
        
          
            "createdAtPlace":null,
          
        
          
            "deadlineDateTime":null 
          
        
      };



      
        if(result.contractId){
          
            formObject.contractId = result.contractId;
          
        }else{
          formObject.contractId = null;
        }
      
        if(result.investorBusinessName){
          
            formObject.investorBusinessName = result.investorBusinessName;
          
        }else{
          formObject.investorBusinessName = null;
        }
      
        if(result.investorIco){
          
            formObject.investorIco = result.investorIco;
          
        }else{
          formObject.investorIco = null;
        }
      
        if(result.investorDic){
          
            formObject.investorDic = result.investorDic;
          
        }else{
          formObject.investorDic = null;
        }
      
        if(result.investorIcdph){
          
            formObject.investorIcdph = result.investorIcdph;
          
        }else{
          formObject.investorIcdph = null;
        }
      
        if(result.investorAccountNumber){
          
            formObject.investorAccountNumber = result.investorAccountNumber;
          
        }else{
          formObject.investorAccountNumber = null;
        }
      
        if(result.investorBankName){
          
            formObject.investorBankName = result.investorBankName;
          
        }else{
          formObject.investorBankName = null;
        }
      
        if(result.investorLegalRegisterNumber){
          
            formObject.investorLegalRegisterNumber = result.investorLegalRegisterNumber;
          
        }else{
          formObject.investorLegalRegisterNumber = null;
        }
      
        if(result.providerbusinessName){
          
            formObject.providerbusinessName = result.providerbusinessName;
          
        }else{
          formObject.providerbusinessName = null;
        }
      
        if(result.providerIco){
          
            formObject.providerIco = result.providerIco;
          
        }else{
          formObject.providerIco = null;
        }
      
        if(result.providerDic){
          
            formObject.providerDic = result.providerDic;
          
        }else{
          formObject.providerDic = null;
        }
      
        if(result.providerIcdph){
          
            formObject.providerIcdph = result.providerIcdph;
          
        }else{
          formObject.providerIcdph = null;
        }
      
        if(result.providerAccountNumber){
          
            formObject.providerAccountNumber = result.providerAccountNumber;
          
        }else{
          formObject.providerAccountNumber = null;
        }
      
        if(result.providerBankName){
          
            formObject.providerBankName = result.providerBankName;
          
        }else{
          formObject.providerBankName = null;
        }
      
        if(result.providerLegalRegisterNumber){
          
            formObject.providerLegalRegisterNumber = result.providerLegalRegisterNumber;
          
        }else{
          formObject.providerLegalRegisterNumber = null;
        }
      
        if(result.unitPrice){
          
            formObject.unitPrice = result.unitPrice;
          
        }else{
          formObject.unitPrice = null;
        }
      
        if(result.createdAtPlace){
          
            formObject.createdAtPlace = result.createdAtPlace;
          
        }else{
          formObject.createdAtPlace = null;
        }
      
        if(result.deadlineDateTime){
          
            formObject.deadlineDateTime = result.deadlineDateTime;
          
        }else{
          formObject.deadlineDateTime = null;
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
      
        
          "contractId":null,
        
      
        
          "investorBusinessName":null,
        
      
        
          "investorIco":null,
        
      
        
          "investorDic":null,
        
      
        
          "investorIcdph":null,
        
      
        
          "investorAccountNumber":null,
        
      
        
          "investorBankName":null,
        
      
        
          "investorLegalRegisterNumber":null,
        
      
        
          "providerbusinessName":null,
        
      
        
          "providerIco":null,
        
      
        
          "providerDic":null,
        
      
        
          "providerIcdph":null,
        
      
        
          "providerAccountNumber":null,
        
      
        
          "providerBankName":null,
        
      
        
          "providerLegalRegisterNumber":null,
        
      
        
          "unitPrice":null,
        
      
        
          "createdAtPlace":null,
        
      
        
          "deadlineDateTime":null 
        
      
      });
  }

}
