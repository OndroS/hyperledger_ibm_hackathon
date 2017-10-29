/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A shipment has been received by an importer
 * @param {org.acme.delivery.legalcontract.ServiceReceived} serviceReceived - the ServiceReceived transaction
 * @transaction
 */
function payOut(serviceReceived) {
    
        var contract = serviceReceived.delivery.contract;
        var delivery = serviceReceived.delivery;
        var payOut = contract.unitPrice;
    
        console.log('Received at: ' + serviceReceived.timestamp);
        console.log('Contract deadlineDateTime: ' + contract.deadlineDateTime);
    
        // set the status of the shipment
        delivery.status = 'DONE';
    
        console.log('Payout: ' + payOut, contract);
        contract.providerIco.accountBalance += payOut;
        contract.investorIco.accountBalance -= payOut;
    
        console.log('Investor: ' + contract.investorIco.$identifier + ' new balance: ' + contract.investorIco.accountBalance);
        console.log('Provider: ' + contract.providerIco.$identifier + ' new balance: ' + contract.providerIco.accountBalance);
    
        return getParticipantRegistry('org.acme.delivery.legalcontract.Investor')
            .then(function (investorRegistry) {
                // update the grower's balance
                return investorRegistry.update(contract.investorIco);
            })
            .then(function () {
                return getParticipantRegistry('org.acme.delivery.legalcontract.Provider');
            })
            .then(function (importerRegistry) {
                // update the importer's balance
                return importerRegistry.update(contract.providerIco);
            })
            .then(function () {
                return getAssetRegistry('org.acme.delivery.legalcontract.Delivery');
            })
            .then(function (deliveryRegistry) {
                // update the state of the shipment
                return deliveryRegistry.update(delivery);
            });
    }
    
    /**
     * A temperature reading has been received for a shipment
     * @param {org.acme.delivery.legalcontract.StatusReading} statusReading - the StatusReading transaction
     * @transaction
    
    function temperatureReading(temperatureReading) {
    
        var shipment = temperatureReading.shipment;
    
        console.log('Adding temperature ' + temperatureReading.centigrade + ' to shipment ' + shipment.$identifier);
    
        if (shipment.temperatureReadings) {
            shipment.temperatureReadings.push(temperatureReading);
        } else {
            shipment.temperatureReadings = [temperatureReading];
        }
    
        return getAssetRegistry('org.acme.shipping.perishable.Shipment')
            .then(function (shipmentRegistry) {
                // add the temp reading to the shipment
                return shipmentRegistry.update(shipment);
            });
    } */