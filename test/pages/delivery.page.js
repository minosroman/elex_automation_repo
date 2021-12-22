import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class DeliveryMethod extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'AdressPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get onedayDeliveryBtn() {
        return new ButtonElement($('//*[contains(text(), "One Day Delivery")]'), 'One Day Delivery');
    }
    get continueBtn() {
        return new ButtonElement($('button.nextButton.mat-primary'), 'Continue');
    }

    async open() {
        await allure.addStep('Open Delivery Method page');
        await super.open('/delivery-method');
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async clickContinue() {
        await allure.addStep('Click Continue Button');
        await this.onedayDeliveryBtn.click();
        await this.continueBtn.click();
        await allure.endStep('passed');
    }
}
export default new DeliveryMethod();