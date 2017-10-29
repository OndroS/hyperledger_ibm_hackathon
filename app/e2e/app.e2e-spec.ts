import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('app');
    })
  });

  it('navbar-brand should be viceversa_ibm@0.1.0',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('viceversa_ibm@0.1.0');
  });

  
    it('Delivery component should be loadable',() => {
      page.navigateTo('/Delivery');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Delivery');
    });

    it('Delivery table should have 5 columns',() => {
      page.navigateTo('/Delivery');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });

  
    it('Contract component should be loadable',() => {
      page.navigateTo('/Contract');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Contract');
    });

    it('Contract table should have 19 columns',() => {
      page.navigateTo('/Contract');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(19); // Addition of 1 for 'Action' column
      });
    });

  

});
