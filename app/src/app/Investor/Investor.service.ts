import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Investor } from '../org.acme.delivery.legalcontract';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class InvestorService {

	
		private NAMESPACE: string = 'Investor';
	



    constructor(private dataService: DataService<Investor>) {
    };

    public getAll(): Observable<Investor[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Investor> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Investor> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Investor> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Investor> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
