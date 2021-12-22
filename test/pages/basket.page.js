import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class BasketPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('button[id="checkoutButton"'), 'BasketPageBase');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get checkoutBtn() {
        return new ButtonElement($('button[id="checkoutButton"'), 'Chekout Button');
    }
    get basketNtfctn() {
        return $('span.warn-notification');
    }
    get delItem() {
        return $('svg[data-icon="trash-alt"]');
    }

    async open() {
        await allure.addStep('Open basket page');
        await super.open('/basket');
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async clickChekout() {
        await allure.addStep('Click the Chekout Button');
        if (await this.basketNtfctn.isExisting() && this.basketNtfctn.getText() > 2) {
            await this.delItem.click();
            await this.checkoutBtn.click();
        }
        await this.checkoutBtn.click();
        await allure.endStep('passed');
    }
}
export default new BasketPage();