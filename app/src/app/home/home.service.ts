import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Delivery } from '../org.acme.delivery.legalcontract';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DeliveryService {

	
		private NAMESPACE: string = 'Delivery';
	



    constructor(private dataService: DataService<Delivery>) {
    };

    public getAll(): Observable<Delivery[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Delivery> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Delivery> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Delivery> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Delivery> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
