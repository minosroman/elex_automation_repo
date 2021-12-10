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
        await super.open('/');
        if (await this.closePopupBtn.isExisting()) await this.closePopupBtn.click();
        if (await this.allowCookiesBtn.isExisting()) await this.allowCookiesBtn.click();
    }
    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }
    async navigateToLogin() {
        await this.openAccountMenu();
        await this.loginBtn.click();
    }
    async showSideMenu() {
        await this.sideMenuBtn.click();
        await this.aboutUsBtn.click();
    }

}
export default new MainPage();