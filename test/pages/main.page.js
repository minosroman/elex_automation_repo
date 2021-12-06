import BasePage from '../base/base.page.js';

class MainPage extends BasePage {

    get accountMenuBtn() {
        return $('#navbarAccount');
    }
    get loginBtn() {
        return $('#navbarLoginButton');
    }
    get closePopupBtn() {
        return $('button.close-dialog');
    }
    get closeCookieBtn() {
        return $('a[aria-label="dismiss cookie message"]');
    }
    get logoutBtn() {
        return $('#navbarLogoutButton');
    }
    get basketBtn() {
        return $('button[routerlink="/basket"]');
    }
    get sideMenuBtn() {
        return $('button[aria-label="Open Sidenav"]');
    }
    get aboutUsBtn() {
        return $('div a[routerlink="/about"]');
    }

    async open() {
        await super.open('/');
        await this.closePopupBtn.click();
        await this.closeCookieBtn.click();
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
    async checkLoginStatus() {
        if(this.basketBtn.toBeExisting()){
            return await this.basketBtn;
        }
    }

}
export default new MainPage();