import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';
import InputElement from '../elements/input.element.js';
import randomstring from 'randomstring';

class AdressCreate extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'CreateAdressPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get country() {
        return new InputElement($('input[data-placeholder="Please provide a country."]'));
    }
    get name() {
        return new InputElement($('input[data-placeholder="Please provide a name."]'));
    }
    get mobile() {
        return new InputElement($('input[data-placeholder="Please provide a mobile number."]'));
    }
    get zip() {
        return new InputElement($('input[data-placeholder="Please provide a ZIP code."]'));
    }
    get address() {
        return $('#address');
    }
    get city() {
        return new InputElement($('input[data-placeholder="Please provide a city."]'));
    }
    get state() {
        return new InputElement($('input[data-placeholder="Please provide a state."]'));
    }
    get btnSubmit() {
        return new ButtonElement($('button#submitButton'), 'Submit');
    }

    async open() {
        await allure.addStep('Open Create Page');
        await super.open('/address/create');
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async addNewAddress() {
        await allure.addStep(`Create new Adress`);
        await this.country.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.name.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.mobile.setValue(randomstring.generate({
            length: 8,
            charset: 'numeric'
        }, 0));
        await this.zip.setValue(randomstring.generate({
            length: 5,
            charset: 'numeric'
        }));
        await this.address.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.city.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.state.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.btnSubmit.click();
        await allure.endStep('passed');
    }
}
export default new AdressCreate();