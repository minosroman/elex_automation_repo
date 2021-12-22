import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class OrderSummary extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('.logo'), 'AdressPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get checkoutBtn() {
        return new ButtonElement($('#checkoutButton'), 'Place your order and pay');
    }

    async open() {
        await allure.addStep('Open Order Summary page');
        await super.open('/order-summary');
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async clickCheckout() {
        await allure.addStep('Click Checkout Button');
        await this.checkoutBtn.click();
        await allure.endStep('passed');
    }
}
export default new OrderSummary();