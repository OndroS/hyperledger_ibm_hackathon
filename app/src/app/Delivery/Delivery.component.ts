import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeliveryService } from './Delivery.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-Delivery',
	templateUrl: './Delivery.component.html',
	styleUrls: ['./Delivery.component.css'],
  providers: [DeliveryService]
})
export class DeliveryComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

          deliveryId = new FormControl("", Validators.required);
          status = new FormControl("", Validators.required);
          unitCount = new FormControl("", Validators.required);
          contract = new FormControl("", Validators.required);


  constructor(private serviceDelivery:DeliveryService, fb: FormBuilder) {
    this.myForm = fb.group({
    
          deliveryId:this.deliveryId,    
        
          status:this.status,
                
          unitCount:this.unitCount,    
        
          contract:this.contract
    
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
      $class: "org.acme.delivery.legalcontract.Delivery",
      
        
          "deliveryId":this.deliveryId.value,
        
      
        
          "status":this.status.value,
        
      
        
          "unitCount":this.unitCount.value,
        
      
        
          "contract":this.contract.value
        
      
    };

    this.myForm.setValue({
      
        
          "deliveryId":null,
        
      
        
          "status":null,
        
      
        
          "unitCount":null,
        
      
        
          "contract":null
        
      
    });

    return this.serviceDelivery.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "deliveryId":null,
        
      
        
          "status":null,
        
      
        
          "unitCount":null,
        
      
        
          "contract":null 
        
      
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
      $class: "org.acme.delivery.legalcontract.Delivery",
            "status":this.status.value,
            "unitCount":this.unitCount.value,
            "contract":this.contract.value
    };

    return this.serviceDelivery.updateAsset(form.get("deliveryId").value,this.asset)
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

  isDoneAsset(): Promise<any> {
    
        return this.serviceDelivery.isDoneAsset(this.currentId)
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
            "deliveryId":null,
            "status":null,
            "unitCount":null,
            "contract":null 
      };



      
        if(result.deliveryId){
          
            formObject.deliveryId = result.deliveryId;
          
        }else{
          formObject.deliveryId = null;
        }
      
        if(result.status){
          
            formObject.status = result.status;
          
        }else{
          formObject.status = null;
        }
      
        if(result.unitCount){
          
            formObject.unitCount = result.unitCount;
          
        }else{
          formObject.unitCount = null;
        }
      
        if(result.contract){
          
            formObject.contract = result.contract;
          
        }else{
          formObject.contract = null;
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
          "deliveryId":null,
          "status":null,
          "unitCount":null,
          "contract":null 
      });
  }

}
