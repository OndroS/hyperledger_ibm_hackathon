import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Provider } from '../org.acme.delivery.legalcontract';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ProviderService {

	
		private NAMESPACE: string = 'Provider';
	



    constructor(private dataService: DataService<Provider>) {
    };

    public getAll(): Observable<Provider[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<Provider> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<Provider> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<Provider> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<Provider> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
