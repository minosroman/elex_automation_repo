import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class MainPage extends BasePage {
    async getBaseElement() {
        return new ButtonElement($('.logo'), 'MainPageBase');
    }
    get accountMenuBtn() {
        return new ButtonElement($('#navbarAccount'), 'Navbar Account Menu');
    }
    get loginBtn() {
        return new ButtonElement($('#navbarLoginButton'), 'Login Button');
    }
    get profileBtn() {
        return new ButtonElement($('button[aria-label="Go to user profile"]'), 'Profile Button');
    }
    get closePopupBtn() {
        return new ButtonElement($('button.close-dialog'), 'Button Close Popup Dialog');
    }
    get allowCookiesBtn() {
        return new ButtonElement($('a[aria-label="dismiss cookie message"]'), 'Button Allow Cookies');
    }
    get forcePageReloadBtn() {
        return new ButtonElement($('//*[contains(text(), "Force page reload")]'), 'Button Force page reload"');
    }
    get snackBar() {
        return new ButtonElement($('//span[contains(@class,"mat-button-wrapper") and contains(text(), "X")]'), 'Close Snack Bar');
    }
    get logoutBtn() {
        return new ButtonElement($('#navbarLogoutButton'), 'Logout');
    }
    get basketBtn() {
        return new ButtonElement($('button[routerlink="/basket"]'), 'Your Basket');
    }
    get sideMenuBtn() {
        return new ButtonElement($('button[aria-label="Open Sidenav"]'), 'Side Menu');
    }
    get aboutUsBtn() {
        return new ButtonElement($('div a[routerlink="/about"]'), 'About Us!');
    }
    get feedbackBtn() {
        return new ButtonElement($('div a[routerlink="/contact"]'), 'Customer Feedback');
    }
    get rndmAddToBasket() {
        return new ButtonElement($('button[aria-label="Add to Basket"]'), 'Add To Cart Random Item');
    }
    get addToBasketSold() {
        return new ButtonElement($('//mat-card[div[span[contains(text(), "Sold Out")]]]//button'), 'Add To Cart Sold Item');
    }
    get soldMsg() {
        return $('//span[contains(text(), "We are out of stock! Sorry for the inconvenience.")]');
    }
    
    async open() {
        await allure.addStep('Open main page & close All Popups');
        await super.open('/');
        if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
        if (await this.allowCookiesBtn.isExisting()) await this.allowCookiesBtn.click();
        if (await this.forcePageReloadBtn.isExisting()) await this.forcePageReloadBtn.click();
        if (await this.snackBar.isExisting()) await this.snackBar.click();
        await allure.endStep('passed');
    }
    async openAccountMenu() {
        await allure.addStep('Open the Account dropdown Menu');
        await this.accountMenuBtn.click();
        await allure.endStep('passed');
    }
    async clickLogin() {
        await allure.addStep('Open the Login Page');
        await this.loginBtn.click();
        await allure.endStep('passed');
    }
    async openProfile() {
        await allure.addStep('Open the Profile Page');
        await this.profileBtn.click();
        await allure.endStep('passed');
    }
    async clickAddToBasket() {
        await allure.addStep('Click add to basket');
        await this.rndmAddToBasket.click();
        await allure.endStep('passed');
    }
    async clickAddToBasketSoldItem() {
        await allure.addStep('Click add to basket sold item');
        await this.addToBasketSold.click();
        await allure.endStep('passed');
    }
    async clickOpenBasket() {
        await allure.addStep('Open Basket Page');
        await this.basketBtn.click();
        await allure.endStep('passed');
    }
    async openAboutUsPage() {
        await allure.addStep('Open About US Page');
        await this.sideMenuBtn.click();
        await this.aboutUsBtn.click();
        await allure.endStep('passed');
    }
    async openFeedbackPage() {
        await allure.addStep('Open Customer Feedback Page');
        await this.sideMenuBtn.click();
        await this.feedbackBtn.click();
        await allure.endStep('passed');
    }
    async checkLoginStatus() {
        return this.logoutBtn;
    }
}
export default new MainPage();