import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';
import InputElement from '../elements/input.element.js';
import randomstring from 'randomstring';

class PaymentPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'AdressPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get addNewCard() {
        return new ButtonElement($('//*[contains(text(), "Add new card")]'), 'Add a credit or debit card');
    }
    get name() {
        return new InputElement($('input[type="text"][matinput][aria-required="true"]'), 'Input Name');
    }
    get cardNumber() {
        return new InputElement($('input[type="number"][matinput][aria-required="true"]'), 'Input Card Number');
    }
    get expiryMonth() {
        return $('select[matnativecontrol]');
    }
    get chooseMonth() {
        return $(`option[class="ng-star-inserted"][value="${Math.floor(Math.random() * 12) + 1}"]`);
    }
    get expiryYear() {
        return $('select[matnativecontrol]');
    }
    get chooseYear() {
        return $('option[class="ng-star-inserted"][value="2080"]');
    }
    get cardRadioBtn() {
        return new ButtonElement($('mat-radio-button[class="mat-radio-button mat-accent"]'), 'Choose Card');
    }
    get submitBtn() {
        return new ButtonElement($('#submitButton'), 'Submit Add Card');
    }
    get continueBtn() {
        return new ButtonElement($('button.nextButton.mat-primary'), 'Continue');
    }

    async open() {
        await allure.addStep('Open Payment page');
        await super.open('payment/shop');
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async chooseMyYear() {
        await this.expiryYear.click();
        await this.chooseYear.click();
    }
    async chooseMyMonth() {
        await this.expiryMonth.click();
        await this.chooseMonth.click();
    }
    async addCard() {
        await allure.addStep('Add New Card');
        await this.addNewCard.click();
        await this.name.setValue(randomstring.generate({
            length: 8,
            charset: 'alphabetic'
        }));
        await this.cardNumber.setValue(randomstring.generate({
            length: 16,
            charset: 'numeric'
        }));
        await this.chooseMyMonth();
        await this.chooseMyYear();
        await this.submitBtn.click();
        await allure.endStep('passed');
    }

    async clickContinue() {
        await allure.addStep('Click Continue Button');
        await this.cardRadioBtn.click();
        await this.continueBtn.click();
        await allure.endStep('passed');
    }
}
export default new PaymentPage();