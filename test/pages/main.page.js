import BasePage from '../base/base.page.js';
import ButtonElement from '../elements/button.element.js';

class MainPage extends BasePage {

    async getBaseElement() {
        return new ButtonElement($('#navbarLoginButton'), 'MainPageBase');
    }
    get accountMenuBtn() {
        return new ButtonElement($('#navbarAccount'), 'Navbar Account Menu');
    }
    get loginBtn() {
        return new ButtonElement($('#navbarLoginButton'), 'Login Button');
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
    async open() {
        await allure.addStep('Open main page & close All Popups');
        await super.open('/');
        if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
        if (await this.allowCookiesBtn.isExisting()) await this.allowCookiesBtn.click();
        if (await this.forcePageReloadBtn.isExisting()) await this.forcePageReloadBtn.click();
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
    async openAboutUsPage() {
        await allure.addStep('Open About US Page');
        await this.sideMenuBtn.click();
        await this.aboutUsBtn.click();
        await allure.endStep('passed');
    }
    async checkLoginStatus() {
        return this.logoutBtn;
    }
}
export default new MainPage();