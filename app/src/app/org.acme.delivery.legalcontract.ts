import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.delivery.legalcontract{
   export enum DeliveryStatus {
      CREATED,
      IN_PROGRESS,
      DONE,
   }
   export abstract class DeliveryTransaction extends Transaction {
      delivery: Delivery;
   }
   export class ServiceReceived extends DeliveryTransaction {
   }
   export class Delivery extends Asset {
      deliveryId: string;
      status: DeliveryStatus;
      unitCount: number;
      contract: Contract;
   }
   export class Contract extends Asset {
      contractId: string;
      investorBusinessName: string;
      investorIco: Investor;
      investorDic: string;
      investorIcdph: string;
      investorAccountNumber: string;
      investorBankName: string;
      investorLegalRegisterNumber: string;
      providerbusinessName: string;
      providerIco: Provider;
      providerDic: string;
      providerIcdph: string;
      providerAccountNumber: string;
      providerBankName: string;
      providerLegalRegisterNumber: string;
      unitPrice: number;
      createdAtPlace: string;
      deadlineDateTime: Date;
   }
   export class Address {
      city: string;
      country: string;
      street: string;
      zip: string;
   }
   export abstract class Business extends Participant {
      businessName: string;
      ico: string;
      address: Address;
      accountBalance: number;
   }
   export class Provider extends Business {
   }
   export class Shipper extends Business {
   }
   export class Investor extends Business {
   }
// }
