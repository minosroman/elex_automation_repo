import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class AdressSelect extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'AdressPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get addNewAdressBtn() {
        return new ButtonElement($('button[aria-label="Add a new address"]'), 'Add New Adress Button');
    }
    get radioBtn() {
        return new ButtonElement($('.mat-row.cdk-row.ng-star-inserted'), 'Check Address');
    }
    get continueBtn() {
        return new ButtonElement($('button[aria-label="Proceed to payment selection"]'), 'Continue');
    }

    async open() {
        await allure.addStep('Open Adress page');
        await super.open('/address/select');
        await allure.endStep('passed');
    }
    async clickAddNew() {
        await allure.addStep('Click Add New Adress Button');
        await this.addNewAdressBtn.click();
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async clickContinue() {
        await allure.addStep('Click Continue Button');
        await this.radioBtn.click();
        await this.continueBtn.click();
        await allure.endStep('passed');
    }
}
export default new AdressSelect();